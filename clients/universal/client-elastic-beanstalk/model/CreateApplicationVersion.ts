import { CreateApplicationVersionInput } from "./CreateApplicationVersionInput";
import { CreateApplicationVersionOutput } from "./CreateApplicationVersionOutput";
import { TooManyApplicationsException } from "./TooManyApplicationsException";
import { TooManyApplicationVersionsException } from "./TooManyApplicationVersionsException";
import { InsufficientPrivilegesException } from "./InsufficientPrivilegesException";
import { S3LocationNotInServiceRegionException } from "./S3LocationNotInServiceRegionException";
import { CodeBuildNotInServiceRegionException } from "./CodeBuildNotInServiceRegionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
