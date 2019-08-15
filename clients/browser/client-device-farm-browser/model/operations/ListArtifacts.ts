import { ListArtifactsInput } from "../shapes/ListArtifactsInput";
import { ListArtifactsOutput } from "../shapes/ListArtifactsOutput";
import { ArgumentException } from "../shapes/ArgumentException";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceAccountException } from "../shapes/ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
