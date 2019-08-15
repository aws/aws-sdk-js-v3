import { _Parameters } from "./_Parameters";
import { _InstanceAssociationOutputLocation } from "./_InstanceAssociationOutputLocation";
import { _Targets } from "./_Targets";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateAssociationInput: _Structure_ = {
  type: "structure",
  required: ["AssociationId"],
  members: {
    AssociationId: {
      shape: {
        type: "string"
      }
    },
    Parameters: {
      shape: _Parameters
    },
    DocumentVersion: {
      shape: {
        type: "string"
      }
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
    Name: {
      shape: {
        type: "string"
      }
    },
    Targets: {
      shape: _Targets
    },
    AssociationName: {
      shape: {
        type: "string"
      }
    },
    AssociationVersion: {
      shape: {
        type: "string"
      }
    },
    AutomationTargetParameterName: {
      shape: {
        type: "string",
        min: 1
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
