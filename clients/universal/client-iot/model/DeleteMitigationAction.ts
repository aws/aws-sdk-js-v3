import { DeleteMitigationActionInput } from "./DeleteMitigationActionInput";
import { DeleteMitigationActionOutput } from "./DeleteMitigationActionOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
