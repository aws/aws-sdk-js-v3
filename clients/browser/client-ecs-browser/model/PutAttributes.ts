import { PutAttributesInput } from "./PutAttributesInput";
import { PutAttributesOutput } from "./PutAttributesOutput";
import { ClusterNotFoundException } from "./ClusterNotFoundException";
import { TargetNotFoundException } from "./TargetNotFoundException";
import { AttributeLimitExceededException } from "./AttributeLimitExceededException";
import { InvalidParameterException } from "./InvalidParameterException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
