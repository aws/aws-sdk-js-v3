import { UpdatePublicKeyInput } from "./UpdatePublicKeyInput";
import { UpdatePublicKeyOutput } from "./UpdatePublicKeyOutput";
import { AccessDenied } from "./AccessDenied";
import { CannotChangeImmutablePublicKeyFields } from "./CannotChangeImmutablePublicKeyFields";
import { InvalidArgument } from "./InvalidArgument";
import { InvalidIfMatchVersion } from "./InvalidIfMatchVersion";
import { IllegalUpdate } from "./IllegalUpdate";
import { NoSuchPublicKey } from "./NoSuchPublicKey";
import { PreconditionFailed } from "./PreconditionFailed";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdatePublicKey2019_03_26: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdatePublicKey2019_03_26",
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
