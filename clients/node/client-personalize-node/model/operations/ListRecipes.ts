import { ListRecipesInput } from "../shapes/ListRecipesInput";
import { ListRecipesOutput } from "../shapes/ListRecipesOutput";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListRecipes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListRecipes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListRecipesInput
  },
  output: {
    shape: ListRecipesOutput
  },
  errors: [
    {
      shape: InvalidNextTokenException
    }
  ]
};
