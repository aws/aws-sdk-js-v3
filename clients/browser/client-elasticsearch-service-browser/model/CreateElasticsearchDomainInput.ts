import { _ElasticsearchClusterConfig } from "./_ElasticsearchClusterConfig";
import { _EBSOptions } from "./_EBSOptions";
import { _SnapshotOptions } from "./_SnapshotOptions";
import { _VPCOptions } from "./_VPCOptions";
import { _CognitoOptions } from "./_CognitoOptions";
import { _EncryptionAtRestOptions } from "./_EncryptionAtRestOptions";
import { _NodeToNodeEncryptionOptions } from "./_NodeToNodeEncryptionOptions";
import { _AdvancedOptions } from "./_AdvancedOptions";
import { _LogPublishingOptions } from "./_LogPublishingOptions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateElasticsearchDomainInput: _Structure_ = {
  type: "structure",
  required: ["DomainName"],
  members: {
    DomainName: {
      shape: {
        type: "string",
        min: 3
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
      shape: _VPCOptions
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
    }
  }
};
