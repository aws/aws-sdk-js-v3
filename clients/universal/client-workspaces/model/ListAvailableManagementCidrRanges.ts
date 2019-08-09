import { ListAvailableManagementCidrRangesInput } from "./ListAvailableManagementCidrRangesInput";
import { ListAvailableManagementCidrRangesOutput } from "./ListAvailableManagementCidrRangesOutput";
import { InvalidParameterValuesException } from "./InvalidParameterValuesException";
import { AccessDeniedException } from "./AccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
