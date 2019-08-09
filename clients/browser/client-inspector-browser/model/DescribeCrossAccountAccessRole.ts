import { DescribeCrossAccountAccessRoleInput } from "./DescribeCrossAccountAccessRoleInput";
import { DescribeCrossAccountAccessRoleOutput } from "./DescribeCrossAccountAccessRoleOutput";
import { InternalException } from "./InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
