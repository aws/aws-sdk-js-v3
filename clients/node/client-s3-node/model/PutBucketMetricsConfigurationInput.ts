import { _MetricsConfiguration } from "./_MetricsConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutBucketMetricsConfigurationInput: _Structure_ = {
  type: "structure",
  required: ["Bucket", "Id", "MetricsConfiguration"],
  members: {
    Bucket: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "Bucket"
    },
    Id: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "id"
    },
    MetricsConfiguration: {
      shape: _MetricsConfiguration,
      locationName: "MetricsConfiguration",
      xmlNamespace: {
        uri: "http://s3.amazonaws.com/doc/2006-03-01/"
      }
    }
  },
  payload: "MetricsConfiguration"
};
