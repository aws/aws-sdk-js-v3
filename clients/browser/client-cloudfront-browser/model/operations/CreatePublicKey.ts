import { CreatePublicKeyInput } from "../shapes/CreatePublicKeyInput";
import { CreatePublicKeyOutput } from "../shapes/CreatePublicKeyOutput";
import { PublicKeyAlreadyExists } from "../shapes/PublicKeyAlreadyExists";
import { InvalidArgument } from "../shapes/InvalidArgument";
import { TooManyPublicKeys } from "../shapes/TooManyPublicKeys";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreatePublicKey: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreatePublicKey",
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
