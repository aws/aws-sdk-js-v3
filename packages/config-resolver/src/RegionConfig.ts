import { Provider } from "@aws-sdk/types";

export namespace Region {
  export interface Input {
    /**
     * The AWS region to which this client will send requests
     */
    region?: string | Provider<string>;
  }
  interface PreviouslyResolved {
    regionDefaultProvider: (input: any) => Provider<string>;
  }
  export interface Resolved {
    region: Provider<string>;
  }
  export function resolveConfig<T>(
    input: T & Input & PreviouslyResolved
  ): T & Resolved {
    let region = input.region || input.regionDefaultProvider(input as any);
    return {
      ...input,
      region: normalizeRegion(region)
    };
  }
}
//export separately for showing comment block in Intellisense
export type RegionInput = Region.Input;

function normalizeRegion(region: string | Provider<string>): Provider<string> {
  if (typeof region === "string") {
    const promisified = Promise.resolve(region);
    return () => promisified;
  }
  return region as Provider<string>;
}
