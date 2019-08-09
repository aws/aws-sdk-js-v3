import { CreatePublicKeyInput } from "./CreatePublicKeyInput";
import { CreatePublicKeyOutput } from "./CreatePublicKeyOutput";
import { PublicKeyAlreadyExists } from "./PublicKeyAlreadyExists";
import { InvalidArgument } from "./InvalidArgument";
import { TooManyPublicKeys } from "./TooManyPublicKeys";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreatePublicKey2019_03_26: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreatePublicKey2019_03_26",
  http: {
    method: "POST",
    requestUri: "/2019-03-26/public-key"
  },
  input: {
    shape: CreatePublicKeyInput
  },
  output: {
    shape: CreatePublicKeyOutput
  },
  errors: [
    {
      shape: PublicKeyAlreadyExists
    },
    {
      shape: InvalidArgument
    },
    {
      shape: TooManyPublicKeys
    }
  ]
};
