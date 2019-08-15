import { GetAccountLimitInput } from "../shapes/GetAccountLimitInput";
import { GetAccountLimitOutput } from "../shapes/GetAccountLimitOutput";
import { InvalidInput } from "../shapes/InvalidInput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetAccountLimit: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetAccountLimit",
  http: {
    method: "GET",
    requestUri: "/2013-04-01/accountlimit/{Type}"
  },
  input: {
    shape: GetAccountLimitInput
  },
  output: {
    shape: GetAccountLimitOutput
  },
  errors: [
    {
      shape: InvalidInput
    }
  ]
};
