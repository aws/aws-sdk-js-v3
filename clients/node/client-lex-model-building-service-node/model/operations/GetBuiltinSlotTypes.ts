import { GetBuiltinSlotTypesInput } from "../shapes/GetBuiltinSlotTypesInput";
import { GetBuiltinSlotTypesOutput } from "../shapes/GetBuiltinSlotTypesOutput";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetBuiltinSlotTypes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetBuiltinSlotTypes",
  http: {
    method: "GET",
    requestUri: "/builtins/slottypes/"
  },
  input: {
    shape: GetBuiltinSlotTypesInput
  },
  output: {
    shape: GetBuiltinSlotTypesOutput
  },
  errors: [
    {
      shape: LimitExceededException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: BadRequestException
    }
  ]
};
