import { AssignTapePoolInput } from "../shapes/AssignTapePoolInput";
import { AssignTapePoolOutput } from "../shapes/AssignTapePoolOutput";
import { InvalidGatewayRequestException } from "../shapes/InvalidGatewayRequestException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AssignTapePool: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AssignTapePool",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AssignTapePoolInput
  },
  output: {
    shape: AssignTapePoolOutput
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
