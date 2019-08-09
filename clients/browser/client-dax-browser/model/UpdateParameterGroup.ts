import { UpdateParameterGroupInput } from "./UpdateParameterGroupInput";
import { UpdateParameterGroupOutput } from "./UpdateParameterGroupOutput";
import { InvalidParameterGroupStateFault } from "./InvalidParameterGroupStateFault";
import { ParameterGroupNotFoundFault } from "./ParameterGroupNotFoundFault";
import { ServiceLinkedRoleNotFoundFault } from "./ServiceLinkedRoleNotFoundFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
