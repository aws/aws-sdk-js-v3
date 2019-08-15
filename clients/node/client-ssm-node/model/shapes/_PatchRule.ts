import { _PatchFilterGroup } from "./_PatchFilterGroup";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PatchRule: _Structure_ = {
  type: "structure",
  required: ["PatchFilterGroup", "ApproveAfterDays"],
  members: {
    PatchFilterGroup: {
      shape: _PatchFilterGroup
    },
    ComplianceLevel: {
      shape: {
        type: "string"
      }
    },
    ApproveAfterDays: {
      shape: {
        type: "integer"
      }
    },
    EnableNonSecurity: {
      shape: {
        type: "boolean"
      }
    }
  }
};
