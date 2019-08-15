import { DeleteSimulationApplicationInput } from "../shapes/DeleteSimulationApplicationInput";
import { DeleteSimulationApplicationOutput } from "../shapes/DeleteSimulationApplicationOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteSimulationApplication: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteSimulationApplication",
  http: {
    method: "POST",
    requestUri: "/deleteSimulationApplication"
  },
  input: {
    shape: DeleteSimulationApplicationInput
  },
  output: {
    shape: DeleteSimulationApplicationOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalServerException
    }
  ]
};
