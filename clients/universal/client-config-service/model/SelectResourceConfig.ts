import { SelectResourceConfigInput } from "./SelectResourceConfigInput";
import { SelectResourceConfigOutput } from "./SelectResourceConfigOutput";
import { InvalidExpressionException } from "./InvalidExpressionException";
import { InvalidLimitException } from "./InvalidLimitException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
