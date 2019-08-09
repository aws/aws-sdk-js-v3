import { GetPublicKeyInput } from "./GetPublicKeyInput";
import { GetPublicKeyOutput } from "./GetPublicKeyOutput";
import { AccessDenied } from "./AccessDenied";
import { NoSuchPublicKey } from "./NoSuchPublicKey";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetPublicKey2019_03_26: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetPublicKey2019_03_26",
  http: {
    method: "GET",
    requestUri: "/2019-03-26/public-key/{Id}"
  },
  input: {
    shape: GetPublicKeyInput
  },
  output: {
    shape: GetPublicKeyOutput
  },
  errors: [
    {
      shape: AccessDenied
    },
    {
      shape: NoSuchPublicKey
    }
  ]
};
