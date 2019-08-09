import { CreateMitigationActionInput } from "./CreateMitigationActionInput";
import { CreateMitigationActionOutput } from "./CreateMitigationActionOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { LimitExceededException } from "./LimitExceededException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateMitigationAction: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateMitigationAction",
  http: {
    method: "POST",
    requestUri: "/mitigationactions/actions/{actionName}"
  },
  input: {
    shape: CreateMitigationActionInput
  },
  output: {
    shape: CreateMitigationActionOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceAlreadyExistsException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalFailureException
    }
  ]
};
