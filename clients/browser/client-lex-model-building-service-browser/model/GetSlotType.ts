import { GetSlotTypeInput } from "./GetSlotTypeInput";
import { GetSlotTypeOutput } from "./GetSlotTypeOutput";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalFailureException } from "./InternalFailureException";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
