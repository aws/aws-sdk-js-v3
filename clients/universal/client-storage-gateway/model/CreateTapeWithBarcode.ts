import { CreateTapeWithBarcodeInput } from "./CreateTapeWithBarcodeInput";
import { CreateTapeWithBarcodeOutput } from "./CreateTapeWithBarcodeOutput";
import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
