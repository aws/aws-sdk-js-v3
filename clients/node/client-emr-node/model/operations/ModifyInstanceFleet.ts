import { ModifyInstanceFleetInput } from "../shapes/ModifyInstanceFleetInput";
import { ModifyInstanceFleetOutput } from "../shapes/ModifyInstanceFleetOutput";
import { InternalServerException } from "../shapes/InternalServerException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ModifyInstanceFleet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyInstanceFleet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyInstanceFleetInput
  },
  output: {
    shape: ModifyInstanceFleetOutput
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
