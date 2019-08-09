import { CreateConnectionInput } from "./CreateConnectionInput";
import { CreateConnectionOutput } from "./CreateConnectionOutput";
import { DuplicateTagKeysException } from "./DuplicateTagKeysException";
import { TooManyTagsException } from "./TooManyTagsException";
import { DirectConnectServerException } from "./DirectConnectServerException";
import { DirectConnectClientException } from "./DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateConnection: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateConnection",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateConnectionInput
  },
  output: {
    shape: CreateConnectionOutput
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
