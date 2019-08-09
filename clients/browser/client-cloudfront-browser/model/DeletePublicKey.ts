import { DeletePublicKeyInput } from "./DeletePublicKeyInput";
import { DeletePublicKeyOutput } from "./DeletePublicKeyOutput";
import { AccessDenied } from "./AccessDenied";
import { PublicKeyInUse } from "./PublicKeyInUse";
import { InvalidIfMatchVersion } from "./InvalidIfMatchVersion";
import { NoSuchPublicKey } from "./NoSuchPublicKey";
import { PreconditionFailed } from "./PreconditionFailed";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeletePublicKey2019_03_26: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeletePublicKey2019_03_26",
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
