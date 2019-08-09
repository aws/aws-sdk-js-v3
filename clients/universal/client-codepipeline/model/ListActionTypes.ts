import { ListActionTypesInput } from "./ListActionTypesInput";
import { ListActionTypesOutput } from "./ListActionTypesOutput";
import { ValidationException } from "./ValidationException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListActionTypes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListActionTypes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListActionTypesInput
  },
  output: {
    shape: ListActionTypesOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: InvalidNextTokenException
    }
  ]
};
