import { BatchGetApplicationsInput } from "../shapes/BatchGetApplicationsInput";
import { BatchGetApplicationsOutput } from "../shapes/BatchGetApplicationsOutput";
import { ApplicationNameRequiredException } from "../shapes/ApplicationNameRequiredException";
import { InvalidApplicationNameException } from "../shapes/InvalidApplicationNameException";
import { ApplicationDoesNotExistException } from "../shapes/ApplicationDoesNotExistException";
import { BatchLimitExceededException } from "../shapes/BatchLimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const BatchGetApplications: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchGetApplications",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: BatchGetApplicationsInput
  },
  output: {
    shape: BatchGetApplicationsOutput
  },
  errors: [
    {
      shape: ApplicationNameRequiredException
    },
    {
      shape: InvalidApplicationNameException
    },
    {
      shape: ApplicationDoesNotExistException
    },
    {
      shape: BatchLimitExceededException
    }
  ]
};
