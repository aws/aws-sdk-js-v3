import { _EnvironmentResourcesDescription } from "./_EnvironmentResourcesDescription";
import { _EnvironmentTier } from "./_EnvironmentTier";
import { _EnvironmentLinks } from "./_EnvironmentLinks";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const TerminateEnvironmentOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EnvironmentName: {
      shape: {
        type: "string",
        min: 4
      }
    },
    EnvironmentId: {
      shape: {
        type: "string"
      }
    },
    ApplicationName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    VersionLabel: {
      shape: {
        type: "string",
        min: 1
      }
    },
    SolutionStackName: {
      shape: {
        type: "string"
      }
    },
    PlatformArn: {
      shape: {
        type: "string"
      }
    },
    TemplateName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    EndpointURL: {
      shape: {
        type: "string"
      }
    },
    CNAME: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DateCreated: {
      shape: {
        type: "timestamp"
      }
    },
    DateUpdated: {
      shape: {
        type: "timestamp"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    AbortableOperationInProgress: {
      shape: {
        type: "boolean"
      }
    },
    Health: {
      shape: {
        type: "string"
      }
    },
    HealthStatus: {
      shape: {
        type: "string"
      }
    },
    Resources: {
      shape: _EnvironmentResourcesDescription
    },
    Tier: {
      shape: _EnvironmentTier
    },
    EnvironmentLinks: {
      shape: _EnvironmentLinks
    },
    EnvironmentArn: {
      shape: {
        type: "string"
      }
    }
  }
};
