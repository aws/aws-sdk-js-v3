import { BatchGetApplicationsInput } from "./BatchGetApplicationsInput";
import { BatchGetApplicationsOutput } from "./BatchGetApplicationsOutput";
import { ApplicationNameRequiredException } from "./ApplicationNameRequiredException";
import { InvalidApplicationNameException } from "./InvalidApplicationNameException";
import { ApplicationDoesNotExistException } from "./ApplicationDoesNotExistException";
import { BatchLimitExceededException } from "./BatchLimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
