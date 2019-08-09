import { DescribeRestoreJobInput } from "./DescribeRestoreJobInput";
import { DescribeRestoreJobOutput } from "./DescribeRestoreJobOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { MissingParameterValueException } from "./MissingParameterValueException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { DependencyFailureException } from "./DependencyFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
