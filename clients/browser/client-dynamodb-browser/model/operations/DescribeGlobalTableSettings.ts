import { DescribeGlobalTableSettingsInput } from "../shapes/DescribeGlobalTableSettingsInput";
import { DescribeGlobalTableSettingsOutput } from "../shapes/DescribeGlobalTableSettingsOutput";
import { GlobalTableNotFoundException } from "../shapes/GlobalTableNotFoundException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeGlobalTableSettings: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeGlobalTableSettings",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeGlobalTableSettingsInput
  },
  output: {
    shape: DescribeGlobalTableSettingsOutput
  },
  errors: [
    {
      shape: GlobalTableNotFoundException
    },
    {
      shape: InternalServerError
    }
  ]
};
