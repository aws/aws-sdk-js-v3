import { GetDomainDetailInput } from "./GetDomainDetailInput";
import { GetDomainDetailOutput } from "./GetDomainDetailOutput";
import { InvalidInput } from "./InvalidInput";
import { UnsupportedTLD } from "./UnsupportedTLD";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetDomainDetail: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDomainDetail",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetDomainDetailInput
  },
  output: {
    shape: GetDomainDetailOutput
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
