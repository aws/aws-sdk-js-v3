import { SubmitAttachmentStateChangesInput } from "./SubmitAttachmentStateChangesInput";
import { SubmitAttachmentStateChangesOutput } from "./SubmitAttachmentStateChangesOutput";
import { ServerException } from "./ServerException";
import { ClientException } from "./ClientException";
import { AccessDeniedException } from "./AccessDeniedException";
import { InvalidParameterException } from "./InvalidParameterException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
