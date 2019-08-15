import { _ComplianceResourceTypes } from "./_ComplianceResourceTypes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Scope: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ComplianceResourceTypes: {
      shape: _ComplianceResourceTypes
    },
    TagKey: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TagValue: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ComplianceResourceId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
