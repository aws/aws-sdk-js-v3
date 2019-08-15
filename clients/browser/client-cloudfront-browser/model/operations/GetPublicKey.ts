import { GetPublicKeyInput } from "../shapes/GetPublicKeyInput";
import { GetPublicKeyOutput } from "../shapes/GetPublicKeyOutput";
import { AccessDenied } from "../shapes/AccessDenied";
import { NoSuchPublicKey } from "../shapes/NoSuchPublicKey";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetPublicKey: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetPublicKey",
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
