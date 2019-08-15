import { _ConnectionInput } from "./_ConnectionInput";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateConnectionInput: _Structure_ = {
  type: "structure",
  required: ["ConnectionInput"],
  members: {
    CatalogId: {
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
