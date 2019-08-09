import { UpdateSimulationApplicationInput } from "./UpdateSimulationApplicationInput";
import { UpdateSimulationApplicationOutput } from "./UpdateSimulationApplicationOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
