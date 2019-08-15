import { DeleteMitigationActionInput } from "../shapes/DeleteMitigationActionInput";
import { DeleteMitigationActionOutput } from "../shapes/DeleteMitigationActionOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteMitigationAction: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteMitigationAction",
  http: {
    method: "DELETE",
    requestUri: "/mitigationactions/actions/{actionName}"
  },
  input: {
    shape: DeleteMitigationActionInput
  },
  output: {
    shape: DeleteMitigationActionOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalFailureException
    }
  ]
};
