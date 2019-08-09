import { GetBuiltinSlotTypesInput } from "./GetBuiltinSlotTypesInput";
import { GetBuiltinSlotTypesOutput } from "./GetBuiltinSlotTypesOutput";
import { LimitExceededException } from "./LimitExceededException";
import { InternalFailureException } from "./InternalFailureException";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
