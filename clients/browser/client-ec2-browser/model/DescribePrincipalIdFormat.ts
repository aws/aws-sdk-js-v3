import { DescribePrincipalIdFormatInput } from "./DescribePrincipalIdFormatInput";
import { DescribePrincipalIdFormatOutput } from "./DescribePrincipalIdFormatOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribePrincipalIdFormat: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribePrincipalIdFormat",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribePrincipalIdFormatInput
  },
  output: {
    shape: DescribePrincipalIdFormatOutput
  },
  errors: []
};
