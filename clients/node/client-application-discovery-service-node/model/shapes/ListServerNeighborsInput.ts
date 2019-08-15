import { _ConfigurationIdList } from "./_ConfigurationIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListServerNeighborsInput: _Structure_ = {
  type: "structure",
  required: ["configurationId"],
  members: {
    configurationId: {
      shape: {
        type: "string"
      }
    },
    portInformationNeeded: {
      shape: {
        type: "boolean"
      }
    },
    neighborConfigurationIds: {
      shape: _ConfigurationIdList
    },
    maxResults: {
      shape: {
        type: "integer"
      }
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
