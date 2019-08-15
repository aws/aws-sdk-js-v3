import { _ListOfString } from "./_ListOfString";
import { _MapOfStringToString } from "./_MapOfStringToString";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateApiKeyOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    id: {
      shape: {
        type: "string"
      }
    },
    value: {
      shape: {
        type: "string"
      }
    },
    name: {
      shape: {
        type: "string"
      }
    },
    customerId: {
      shape: {
        type: "string"
      }
    },
    description: {
      shape: {
        type: "string"
      }
    },
    enabled: {
      shape: {
        type: "boolean"
      }
    },
    createdDate: {
      shape: {
        type: "timestamp"
      }
    },
    lastUpdatedDate: {
      shape: {
        type: "timestamp"
      }
    },
    stageKeys: {
      shape: _ListOfString
    },
    tags: {
      shape: _MapOfStringToString
    }
  }
};
