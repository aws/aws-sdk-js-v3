import { EnableLoggingInput } from "../shapes/EnableLoggingInput";
import { EnableLoggingOutput } from "../shapes/EnableLoggingOutput";
import { ClusterNotFoundFault } from "../shapes/ClusterNotFoundFault";
import { BucketNotFoundFault } from "../shapes/BucketNotFoundFault";
import { InsufficientS3BucketPolicyFault } from "../shapes/InsufficientS3BucketPolicyFault";
import { InvalidS3KeyPrefixFault } from "../shapes/InvalidS3KeyPrefixFault";
import { InvalidS3BucketNameFault } from "../shapes/InvalidS3BucketNameFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const EnableLogging: _Operation_ = {
  metadata: ServiceMetadata,
  name: "EnableLogging",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: EnableLoggingInput
  },
  output: {
    shape: EnableLoggingOutput,
    resultWrapper: "EnableLoggingResult"
  },
  errors: [
    {
      shape: ClusterNotFoundFault
    },
    {
      shape: BucketNotFoundFault
    },
    {
      shape: InsufficientS3BucketPolicyFault
    },
    {
      shape: InvalidS3KeyPrefixFault
    },
    {
      shape: InvalidS3BucketNameFault
    }
  ]
};
