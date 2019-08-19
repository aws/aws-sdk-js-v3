import { _ElasticsearchVersionStatus } from "./_ElasticsearchVersionStatus";
import { _ElasticsearchClusterConfigStatus } from "./_ElasticsearchClusterConfigStatus";
import { _EBSOptionsStatus } from "./_EBSOptionsStatus";
import { _AccessPoliciesStatus } from "./_AccessPoliciesStatus";
import { _SnapshotOptionsStatus } from "./_SnapshotOptionsStatus";
import { _VPCDerivedInfoStatus } from "./_VPCDerivedInfoStatus";
import { _CognitoOptionsStatus } from "./_CognitoOptionsStatus";
import { _EncryptionAtRestOptionsStatus } from "./_EncryptionAtRestOptionsStatus";
import { _NodeToNodeEncryptionOptionsStatus } from "./_NodeToNodeEncryptionOptionsStatus";
import { _AdvancedOptionsStatus } from "./_AdvancedOptionsStatus";
import { _LogPublishingOptionsStatus } from "./_LogPublishingOptionsStatus";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ElasticsearchDomainConfig: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ElasticsearchVersion: {
      shape: _ElasticsearchVersionStatus
    },
    ElasticsearchClusterConfig: {
      shape: _ElasticsearchClusterConfigStatus
    },
    EBSOptions: {
      shape: _EBSOptionsStatus
    },
    AccessPolicies: {
      shape: _AccessPoliciesStatus
    },
    SnapshotOptions: {
      shape: _SnapshotOptionsStatus
    },
    VPCOptions: {
      shape: _VPCDerivedInfoStatus
    },
    CognitoOptions: {
      shape: _CognitoOptionsStatus
    },
    EncryptionAtRestOptions: {
      shape: _EncryptionAtRestOptionsStatus
    },
    NodeToNodeEncryptionOptions: {
      shape: _NodeToNodeEncryptionOptionsStatus
    },
    AdvancedOptions: {
      shape: _AdvancedOptionsStatus
    },
    LogPublishingOptions: {
      shape: _LogPublishingOptionsStatus
    }
  }
};
