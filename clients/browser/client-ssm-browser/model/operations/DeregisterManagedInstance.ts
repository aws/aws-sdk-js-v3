import { DeregisterManagedInstanceInput } from "../shapes/DeregisterManagedInstanceInput";
import { DeregisterManagedInstanceOutput } from "../shapes/DeregisterManagedInstanceOutput";
import { InvalidInstanceId } from "../shapes/InvalidInstanceId";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeregisterManagedInstance: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeregisterManagedInstance",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeregisterManagedInstanceInput
  },
  output: {
    shape: DeregisterManagedInstanceOutput
  },
  errors: [
    {
      shape: InvalidInstanceId
    },
    {
      shape: InternalServerError
    }
  ]
};
