import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateFunctionInput: _Structure_ = {
  type: "structure",
  required: [
    "apiId",
    "name",
    "functionId",
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
    functionId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "functionId"
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
