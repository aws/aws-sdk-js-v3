import { CreateLagInput } from "./CreateLagInput";
import { CreateLagOutput } from "./CreateLagOutput";
import { DuplicateTagKeysException } from "./DuplicateTagKeysException";
import { TooManyTagsException } from "./TooManyTagsException";
import { DirectConnectServerException } from "./DirectConnectServerException";
import { DirectConnectClientException } from "./DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
