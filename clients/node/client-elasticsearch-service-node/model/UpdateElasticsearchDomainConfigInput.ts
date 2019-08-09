import { _ElasticsearchClusterConfig } from "./_ElasticsearchClusterConfig";
import { _EBSOptions } from "./_EBSOptions";
import { _SnapshotOptions } from "./_SnapshotOptions";
import { _VPCOptions } from "./_VPCOptions";
import { _CognitoOptions } from "./_CognitoOptions";
import { _AdvancedOptions } from "./_AdvancedOptions";
import { _LogPublishingOptions } from "./_LogPublishingOptions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateElasticsearchDomainConfigInput: _Structure_ = {
  type: "structure",
  required: ["DomainName"],
  members: {
    DomainName: {
      shape: {
        type: "string",
        min: 3
      },
      location: "uri",
      locationName: "DomainName"
    },
    ElasticsearchClusterConfig: {
      shape: _ElasticsearchClusterConfig
    },
    EBSOptions: {
      shape: _EBSOptions
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
    AdvancedOptions: {
      shape: _AdvancedOptions
    },
    AccessPolicies: {
      shape: {
        type: "string"
      }
    },
    LogPublishingOptions: {
      shape: _LogPublishingOptions
    }
  }
};
