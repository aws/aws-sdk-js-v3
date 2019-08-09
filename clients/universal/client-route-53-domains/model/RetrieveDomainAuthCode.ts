import { RetrieveDomainAuthCodeInput } from "./RetrieveDomainAuthCodeInput";
import { RetrieveDomainAuthCodeOutput } from "./RetrieveDomainAuthCodeOutput";
import { InvalidInput } from "./InvalidInput";
import { UnsupportedTLD } from "./UnsupportedTLD";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RetrieveDomainAuthCode: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RetrieveDomainAuthCode",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RetrieveDomainAuthCodeInput
  },
  output: {
    shape: RetrieveDomainAuthCodeOutput
  },
  errors: [
    {
      shape: InvalidInput
    },
    {
      shape: UnsupportedTLD
    }
  ]
};
