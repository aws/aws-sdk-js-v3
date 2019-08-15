import { DisassociateBudgetFromResourceInput } from "../shapes/DisassociateBudgetFromResourceInput";
import { DisassociateBudgetFromResourceOutput } from "../shapes/DisassociateBudgetFromResourceOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DisassociateBudgetFromResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisassociateBudgetFromResource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisassociateBudgetFromResourceInput
  },
  output: {
    shape: DisassociateBudgetFromResourceOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    }
  ]
};
