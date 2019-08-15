import { _ListOfString } from "./_ListOfString";
import { _EndpointConfiguration } from "./_EndpointConfiguration";
import { _MapOfStringToString } from "./_MapOfStringToString";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateRestApiInput: _Structure_ = {
  type: "structure",
  required: ["name"],
  members: {
    name: {
      shape: {
        type: "string"
      }
    },
    description: {
      shape: {
        type: "string"
      }
    },
    version: {
      shape: {
        type: "string"
      }
    },
    cloneFrom: {
      shape: {
        type: "string"
      }
    },
    binaryMediaTypes: {
      shape: _ListOfString
    },
    minimumCompressionSize: {
      shape: {
        type: "integer"
      }
    },
    apiKeySource: {
      shape: {
        type: "string"
      }
    },
    endpointConfiguration: {
      shape: _EndpointConfiguration
    },
    policy: {
      shape: {
        type: "string"
      }
    },
    tags: {
      shape: _MapOfStringToString
    }
  }
};
