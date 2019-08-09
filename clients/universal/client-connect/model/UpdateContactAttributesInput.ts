import { _Attributes } from "./_Attributes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateContactAttributesInput: _Structure_ = {
  type: "structure",
  required: ["InitialContactId", "InstanceId", "Attributes"],
  members: {
    InitialContactId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    InstanceId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Attributes: {
      shape: _Attributes
    }
  }
};
