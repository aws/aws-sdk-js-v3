import { _ActionTypeId } from "./_ActionTypeId";
import { _ActionConfigurationMap } from "./_ActionConfigurationMap";
import { _OutputArtifactList } from "./_OutputArtifactList";
import { _InputArtifactList } from "./_InputArtifactList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ActionDeclaration: _Structure_ = {
  type: "structure",
  required: ["name", "actionTypeId"],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    actionTypeId: {
      shape: _ActionTypeId
    },
    runOrder: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    configuration: {
      shape: _ActionConfigurationMap
    },
    outputArtifacts: {
      shape: _OutputArtifactList
    },
    inputArtifacts: {
      shape: _InputArtifactList
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
    }
  }
};
