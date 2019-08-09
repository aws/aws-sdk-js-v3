import { _Targets } from "./_Targets";
import { _PatchOrchestratorFilterList } from "./_PatchOrchestratorFilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeMaintenanceWindowScheduleInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    WindowId: {
      shape: {
        type: "string",
        min: 20
      }
    },
    Targets: {
      shape: _Targets
    },
    ResourceType: {
      shape: {
        type: "string"
      }
    },
    Filters: {
      shape: _PatchOrchestratorFilterList
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
