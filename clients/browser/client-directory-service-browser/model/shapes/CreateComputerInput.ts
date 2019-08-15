import { _Attributes } from "./_Attributes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateComputerInput: _Structure_ = {
  type: "structure",
  required: ["DirectoryId", "ComputerName", "Password"],
  members: {
    DirectoryId: {
      shape: {
        type: "string"
      }
    },
    ComputerName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Password: {
      shape: {
        type: "string",
        sensitive: true,
        min: 8
      }
    },
    OrganizationalUnitDistinguishedName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ComputerAttributes: {
      shape: _Attributes
    }
  }
};
