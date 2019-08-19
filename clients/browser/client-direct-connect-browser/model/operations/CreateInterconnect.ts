import { CreateInterconnectInput } from "../shapes/CreateInterconnectInput";
import { CreateInterconnectOutput } from "../shapes/CreateInterconnectOutput";
import { DuplicateTagKeysException } from "../shapes/DuplicateTagKeysException";
import { TooManyTagsException } from "../shapes/TooManyTagsException";
import { DirectConnectServerException } from "../shapes/DirectConnectServerException";
import { DirectConnectClientException } from "../shapes/DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
