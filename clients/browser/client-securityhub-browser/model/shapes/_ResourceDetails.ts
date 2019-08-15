import { _AwsEc2InstanceDetails } from "./_AwsEc2InstanceDetails";
import { _AwsS3BucketDetails } from "./_AwsS3BucketDetails";
import { _AwsIamAccessKeyDetails } from "./_AwsIamAccessKeyDetails";
import { _ContainerDetails } from "./_ContainerDetails";
import { _FieldMap } from "./_FieldMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResourceDetails: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AwsEc2Instance: {
      shape: _AwsEc2InstanceDetails
    },
    AwsS3Bucket: {
      shape: _AwsS3BucketDetails
    },
    AwsIamAccessKey: {
      shape: _AwsIamAccessKeyDetails
    },
    Container: {
      shape: _ContainerDetails
    },
    Other: {
      shape: _FieldMap
    }
  }
};
