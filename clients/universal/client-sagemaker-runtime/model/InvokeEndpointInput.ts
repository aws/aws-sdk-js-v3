import { Structure as _Structure_ } from "@aws-sdk/types";

export const InvokeEndpointInput: _Structure_ = {
  type: "structure",
  required: ["EndpointName", "Body"],
  members: {
    EndpointName: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "EndpointName"
    },
    Body: {
      shape: {
        type: "blob",
        sensitive: true
      }
    },
    ContentType: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "Content-Type"
    },
    Accept: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "Accept"
    },
    CustomAttributes: {
      shape: {
        type: "string",
        sensitive: true
      },
      location: "header",
      locationName: "X-Amzn-SageMaker-Custom-Attributes"
    }
  },
  payload: "Body"
};
