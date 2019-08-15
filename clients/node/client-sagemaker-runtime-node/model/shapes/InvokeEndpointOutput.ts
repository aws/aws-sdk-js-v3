import { Structure as _Structure_ } from "@aws-sdk/types";

export const InvokeEndpointOutput: _Structure_ = {
  type: "structure",
  required: ["Body"],
  members: {
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
    InvokedProductionVariant: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-Amzn-Invoked-Production-Variant"
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
