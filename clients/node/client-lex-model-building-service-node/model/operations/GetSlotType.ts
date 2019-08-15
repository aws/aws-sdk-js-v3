import { GetSlotTypeInput } from "../shapes/GetSlotTypeInput";
import { GetSlotTypeOutput } from "../shapes/GetSlotTypeOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetSlotType: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetSlotType",
  http: {
    method: "GET",
    requestUri: "/slottypes/{name}/versions/{version}"
  },
  input: {
    shape: GetSlotTypeInput
  },
  output: {
    shape: GetSlotTypeOutput
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
