import { DeleteParameterGroupInput } from "./DeleteParameterGroupInput";
import { DeleteParameterGroupOutput } from "./DeleteParameterGroupOutput";
import { InvalidParameterGroupStateFault } from "./InvalidParameterGroupStateFault";
import { ParameterGroupNotFoundFault } from "./ParameterGroupNotFoundFault";
import { ServiceLinkedRoleNotFoundFault } from "./ServiceLinkedRoleNotFoundFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
