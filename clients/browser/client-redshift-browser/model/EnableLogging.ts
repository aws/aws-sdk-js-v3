import { EnableLoggingInput } from "./EnableLoggingInput";
import { EnableLoggingOutput } from "./EnableLoggingOutput";
import { ClusterNotFoundFault } from "./ClusterNotFoundFault";
import { BucketNotFoundFault } from "./BucketNotFoundFault";
import { InsufficientS3BucketPolicyFault } from "./InsufficientS3BucketPolicyFault";
import { InvalidS3KeyPrefixFault } from "./InvalidS3KeyPrefixFault";
import { InvalidS3BucketNameFault } from "./InvalidS3BucketNameFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
