import { CreateInterconnectInput } from "./CreateInterconnectInput";
import { CreateInterconnectOutput } from "./CreateInterconnectOutput";
import { DuplicateTagKeysException } from "./DuplicateTagKeysException";
import { TooManyTagsException } from "./TooManyTagsException";
import { DirectConnectServerException } from "./DirectConnectServerException";
import { DirectConnectClientException } from "./DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateInterconnect: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateInterconnect",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateInterconnectInput
  },
  output: {
    shape: CreateInterconnectOutput
  },
  errors: [
    {
      shape: DuplicateTagKeysException
    },
    {
      shape: TooManyTagsException
    },
    {
      shape: DirectConnectServerException
    },
    {
      shape: DirectConnectClientException
    }
  ]
};
