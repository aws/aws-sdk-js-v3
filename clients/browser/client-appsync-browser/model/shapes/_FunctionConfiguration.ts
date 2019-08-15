import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FunctionConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    functionId: {
      shape: {
        type: "string"
      }
    },
    functionArn: {
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
    dataSourceName: {
      shape: {
        type: "string"
      }
    },
    requestMappingTemplate: {
      shape: {
        type: "string",
        min: 1
      }
    },
    responseMappingTemplate: {
      shape: {
        type: "string",
        min: 1
      }
    },
    functionVersion: {
      shape: {
        type: "string"
      }
    }
  }
};
