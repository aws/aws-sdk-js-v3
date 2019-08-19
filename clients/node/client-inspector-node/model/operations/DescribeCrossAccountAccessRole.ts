import { DescribeCrossAccountAccessRoleInput } from "../shapes/DescribeCrossAccountAccessRoleInput";
import { DescribeCrossAccountAccessRoleOutput } from "../shapes/DescribeCrossAccountAccessRoleOutput";
import { InternalException } from "../shapes/InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeCrossAccountAccessRole: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeCrossAccountAccessRole",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeCrossAccountAccessRoleInput
  },
  output: {
    shape: DescribeCrossAccountAccessRoleOutput
  },
  errors: [
    {
      shape: InternalException
    }
  ]
};
