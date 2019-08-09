import { CreateParameterGroupInput } from "./CreateParameterGroupInput";
import { CreateParameterGroupOutput } from "./CreateParameterGroupOutput";
import { ParameterGroupQuotaExceededFault } from "./ParameterGroupQuotaExceededFault";
import { ParameterGroupAlreadyExistsFault } from "./ParameterGroupAlreadyExistsFault";
import { InvalidParameterGroupStateFault } from "./InvalidParameterGroupStateFault";
import { ServiceLinkedRoleNotFoundFault } from "./ServiceLinkedRoleNotFoundFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
