import { CreateParameterGroupInput } from "../shapes/CreateParameterGroupInput";
import { CreateParameterGroupOutput } from "../shapes/CreateParameterGroupOutput";
import { ParameterGroupQuotaExceededFault } from "../shapes/ParameterGroupQuotaExceededFault";
import { ParameterGroupAlreadyExistsFault } from "../shapes/ParameterGroupAlreadyExistsFault";
import { InvalidParameterGroupStateFault } from "../shapes/InvalidParameterGroupStateFault";
import { ServiceLinkedRoleNotFoundFault } from "../shapes/ServiceLinkedRoleNotFoundFault";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { InvalidParameterCombinationException } from "../shapes/InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateParameterGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateParameterGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateParameterGroupInput
  },
  output: {
    shape: CreateParameterGroupOutput
  },
  errors: [
    {
      shape: ParameterGroupQuotaExceededFault
    },
    {
      shape: ParameterGroupAlreadyExistsFault
    },
    {
      shape: InvalidParameterGroupStateFault
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
