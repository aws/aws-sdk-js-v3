import { _PatchFilterGroup } from "./_PatchFilterGroup";
import { _PatchRuleGroup } from "./_PatchRuleGroup";
import { _PatchIdList } from "./_PatchIdList";
import { _PatchGroupList } from "./_PatchGroupList";
import { _PatchSourceList } from "./_PatchSourceList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetPatchBaselineOutput: _Structure_ = {
  type: "structure",
  required: [],
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
    OperatingSystem: {
      shape: {
        type: "string"
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
    PatchGroups: {
      shape: _PatchGroupList
    },
    CreatedDate: {
      shape: {
        type: "timestamp"
      }
    },
    ModifiedDate: {
      shape: {
        type: "timestamp"
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
    }
  }
};
