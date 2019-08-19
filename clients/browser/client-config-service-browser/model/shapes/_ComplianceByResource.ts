import { _Compliance } from "./_Compliance";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ComplianceByResource: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ResourceType: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ResourceId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Compliance: {
      shape: _Compliance
    }
  }
};
