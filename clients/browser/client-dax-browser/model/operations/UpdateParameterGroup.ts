import { UpdateParameterGroupInput } from "../shapes/UpdateParameterGroupInput";
import { UpdateParameterGroupOutput } from "../shapes/UpdateParameterGroupOutput";
import { InvalidParameterGroupStateFault } from "../shapes/InvalidParameterGroupStateFault";
import { ParameterGroupNotFoundFault } from "../shapes/ParameterGroupNotFoundFault";
import { ServiceLinkedRoleNotFoundFault } from "../shapes/ServiceLinkedRoleNotFoundFault";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { InvalidParameterCombinationException } from "../shapes/InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateParameterGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateParameterGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateParameterGroupInput
  },
  output: {
    shape: UpdateParameterGroupOutput
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
