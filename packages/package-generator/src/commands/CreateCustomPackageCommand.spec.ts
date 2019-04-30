import { CreateCustomPackageCommand } from "./CreateCustomPackageCommand";

jest.mock("../importModule", () => {
  return { importModule: jest.fn() };
});
import { importModule } from "../importModule";

jest.mock("../ModuleGenerator", () => {
  return { ModuleGenerator: jest.fn(() => ({})) };
});
import { ModuleGenerator } from "../ModuleGenerator";

describe("CreateCustomPackageCommand", () => {
  describe(".handler", () => {
    beforeEach(() => {
      (ModuleGenerator as any).mockClear();
      (importModule as any).mockClear();
    });

    it("should pass the arguments to ModuleGenerator and invoke the importModuleFunction", () => {
      const args = { name: "name" };
      CreateCustomPackageCommand.handler(args);

      expect((ModuleGenerator as any).mock.calls[0][0]).toBe(args);
      expect((importModule as any).mock.calls.length).toBe(1);
    });
  });
});
