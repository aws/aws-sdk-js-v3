import { CreateInstanceProfileInput } from "./CreateInstanceProfileInput";
import { CreateInstanceProfileOutput } from "./CreateInstanceProfileOutput";
import { EntityAlreadyExistsException } from "./EntityAlreadyExistsException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
