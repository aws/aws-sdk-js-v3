import { _PatchFilterGroup } from "./_PatchFilterGroup";
import { _PatchRuleGroup } from "./_PatchRuleGroup";
import { _PatchIdList } from "./_PatchIdList";
import { _PatchSourceList } from "./_PatchSourceList";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreatePatchBaselineInput: _Structure_ = {
  type: "structure",
  required: ["Name"],
  members: {
    OperatingSystem: {
      shape: {
        type: "string"
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
    ClientToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Tags: {
      shape: _TagList
    }
  }
};
