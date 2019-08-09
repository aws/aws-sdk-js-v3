import { ListPlatformApplicationsInput } from "./ListPlatformApplicationsInput";
import { ListPlatformApplicationsOutput } from "./ListPlatformApplicationsOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalErrorException } from "./InternalErrorException";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
