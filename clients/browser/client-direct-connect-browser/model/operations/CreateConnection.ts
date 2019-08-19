import { CreateConnectionInput } from "../shapes/CreateConnectionInput";
import { CreateConnectionOutput } from "../shapes/CreateConnectionOutput";
import { DuplicateTagKeysException } from "../shapes/DuplicateTagKeysException";
import { TooManyTagsException } from "../shapes/TooManyTagsException";
import { DirectConnectServerException } from "../shapes/DirectConnectServerException";
import { DirectConnectClientException } from "../shapes/DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
