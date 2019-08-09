import { DeleteSimulationApplicationInput } from "./DeleteSimulationApplicationInput";
import { DeleteSimulationApplicationOutput } from "./DeleteSimulationApplicationOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
