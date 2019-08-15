import { _SupplementaryConfiguration } from "./_SupplementaryConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BaseConfigurationItem: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    version: {
      shape: {
        type: "string"
      }
    },
    accountId: {
      shape: {
        type: "string"
      }
    },
    configurationItemCaptureTime: {
      shape: {
        type: "timestamp"
      }
    },
    configurationItemStatus: {
      shape: {
        type: "string"
      }
    },
    configurationStateId: {
      shape: {
        type: "string"
      }
    },
    arn: {
      shape: {
        type: "string"
      }
    },
    resourceType: {
      shape: {
        type: "string"
      }
    },
    resourceId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    resourceName: {
      shape: {
        type: "string"
      }
    },
    awsRegion: {
      shape: {
        type: "string",
        min: 1
      }
    },
    availabilityZone: {
      shape: {
        type: "string"
      }
    },
    resourceCreationTime: {
      shape: {
        type: "timestamp"
      }
    },
    configuration: {
      shape: {
        type: "string"
      }
    },
    supplementaryConfiguration: {
      shape: _SupplementaryConfiguration
    }
  }
};
