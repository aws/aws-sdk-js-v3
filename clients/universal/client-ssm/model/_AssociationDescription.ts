import { _AssociationStatus } from "./_AssociationStatus";
import { _AssociationOverview } from "./_AssociationOverview";
import { _Parameters } from "./_Parameters";
import { _Targets } from "./_Targets";
import { _InstanceAssociationOutputLocation } from "./_InstanceAssociationOutputLocation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AssociationDescription: _Structure_ = {
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
    AssociationVersion: {
      shape: {
        type: "string"
      }
    },
    Date: {
      shape: {
        type: "timestamp"
      }
    },
    LastUpdateAssociationDate: {
      shape: {
        type: "timestamp"
      }
    },
    Status: {
      shape: _AssociationStatus
    },
    Overview: {
      shape: _AssociationOverview
    },
    DocumentVersion: {
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
    Parameters: {
      shape: _Parameters
    },
    AssociationId: {
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
    LastExecutionDate: {
      shape: {
        type: "timestamp"
      }
    },
    LastSuccessfulExecutionDate: {
      shape: {
        type: "timestamp"
      }
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
