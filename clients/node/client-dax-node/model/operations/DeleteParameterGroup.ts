import { DeleteParameterGroupInput } from "../shapes/DeleteParameterGroupInput";
import { DeleteParameterGroupOutput } from "../shapes/DeleteParameterGroupOutput";
import { InvalidParameterGroupStateFault } from "../shapes/InvalidParameterGroupStateFault";
import { ParameterGroupNotFoundFault } from "../shapes/ParameterGroupNotFoundFault";
import { ServiceLinkedRoleNotFoundFault } from "../shapes/ServiceLinkedRoleNotFoundFault";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { InvalidParameterCombinationException } from "../shapes/InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteParameterGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteParameterGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteParameterGroupInput
  },
  output: {
    shape: DeleteParameterGroupOutput
  },
  errors: [
    {
      shape: InvalidParameterGroupStateFault
    },
    {
      shape: ParameterGroupNotFoundFault
    },
    {
      shape: ServiceLinkedRoleNotFoundFault
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: InvalidParameterCombinationException
    }
  ]
};
