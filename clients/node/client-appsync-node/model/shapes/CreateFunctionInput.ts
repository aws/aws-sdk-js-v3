import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateFunctionInput: _Structure_ = {
  type: "structure",
  required: [
    "apiId",
    "name",
    "dataSourceName",
    "requestMappingTemplate",
    "functionVersion"
  ],
  members: {
    apiId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "apiId"
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
