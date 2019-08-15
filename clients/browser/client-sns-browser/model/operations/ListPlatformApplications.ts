import { ListPlatformApplicationsInput } from "../shapes/ListPlatformApplicationsInput";
import { ListPlatformApplicationsOutput } from "../shapes/ListPlatformApplicationsOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { AuthorizationErrorException } from "../shapes/AuthorizationErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListPlatformApplications: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListPlatformApplications",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListPlatformApplicationsInput
  },
  output: {
    shape: ListPlatformApplicationsOutput,
    resultWrapper: "ListPlatformApplicationsResult"
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: InternalErrorException
    },
    {
      shape: AuthorizationErrorException
    }
  ]
};
