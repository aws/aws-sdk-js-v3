import { CreateRoleInput } from "./CreateRoleInput";
import { CreateRoleOutput } from "./CreateRoleOutput";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidInputException } from "./InvalidInputException";
import { EntityAlreadyExistsException } from "./EntityAlreadyExistsException";
import { MalformedPolicyDocumentException } from "./MalformedPolicyDocumentException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
