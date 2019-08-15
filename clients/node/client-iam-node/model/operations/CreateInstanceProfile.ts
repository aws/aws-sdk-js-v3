import { CreateInstanceProfileInput } from "../shapes/CreateInstanceProfileInput";
import { CreateInstanceProfileOutput } from "../shapes/CreateInstanceProfileOutput";
import { EntityAlreadyExistsException } from "../shapes/EntityAlreadyExistsException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateInstanceProfile: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateInstanceProfile",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateInstanceProfileInput
  },
  output: {
    shape: CreateInstanceProfileOutput,
    resultWrapper: "CreateInstanceProfileResult"
  },
  errors: [
    {
      shape: EntityAlreadyExistsException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
