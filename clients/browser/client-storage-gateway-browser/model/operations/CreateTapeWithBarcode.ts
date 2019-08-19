import { CreateTapeWithBarcodeInput } from "../shapes/CreateTapeWithBarcodeInput";
import { CreateTapeWithBarcodeOutput } from "../shapes/CreateTapeWithBarcodeOutput";
import { InvalidGatewayRequestException } from "../shapes/InvalidGatewayRequestException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateTapeWithBarcode: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateTapeWithBarcode",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateTapeWithBarcodeInput
  },
  output: {
    shape: CreateTapeWithBarcodeOutput
  },
  errors: [
    {
      shape: InvalidGatewayRequestException
    },
    {
      shape: InternalServerError
    }
  ]
};
