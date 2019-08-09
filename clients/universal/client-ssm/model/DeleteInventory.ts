import { DeleteInventoryInput } from "./DeleteInventoryInput";
import { DeleteInventoryOutput } from "./DeleteInventoryOutput";
import { InternalServerError } from "./InternalServerError";
import { InvalidTypeNameException } from "./InvalidTypeNameException";
import { InvalidOptionException } from "./InvalidOptionException";
import { InvalidDeleteInventoryParametersException } from "./InvalidDeleteInventoryParametersException";
import { InvalidInventoryRequestException } from "./InvalidInventoryRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
