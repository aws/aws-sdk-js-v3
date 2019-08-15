import { _HlsIngest } from "./_HlsIngest";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RotateChannelCredentialsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Arn: {
      shape: {
        type: "string"
      },
      locationName: "arn"
    },
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    },
    HlsIngest: {
      shape: _HlsIngest,
      locationName: "hlsIngest"
    },
    Id: {
      shape: {
        type: "string"
      },
      locationName: "id"
    },
    Tags: {
      shape: _Tags,
      locationName: "tags"
    }
  }
};
