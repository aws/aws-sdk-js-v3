import { AllocateHostedConnectionInput } from "../shapes/AllocateHostedConnectionInput";
import { AllocateHostedConnectionOutput } from "../shapes/AllocateHostedConnectionOutput";
import { DuplicateTagKeysException } from "../shapes/DuplicateTagKeysException";
import { TooManyTagsException } from "../shapes/TooManyTagsException";
import { DirectConnectServerException } from "../shapes/DirectConnectServerException";
import { DirectConnectClientException } from "../shapes/DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AllocateHostedConnection: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AllocateHostedConnection",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AllocateHostedConnectionInput
  },
  output: {
    shape: AllocateHostedConnectionOutput
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
