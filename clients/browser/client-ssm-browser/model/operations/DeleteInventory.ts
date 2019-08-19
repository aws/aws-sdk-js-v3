import { DeleteInventoryInput } from "../shapes/DeleteInventoryInput";
import { DeleteInventoryOutput } from "../shapes/DeleteInventoryOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { InvalidTypeNameException } from "../shapes/InvalidTypeNameException";
import { InvalidOptionException } from "../shapes/InvalidOptionException";
import { InvalidDeleteInventoryParametersException } from "../shapes/InvalidDeleteInventoryParametersException";
import { InvalidInventoryRequestException } from "../shapes/InvalidInventoryRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteInventory: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteInventory",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteInventoryInput
  },
  output: {
    shape: DeleteInventoryOutput
  },
  errors: [
    {
      shape: InternalServerError
    },
    {
      shape: InvalidTypeNameException
    },
    {
      shape: InvalidOptionException
    },
    {
      shape: InvalidDeleteInventoryParametersException
    },
    {
      shape: InvalidInventoryRequestException
    }
  ]
};
