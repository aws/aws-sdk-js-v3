import { ListSolutionsInput } from "./ListSolutionsInput";
import { ListSolutionsOutput } from "./ListSolutionsOutput";
import { InvalidInputException } from "./InvalidInputException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
