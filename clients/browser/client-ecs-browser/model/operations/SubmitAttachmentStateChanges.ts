import { SubmitAttachmentStateChangesInput } from "../shapes/SubmitAttachmentStateChangesInput";
import { SubmitAttachmentStateChangesOutput } from "../shapes/SubmitAttachmentStateChangesOutput";
import { ServerException } from "../shapes/ServerException";
import { ClientException } from "../shapes/ClientException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SubmitAttachmentStateChanges: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SubmitAttachmentStateChanges",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SubmitAttachmentStateChangesInput
  },
  output: {
    shape: SubmitAttachmentStateChangesOutput
  },
  errors: [
    {
      shape: ServerException
    },
    {
      shape: ClientException
    },
    {
      shape: AccessDeniedException
    },
    {
      shape: InvalidParameterException
    }
  ]
};
