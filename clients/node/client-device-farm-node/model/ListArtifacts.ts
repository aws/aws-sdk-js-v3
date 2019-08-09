import { ListArtifactsInput } from "./ListArtifactsInput";
import { ListArtifactsOutput } from "./ListArtifactsOutput";
import { ArgumentException } from "./ArgumentException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceAccountException } from "./ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListArtifacts: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListArtifacts",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListArtifactsInput
  },
  output: {
    shape: ListArtifactsOutput
  },
  errors: [
    {
      shape: ArgumentException
    },
    {
      shape: NotFoundException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ServiceAccountException
    }
  ]
};
