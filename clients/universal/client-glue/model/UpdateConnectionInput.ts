import { _ConnectionInput } from "./_ConnectionInput";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateConnectionInput: _Structure_ = {
  type: "structure",
  required: ["Name", "ConnectionInput"],
  members: {
    CatalogId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ConnectionInput: {
      shape: _ConnectionInput
    }
  }
};
