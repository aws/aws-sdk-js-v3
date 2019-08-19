import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteMethodResponseInput: _Structure_ = {
  type: "structure",
  required: ["restApiId", "resourceId", "httpMethod", "statusCode"],
  members: {
    restApiId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "restapi_id"
    },
    resourceId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "resource_id"
    },
    httpMethod: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "http_method"
    },
    statusCode: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "status_code"
    }
  }
};
