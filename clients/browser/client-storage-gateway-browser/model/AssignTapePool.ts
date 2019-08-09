import { AssignTapePoolInput } from "./AssignTapePoolInput";
import { AssignTapePoolOutput } from "./AssignTapePoolOutput";
import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
