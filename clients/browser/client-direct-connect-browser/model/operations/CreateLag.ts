import { CreateLagInput } from "../shapes/CreateLagInput";
import { CreateLagOutput } from "../shapes/CreateLagOutput";
import { DuplicateTagKeysException } from "../shapes/DuplicateTagKeysException";
import { TooManyTagsException } from "../shapes/TooManyTagsException";
import { DirectConnectServerException } from "../shapes/DirectConnectServerException";
import { DirectConnectClientException } from "../shapes/DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateLag: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateLag",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateLagInput
  },
  output: {
    shape: CreateLagOutput
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
