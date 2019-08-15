import { GetSlotTypesInput } from "../shapes/GetSlotTypesInput";
import { GetSlotTypesOutput } from "../shapes/GetSlotTypesOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetSlotTypes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetSlotTypes",
  http: {
    method: "GET",
    requestUri: "/slottypes/"
  },
  input: {
    shape: GetSlotTypesInput
  },
  output: {
    shape: GetSlotTypesOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
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
