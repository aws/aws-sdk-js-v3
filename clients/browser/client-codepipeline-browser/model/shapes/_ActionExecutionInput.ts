import { _ActionTypeId } from "./_ActionTypeId";
import { _ActionConfigurationMap } from "./_ActionConfigurationMap";
import { _ArtifactDetailList } from "./_ArtifactDetailList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ActionExecutionInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    actionTypeId: {
      shape: _ActionTypeId
    },
    configuration: {
      shape: _ActionConfigurationMap
    },
    roleArn: {
      shape: {
        type: "string"
      }
    },
    region: {
      shape: {
        type: "string",
        min: 4
      }
    },
    inputArtifacts: {
      shape: _ArtifactDetailList
    }
  }
};
