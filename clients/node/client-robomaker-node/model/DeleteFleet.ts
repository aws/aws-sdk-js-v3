import { DeleteFleetInput } from "./DeleteFleetInput";
import { DeleteFleetOutput } from "./DeleteFleetOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalServerException } from "./InternalServerException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteFleet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteFleet",
  http: {
    method: "POST",
    requestUri: "/deleteFleet"
  },
  input: {
    shape: DeleteFleetInput
  },
  output: {
    shape: DeleteFleetOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: InternalServerException
    },
    {
      shape: ThrottlingException
    }
  ]
};
