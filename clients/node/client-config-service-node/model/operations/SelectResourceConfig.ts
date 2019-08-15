import { SelectResourceConfigInput } from "../shapes/SelectResourceConfigInput";
import { SelectResourceConfigOutput } from "../shapes/SelectResourceConfigOutput";
import { InvalidExpressionException } from "../shapes/InvalidExpressionException";
import { InvalidLimitException } from "../shapes/InvalidLimitException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SelectResourceConfig: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SelectResourceConfig",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SelectResourceConfigInput
  },
  output: {
    shape: SelectResourceConfigOutput
  },
  errors: [
    {
      shape: InvalidExpressionException
    },
    {
      shape: InvalidLimitException
    },
    {
      shape: InvalidNextTokenException
    }
  ]
};
