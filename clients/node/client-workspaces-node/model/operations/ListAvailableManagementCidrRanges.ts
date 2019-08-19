import { ListAvailableManagementCidrRangesInput } from "../shapes/ListAvailableManagementCidrRangesInput";
import { ListAvailableManagementCidrRangesOutput } from "../shapes/ListAvailableManagementCidrRangesOutput";
import { InvalidParameterValuesException } from "../shapes/InvalidParameterValuesException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListAvailableManagementCidrRanges: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListAvailableManagementCidrRanges",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListAvailableManagementCidrRangesInput
  },
  output: {
    shape: ListAvailableManagementCidrRangesOutput
  },
  errors: [
    {
      shape: InvalidParameterValuesException
    },
    {
      shape: AccessDeniedException
    }
  ]
};
