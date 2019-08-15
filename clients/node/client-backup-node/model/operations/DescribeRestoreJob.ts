import { DescribeRestoreJobInput } from "../shapes/DescribeRestoreJobInput";
import { DescribeRestoreJobOutput } from "../shapes/DescribeRestoreJobOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { DependencyFailureException } from "../shapes/DependencyFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeRestoreJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeRestoreJob",
  http: {
    method: "GET",
    requestUri: "/restore-jobs/{restoreJobId}"
  },
  input: {
    shape: DescribeRestoreJobInput
  },
  output: {
    shape: DescribeRestoreJobOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: MissingParameterValueException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: DependencyFailureException
    }
  ]
};
