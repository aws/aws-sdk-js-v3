import { UpdateSimulationApplicationInput } from "../shapes/UpdateSimulationApplicationInput";
import { UpdateSimulationApplicationOutput } from "../shapes/UpdateSimulationApplicationOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateSimulationApplication: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateSimulationApplication",
  http: {
    method: "POST",
    requestUri: "/updateSimulationApplication"
  },
  input: {
    shape: UpdateSimulationApplicationInput
  },
  output: {
    shape: UpdateSimulationApplicationOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalServerException
    }
  ]
};
