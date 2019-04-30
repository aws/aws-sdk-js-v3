import { resolveConfiguration } from "./index";
import { ConfigurationDefinition } from "@aws-sdk/types";

describe("resolveConfiguration", () => {
  it("should throw if a required property is not supplied", () => {
    const definition: ConfigurationDefinition<
      { region: string },
      { region: string }
    > = {
      region: {
        required: true
      }
    };
    const config = {};

    expect(() => resolveConfiguration(config, definition, {} as any)).toThrow();
  });

  it("should inject a default value if a property is not supplied", () => {
    const definition: ConfigurationDefinition<
      { region?: string },
      { region: string }
    > = {
      region: {
        required: false,
        defaultValue: "us-west-2"
      }
    };

    expect(resolveConfiguration({}, definition, {} as any)).toEqual({
      region: "us-west-2"
    });
  });

  it("should not inject a default value if a property is supplied", () => {
    const definition: ConfigurationDefinition<
      { region?: string },
      { region: string }
    > = {
      region: {
        required: false,
        defaultValue: "us-west-2"
      }
    };

    expect(
      resolveConfiguration({ region: "eu-central-1" }, definition, {} as any)
    ).toEqual({ region: "eu-central-1" });
  });

  it("should call a default provider and inject its return value if a property is not supplied", () => {
    const defaultProvider = jest.fn(() => "us-west-2");
    const definition: ConfigurationDefinition<
      { region?: string },
      { region: string }
    > = {
      region: {
        required: false,
        defaultProvider
      }
    };
    const config = {};

    expect(resolveConfiguration(config, definition, {} as any)).toEqual({
      region: "us-west-2"
    });
    expect(defaultProvider.mock.calls.length).toBe(1);
  });

  it("should not call a default provider if a property is supplied", () => {
    const defaultProvider = jest.fn(() => "us-west-2");
    const definition: ConfigurationDefinition<
      { region?: string },
      { region: string }
    > = {
      region: {
        required: false,
        defaultProvider
      }
    };

    expect(
      resolveConfiguration({ region: "eu-central-1" }, definition, {} as any)
    ).toEqual({ region: "eu-central-1" });
    expect(defaultProvider.mock.calls.length).toBe(0);
  });

  it("should always call a normalizer function if one is provided", () => {
    const normalize = jest.fn(() => "normalized!");
    const middlewareStack = {} as any;
    const definition: ConfigurationDefinition<
      { region: string },
      { region: string }
    > = {
      region: {
        required: true,
        normalize
      }
    };
    expect(
      resolveConfiguration(
        { region: "eu-central-1" },
        definition,
        middlewareStack
      )
    ).toEqual({ region: "normalized!" });
    expect(normalize.mock.calls.length).toBe(1);
    expect(normalize.mock.calls[0][0]).toBe("eu-central-1");
  });

  it("should always call an apply function if one is provided", () => {
    const apply = jest.fn(() => {});
    const middlewareStack = {} as any;
    const definition: ConfigurationDefinition<
      { region: string },
      { region: string }
    > = {
      region: {
        required: true,
        apply
      }
    };

    expect(
      resolveConfiguration(
        { region: "eu-central-1" },
        definition,
        middlewareStack
      )
    ).toEqual({ region: "eu-central-1" });

    expect(apply.mock.calls.length).toBe(1);
    expect(apply.mock.calls[0]).toEqual([
      { region: "eu-central-1" },
      middlewareStack
    ]);
  });
});
