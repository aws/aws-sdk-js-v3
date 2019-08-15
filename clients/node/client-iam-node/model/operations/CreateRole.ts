import { CreateRoleInput } from "../shapes/CreateRoleInput";
import { CreateRoleOutput } from "../shapes/CreateRoleOutput";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { EntityAlreadyExistsException } from "../shapes/EntityAlreadyExistsException";
import { MalformedPolicyDocumentException } from "../shapes/MalformedPolicyDocumentException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateRole: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateRole",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateRoleInput
  },
  output: {
    shape: CreateRoleOutput,
    resultWrapper: "CreateRoleResult"
  },
  errors: [
    {
      shape: LimitExceededException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: EntityAlreadyExistsException
    },
    {
      shape: MalformedPolicyDocumentException
    },
    {
      shape: ConcurrentModificationException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
