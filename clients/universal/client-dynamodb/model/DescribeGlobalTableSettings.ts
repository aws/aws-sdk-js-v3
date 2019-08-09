import { DescribeGlobalTableSettingsInput } from "./DescribeGlobalTableSettingsInput";
import { DescribeGlobalTableSettingsOutput } from "./DescribeGlobalTableSettingsOutput";
import { GlobalTableNotFoundException } from "./GlobalTableNotFoundException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
