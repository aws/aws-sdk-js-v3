import { ListServiceActionsInput } from "../shapes/ListServiceActionsInput";
import { ListServiceActionsOutput } from "../shapes/ListServiceActionsOutput";
import { InvalidParametersException } from "../shapes/InvalidParametersException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListServiceActions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListServiceActions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListServiceActionsInput
  },
  output: {
    shape: ListServiceActionsOutput
  },
  errors: [
    {
      shape: InvalidParametersException
    }
  ]
};
