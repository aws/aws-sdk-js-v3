import { GetDomainDetailInput } from "../shapes/GetDomainDetailInput";
import { GetDomainDetailOutput } from "../shapes/GetDomainDetailOutput";
import { InvalidInput } from "../shapes/InvalidInput";
import { UnsupportedTLD } from "../shapes/UnsupportedTLD";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
