import { GetInventorySchemaInput } from "./GetInventorySchemaInput";
import { GetInventorySchemaOutput } from "./GetInventorySchemaOutput";
import { InternalServerError } from "./InternalServerError";
import { InvalidTypeNameException } from "./InvalidTypeNameException";
import { InvalidNextToken } from "./InvalidNextToken";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetInventorySchema: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetInventorySchema",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetInventorySchemaInput
  },
  output: {
    shape: GetInventorySchemaOutput
  },
  errors: [
    {
      shape: InternalServerError
    },
    {
      shape: InvalidTypeNameException
    },
    {
      shape: InvalidNextToken
    }
  ]
};
