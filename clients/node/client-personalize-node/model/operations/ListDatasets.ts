import { ListDatasetsInput } from "../shapes/ListDatasetsInput";
import { ListDatasetsOutput } from "../shapes/ListDatasetsOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListDatasets: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListDatasets",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListDatasetsInput
  },
  output: {
    shape: ListDatasetsOutput
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
