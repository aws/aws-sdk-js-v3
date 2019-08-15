import { CreateDeploymentInput } from "../shapes/CreateDeploymentInput";
import { CreateDeploymentOutput } from "../shapes/CreateDeploymentOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ConflictException } from "../shapes/ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateDeployment: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateDeployment",
  http: {
    method: "POST",
    requestUri: "/v2/apis/{apiId}/deployments"
  },
  input: {
    shape: CreateDeploymentInput
  },
  output: {
    shape: CreateDeploymentOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: BadRequestException
    },
    {
      shape: ConflictException
    }
  ]
};
