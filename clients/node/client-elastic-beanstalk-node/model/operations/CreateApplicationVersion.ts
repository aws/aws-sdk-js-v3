import { CreateApplicationVersionInput } from "../shapes/CreateApplicationVersionInput";
import { CreateApplicationVersionOutput } from "../shapes/CreateApplicationVersionOutput";
import { TooManyApplicationsException } from "../shapes/TooManyApplicationsException";
import { TooManyApplicationVersionsException } from "../shapes/TooManyApplicationVersionsException";
import { InsufficientPrivilegesException } from "../shapes/InsufficientPrivilegesException";
import { S3LocationNotInServiceRegionException } from "../shapes/S3LocationNotInServiceRegionException";
import { CodeBuildNotInServiceRegionException } from "../shapes/CodeBuildNotInServiceRegionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateApplicationVersion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateApplicationVersion",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateApplicationVersionInput
  },
  output: {
    shape: CreateApplicationVersionOutput,
    resultWrapper: "CreateApplicationVersionResult"
  },
  errors: [
    {
      shape: TooManyApplicationsException
    },
    {
      shape: TooManyApplicationVersionsException
    },
    {
      shape: InsufficientPrivilegesException
    },
    {
      shape: S3LocationNotInServiceRegionException
    },
    {
      shape: CodeBuildNotInServiceRegionException
    }
  ]
};
