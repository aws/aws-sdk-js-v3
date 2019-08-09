import { UpdateMitigationActionInput } from "./UpdateMitigationActionInput";
import { UpdateMitigationActionOutput } from "./UpdateMitigationActionOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
