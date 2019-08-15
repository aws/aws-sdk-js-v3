import { GetSlotTypeVersionsInput } from "../shapes/GetSlotTypeVersionsInput";
import { GetSlotTypeVersionsOutput } from "../shapes/GetSlotTypeVersionsOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetSlotTypeVersions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetSlotTypeVersions",
  http: {
    method: "GET",
    requestUri: "/slottypes/{name}/versions/"
  },
  input: {
    shape: GetSlotTypeVersionsInput
  },
  output: {
    shape: GetSlotTypeVersionsOutput
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
