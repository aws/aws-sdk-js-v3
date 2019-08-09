import { _Targets } from "./_Targets";
import { _AssociationOverview } from "./_AssociationOverview";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Association: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    InstanceId: {
      shape: {
        type: "string"
      }
    },
    AssociationId: {
      shape: {
        type: "string"
      }
    },
    AssociationVersion: {
      shape: {
        type: "string"
      }
    },
    DocumentVersion: {
      shape: {
        type: "string"
      }
    },
    Targets: {
      shape: _Targets
    },
    LastExecutionDate: {
      shape: {
        type: "timestamp"
      }
    },
    Overview: {
      shape: _AssociationOverview
    },
    ScheduleExpression: {
      shape: {
        type: "string",
        min: 1
      }
    },
    AssociationName: {
      shape: {
        type: "string"
      }
    }
  }
};
