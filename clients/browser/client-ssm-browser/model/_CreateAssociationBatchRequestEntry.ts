import { _Parameters } from "./_Parameters";
import { _Targets } from "./_Targets";
import { _InstanceAssociationOutputLocation } from "./_InstanceAssociationOutputLocation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CreateAssociationBatchRequestEntry: _Structure_ = {
  type: "structure",
  required: ["Name"],
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
    Parameters: {
      shape: _Parameters
    },
    AutomationTargetParameterName: {
      shape: {
        type: "string",
        min: 1
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
    ScheduleExpression: {
      shape: {
        type: "string",
        min: 1
      }
    },
    OutputLocation: {
      shape: _InstanceAssociationOutputLocation
    },
    AssociationName: {
      shape: {
        type: "string"
      }
    },
    MaxErrors: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MaxConcurrency: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ComplianceSeverity: {
      shape: {
        type: "string"
      }
    }
  }
};
