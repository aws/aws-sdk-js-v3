import { _Tags } from "./_Tags";
import { _RelatedEventList } from "./_RelatedEventList";
import { _RelationshipList } from "./_RelationshipList";
import { _SupplementaryConfiguration } from "./_SupplementaryConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ConfigurationItem: _Structure_ = {
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
    configurationItemMD5Hash: {
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
    tags: {
      shape: _Tags
    },
    relatedEvents: {
      shape: _RelatedEventList
    },
    relationships: {
      shape: _RelationshipList
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
