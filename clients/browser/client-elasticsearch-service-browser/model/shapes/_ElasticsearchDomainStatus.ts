import { _EndpointsMap } from "./_EndpointsMap";
import { _ElasticsearchClusterConfig } from "./_ElasticsearchClusterConfig";
import { _EBSOptions } from "./_EBSOptions";
import { _SnapshotOptions } from "./_SnapshotOptions";
import { _VPCDerivedInfo } from "./_VPCDerivedInfo";
import { _CognitoOptions } from "./_CognitoOptions";
import { _EncryptionAtRestOptions } from "./_EncryptionAtRestOptions";
import { _NodeToNodeEncryptionOptions } from "./_NodeToNodeEncryptionOptions";
import { _AdvancedOptions } from "./_AdvancedOptions";
import { _LogPublishingOptions } from "./_LogPublishingOptions";
import { _ServiceSoftwareOptions } from "./_ServiceSoftwareOptions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ElasticsearchDomainStatus: _Structure_ = {
  type: "structure",
  required: ["DomainId", "DomainName", "ARN", "ElasticsearchClusterConfig"],
  members: {
    DomainId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DomainName: {
      shape: {
        type: "string",
        min: 3
      }
    },
    ARN: {
      shape: {
        type: "string"
      }
    },
    Created: {
      shape: {
        type: "boolean"
      }
    },
    Deleted: {
      shape: {
        type: "boolean"
      }
    },
    Endpoint: {
      shape: {
        type: "string"
      }
    },
    Endpoints: {
      shape: _EndpointsMap
    },
    Processing: {
      shape: {
        type: "boolean"
      }
    },
    UpgradeProcessing: {
      shape: {
        type: "boolean"
      }
    },
    ElasticsearchVersion: {
      shape: {
        type: "string"
      }
    },
    ElasticsearchClusterConfig: {
      shape: _ElasticsearchClusterConfig
    },
    EBSOptions: {
      shape: _EBSOptions
    },
    AccessPolicies: {
      shape: {
        type: "string"
      }
    },
    SnapshotOptions: {
      shape: _SnapshotOptions
    },
    VPCOptions: {
      shape: _VPCDerivedInfo
    },
    CognitoOptions: {
      shape: _CognitoOptions
    },
    EncryptionAtRestOptions: {
      shape: _EncryptionAtRestOptions
    },
    NodeToNodeEncryptionOptions: {
      shape: _NodeToNodeEncryptionOptions
    },
    AdvancedOptions: {
      shape: _AdvancedOptions
    },
    LogPublishingOptions: {
      shape: _LogPublishingOptions
    },
    ServiceSoftwareOptions: {
      shape: _ServiceSoftwareOptions
    }
  }
};
