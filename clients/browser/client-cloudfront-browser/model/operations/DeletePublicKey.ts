import { DeletePublicKeyInput } from "../shapes/DeletePublicKeyInput";
import { DeletePublicKeyOutput } from "../shapes/DeletePublicKeyOutput";
import { AccessDenied } from "../shapes/AccessDenied";
import { PublicKeyInUse } from "../shapes/PublicKeyInUse";
import { InvalidIfMatchVersion } from "../shapes/InvalidIfMatchVersion";
import { NoSuchPublicKey } from "../shapes/NoSuchPublicKey";
import { PreconditionFailed } from "../shapes/PreconditionFailed";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeletePublicKey: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeletePublicKey",
  http: {
    method: "DELETE",
    requestUri: "/2019-03-26/public-key/{Id}"
  },
  input: {
    shape: DeletePublicKeyInput
  },
  output: {
    shape: DeletePublicKeyOutput
  },
  errors: [
    {
      shape: AccessDenied
    },
    {
      shape: PublicKeyInUse
    },
    {
      shape: InvalidIfMatchVersion
    },
    {
      shape: NoSuchPublicKey
    },
    {
      shape: PreconditionFailed
    }
  ]
};
