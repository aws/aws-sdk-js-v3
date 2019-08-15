import { PutAttributesInput } from "../shapes/PutAttributesInput";
import { PutAttributesOutput } from "../shapes/PutAttributesOutput";
import { ClusterNotFoundException } from "../shapes/ClusterNotFoundException";
import { TargetNotFoundException } from "../shapes/TargetNotFoundException";
import { AttributeLimitExceededException } from "../shapes/AttributeLimitExceededException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutAttributes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutAttributes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutAttributesInput
  },
  output: {
    shape: PutAttributesOutput
  },
  errors: [
    {
      shape: ClusterNotFoundException
    },
    {
      shape: TargetNotFoundException
    },
    {
      shape: AttributeLimitExceededException
    },
    {
      shape: InvalidParameterException
    }
  ]
};
