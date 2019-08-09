import { ListDatasetsInput } from "./ListDatasetsInput";
import { ListDatasetsOutput } from "./ListDatasetsOutput";
import { InvalidInputException } from "./InvalidInputException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
