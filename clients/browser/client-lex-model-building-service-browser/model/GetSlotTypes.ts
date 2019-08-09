import { GetSlotTypesInput } from "./GetSlotTypesInput";
import { GetSlotTypesOutput } from "./GetSlotTypesOutput";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalFailureException } from "./InternalFailureException";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
