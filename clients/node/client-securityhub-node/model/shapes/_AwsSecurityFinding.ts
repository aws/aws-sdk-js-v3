import { _TypeList } from "./_TypeList";
import { _Severity } from "./_Severity";
import { _Remediation } from "./_Remediation";
import { _FieldMap } from "./_FieldMap";
import { _MalwareList } from "./_MalwareList";
import { _Network } from "./_Network";
import { _ProcessDetails } from "./_ProcessDetails";
import { _ThreatIntelIndicatorList } from "./_ThreatIntelIndicatorList";
import { _ResourceList } from "./_ResourceList";
import { _Compliance } from "./_Compliance";
import { _RelatedFindingList } from "./_RelatedFindingList";
import { _Note } from "./_Note";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AwsSecurityFinding: _Structure_ = {
  type: "structure",
  required: [
    "SchemaVersion",
    "Id",
    "ProductArn",
    "GeneratorId",
    "AwsAccountId",
    "Types",
    "CreatedAt",
    "UpdatedAt",
    "Severity",
    "Title",
    "Description",
    "Resources"
  ],
  members: {
    SchemaVersion: {
      shape: {
        type: "string"
      }
    },
    Id: {
      shape: {
        type: "string"
      }
    },
    ProductArn: {
      shape: {
        type: "string"
      }
    },
    GeneratorId: {
      shape: {
        type: "string"
      }
    },
    AwsAccountId: {
      shape: {
        type: "string"
      }
    },
    Types: {
      shape: _TypeList
    },
    FirstObservedAt: {
      shape: {
        type: "string"
      }
    },
    LastObservedAt: {
      shape: {
        type: "string"
      }
    },
    CreatedAt: {
      shape: {
        type: "string"
      }
    },
    UpdatedAt: {
      shape: {
        type: "string"
      }
    },
    Severity: {
      shape: _Severity
    },
    Confidence: {
      shape: {
        type: "integer"
      }
    },
    Criticality: {
      shape: {
        type: "integer"
      }
    },
    Title: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    Remediation: {
      shape: _Remediation
    },
    SourceUrl: {
      shape: {
        type: "string"
      }
    },
    ProductFields: {
      shape: _FieldMap
    },
    UserDefinedFields: {
      shape: _FieldMap
    },
    Malware: {
      shape: _MalwareList
    },
    Network: {
      shape: _Network
    },
    Process: {
      shape: _ProcessDetails
    },
    ThreatIntelIndicators: {
      shape: _ThreatIntelIndicatorList
    },
    Resources: {
      shape: _ResourceList
    },
    Compliance: {
      shape: _Compliance
    },
    VerificationState: {
      shape: {
        type: "string"
      }
    },
    WorkflowState: {
      shape: {
        type: "string"
      }
    },
    RecordState: {
      shape: {
        type: "string"
      }
    },
    RelatedFindings: {
      shape: _RelatedFindingList
    },
    Note: {
      shape: _Note
    }
  }
};
