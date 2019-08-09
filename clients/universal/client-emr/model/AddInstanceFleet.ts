import { AddInstanceFleetInput } from "./AddInstanceFleetInput";
import { AddInstanceFleetOutput } from "./AddInstanceFleetOutput";
import { InternalServerException } from "./InternalServerException";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AddInstanceFleet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AddInstanceFleet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AddInstanceFleetInput
  },
  output: {
    shape: AddInstanceFleetOutput
  },
  errors: [
    {
      shape: InternalServerException
    },
    {
      shape: InvalidRequestException
    }
  ]
};
