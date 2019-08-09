import { GetSlotTypeVersionsInput } from "./GetSlotTypeVersionsInput";
import { GetSlotTypeVersionsOutput } from "./GetSlotTypeVersionsOutput";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalFailureException } from "./InternalFailureException";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
