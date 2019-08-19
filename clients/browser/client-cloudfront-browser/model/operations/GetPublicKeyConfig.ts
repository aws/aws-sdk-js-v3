import { GetPublicKeyConfigInput } from "../shapes/GetPublicKeyConfigInput";
import { GetPublicKeyConfigOutput } from "../shapes/GetPublicKeyConfigOutput";
import { AccessDenied } from "../shapes/AccessDenied";
import { NoSuchPublicKey } from "../shapes/NoSuchPublicKey";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetPublicKeyConfig: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetPublicKeyConfig",
  http: {
    method: "GET",
    requestUri: "/2019-03-26/public-key/{Id}/config"
  },
  input: {
    shape: GetPublicKeyConfigInput
  },
  output: {
    shape: GetPublicKeyConfigOutput
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
