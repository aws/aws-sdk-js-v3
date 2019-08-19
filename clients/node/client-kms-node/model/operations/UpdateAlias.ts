import { UpdateAliasInput } from "../shapes/UpdateAliasInput";
import { UpdateAliasOutput } from "../shapes/UpdateAliasOutput";
import { DependencyTimeoutException } from "../shapes/DependencyTimeoutException";
import { NotFoundException } from "../shapes/NotFoundException";
import { KMSInternalException } from "../shapes/KMSInternalException";
import { KMSInvalidStateException } from "../shapes/KMSInvalidStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateAlias: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateAlias",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateAliasInput
  },
  output: {
    shape: UpdateAliasOutput
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
