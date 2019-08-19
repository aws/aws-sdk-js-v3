import { UpdatePublicKeyInput } from "../shapes/UpdatePublicKeyInput";
import { UpdatePublicKeyOutput } from "../shapes/UpdatePublicKeyOutput";
import { AccessDenied } from "../shapes/AccessDenied";
import { CannotChangeImmutablePublicKeyFields } from "../shapes/CannotChangeImmutablePublicKeyFields";
import { InvalidArgument } from "../shapes/InvalidArgument";
import { InvalidIfMatchVersion } from "../shapes/InvalidIfMatchVersion";
import { IllegalUpdate } from "../shapes/IllegalUpdate";
import { NoSuchPublicKey } from "../shapes/NoSuchPublicKey";
import { PreconditionFailed } from "../shapes/PreconditionFailed";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdatePublicKey: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdatePublicKey",
  http: {
    method: "PUT",
    requestUri: "/2019-03-26/public-key/{Id}/config"
  },
  input: {
    shape: UpdatePublicKeyInput
  },
  output: {
    shape: UpdatePublicKeyOutput
  },
  errors: [
    {
      shape: AccessDenied
    },
    {
      shape: CannotChangeImmutablePublicKeyFields
    },
    {
      shape: InvalidArgument
    },
    {
      shape: InvalidIfMatchVersion
    },
    {
      shape: IllegalUpdate
    },
    {
      shape: NoSuchPublicKey
    },
    {
      shape: PreconditionFailed
    }
  ]
};
