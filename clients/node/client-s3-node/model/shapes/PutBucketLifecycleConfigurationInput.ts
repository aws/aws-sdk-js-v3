import { _BucketLifecycleConfiguration } from "./_BucketLifecycleConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutBucketLifecycleConfigurationInput: _Structure_ = {
  type: "structure",
  required: ["Bucket"],
  members: {
    Bucket: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "Bucket"
    },
    LifecycleConfiguration: {
      shape: _BucketLifecycleConfiguration,
      locationName: "LifecycleConfiguration",
      xmlNamespace: {
        uri: "http://s3.amazonaws.com/doc/2006-03-01/"
      }
    }
  },
  payload: "LifecycleConfiguration"
};
