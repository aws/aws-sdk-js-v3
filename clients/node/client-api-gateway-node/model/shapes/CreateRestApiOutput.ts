import { _ListOfString } from "./_ListOfString";
import { _EndpointConfiguration } from "./_EndpointConfiguration";
import { _MapOfStringToString } from "./_MapOfStringToString";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateRestApiOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    id: {
      shape: {
        type: "string"
      }
    },
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
    createdDate: {
      shape: {
        type: "timestamp"
      }
    },
    version: {
      shape: {
        type: "string"
      }
    },
    warnings: {
      shape: _ListOfString
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
