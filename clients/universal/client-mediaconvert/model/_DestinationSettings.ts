import { _S3DestinationSettings } from "./_S3DestinationSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DestinationSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    S3Settings: {
      shape: _S3DestinationSettings,
      locationName: "s3Settings"
    }
  }
};
