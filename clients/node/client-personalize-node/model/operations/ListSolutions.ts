import { ListSolutionsInput } from "../shapes/ListSolutionsInput";
import { ListSolutionsOutput } from "../shapes/ListSolutionsOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListSolutions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListSolutions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListSolutionsInput
  },
  output: {
    shape: ListSolutionsOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: InvalidNextTokenException
    }
  ]
};
