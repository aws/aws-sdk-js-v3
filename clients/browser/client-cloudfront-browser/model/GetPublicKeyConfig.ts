import { GetPublicKeyConfigInput } from "./GetPublicKeyConfigInput";
import { GetPublicKeyConfigOutput } from "./GetPublicKeyConfigOutput";
import { AccessDenied } from "./AccessDenied";
import { NoSuchPublicKey } from "./NoSuchPublicKey";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetPublicKeyConfig2019_03_26: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetPublicKeyConfig2019_03_26",
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
