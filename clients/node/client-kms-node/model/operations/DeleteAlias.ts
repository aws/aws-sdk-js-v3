import { DeleteAliasInput } from "../shapes/DeleteAliasInput";
import { DeleteAliasOutput } from "../shapes/DeleteAliasOutput";
import { DependencyTimeoutException } from "../shapes/DependencyTimeoutException";
import { NotFoundException } from "../shapes/NotFoundException";
import { KMSInternalException } from "../shapes/KMSInternalException";
import { KMSInvalidStateException } from "../shapes/KMSInvalidStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteAlias: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteAlias",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteAliasInput
  },
  output: {
    shape: DeleteAliasOutput
  },
  errors: [
    {
      shape: DependencyTimeoutException
    },
    {
      shape: NotFoundException
    },
    {
      shape: KMSInternalException
    },
    {
      shape: KMSInvalidStateException
    }
  ]
};
