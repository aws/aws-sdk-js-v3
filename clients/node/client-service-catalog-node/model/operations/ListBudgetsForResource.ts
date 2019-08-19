import { ListBudgetsForResourceInput } from "../shapes/ListBudgetsForResourceInput";
import { ListBudgetsForResourceOutput } from "../shapes/ListBudgetsForResourceOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParametersException } from "../shapes/InvalidParametersException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListBudgetsForResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListBudgetsForResource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListBudgetsForResourceInput
  },
  output: {
    shape: ListBudgetsForResourceOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParametersException
    }
  ]
};
