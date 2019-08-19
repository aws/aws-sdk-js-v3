import { UpdateMitigationActionInput } from "../shapes/UpdateMitigationActionInput";
import { UpdateMitigationActionOutput } from "../shapes/UpdateMitigationActionOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateMitigationAction: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateMitigationAction",
  http: {
    method: "PATCH",
    requestUri: "/mitigationactions/actions/{actionName}"
  },
  input: {
    shape: UpdateMitigationActionInput
  },
  output: {
    shape: UpdateMitigationActionOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalFailureException
    }
  ]
};
