import { GetInventorySchemaInput } from "../shapes/GetInventorySchemaInput";
import { GetInventorySchemaOutput } from "../shapes/GetInventorySchemaOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { InvalidTypeNameException } from "../shapes/InvalidTypeNameException";
import { InvalidNextToken } from "../shapes/InvalidNextToken";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
