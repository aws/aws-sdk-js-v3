import { DescribeRecipeInput } from "./DescribeRecipeInput";
import { DescribeRecipeOutput } from "./DescribeRecipeOutput";
import { InvalidInputException } from "./InvalidInputException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeRecipe: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeRecipe",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeRecipeInput
  },
  output: {
    shape: DescribeRecipeOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
