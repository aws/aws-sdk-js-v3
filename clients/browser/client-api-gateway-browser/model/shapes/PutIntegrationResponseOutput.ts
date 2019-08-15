import { _MapOfStringToString } from "./_MapOfStringToString";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutIntegrationResponseOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    statusCode: {
      shape: {
        type: "string"
      }
    },
    selectionPattern: {
      shape: {
        type: "string"
      }
    },
    responseParameters: {
      shape: _MapOfStringToString
    },
    responseTemplates: {
      shape: _MapOfStringToString
    },
    contentHandling: {
      shape: {
        type: "string"
      }
    }
  }
};
