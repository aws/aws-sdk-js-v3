import { AddInstanceFleetInput } from "../shapes/AddInstanceFleetInput";
import { AddInstanceFleetOutput } from "../shapes/AddInstanceFleetOutput";
import { InternalServerException } from "../shapes/InternalServerException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
