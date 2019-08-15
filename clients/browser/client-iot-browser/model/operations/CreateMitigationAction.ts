import { CreateMitigationActionInput } from "../shapes/CreateMitigationActionInput";
import { CreateMitigationActionOutput } from "../shapes/CreateMitigationActionOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceAlreadyExistsException } from "../shapes/ResourceAlreadyExistsException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
