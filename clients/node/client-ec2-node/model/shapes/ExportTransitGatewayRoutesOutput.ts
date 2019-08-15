import { Structure as _Structure_ } from "@aws-sdk/types";

export const ExportTransitGatewayRoutesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    S3Location: {
      shape: {
        type: "string"
      },
      locationName: "s3Location"
    }
  }
};
