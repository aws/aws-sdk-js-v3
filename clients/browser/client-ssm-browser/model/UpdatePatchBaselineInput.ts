import { _PatchFilterGroup } from "./_PatchFilterGroup";
import { _PatchRuleGroup } from "./_PatchRuleGroup";
import { _PatchIdList } from "./_PatchIdList";
import { _PatchSourceList } from "./_PatchSourceList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdatePatchBaselineInput: _Structure_ = {
  type: "structure",
  required: ["BaselineId"],
  members: {
    BaselineId: {
      shape: {
        type: "string",
        min: 20
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 3
      }
    },
    GlobalFilters: {
      shape: _PatchFilterGroup
    },
    ApprovalRules: {
      shape: _PatchRuleGroup
    },
    ApprovedPatches: {
      shape: _PatchIdList
    },
    ApprovedPatchesComplianceLevel: {
      shape: {
        type: "string"
      }
    },
    ApprovedPatchesEnableNonSecurity: {
      shape: {
        type: "boolean"
      }
    },
    RejectedPatches: {
      shape: _PatchIdList
    },
    RejectedPatchesAction: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Sources: {
      shape: _PatchSourceList
    },
    Replace: {
      shape: {
        type: "boolean"
      }
    }
  }
};
