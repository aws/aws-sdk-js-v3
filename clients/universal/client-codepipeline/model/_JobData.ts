import { _ActionTypeId } from "./_ActionTypeId";
import { _ActionConfiguration } from "./_ActionConfiguration";
import { _PipelineContext } from "./_PipelineContext";
import { _ArtifactList } from "./_ArtifactList";
import { _AWSSessionCredentials } from "./_AWSSessionCredentials";
import { _EncryptionKey } from "./_EncryptionKey";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _JobData: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    actionTypeId: {
      shape: _ActionTypeId
    },
    actionConfiguration: {
      shape: _ActionConfiguration
    },
    pipelineContext: {
      shape: _PipelineContext
    },
    inputArtifacts: {
      shape: _ArtifactList
    },
    outputArtifacts: {
      shape: _ArtifactList
    },
    artifactCredentials: {
      shape: _AWSSessionCredentials
    },
    continuationToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    encryptionKey: {
      shape: _EncryptionKey
    }
  }
};
