import { ListSchemasInput } from "./ListSchemasInput";
import { ListSchemasOutput } from "./ListSchemasOutput";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListSchemas: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListSchemas",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListSchemasInput
  },
  output: {
    shape: ListSchemasOutput
  },
  errors: [
    {
      shape: InvalidNextTokenException
    }
  ]
};
