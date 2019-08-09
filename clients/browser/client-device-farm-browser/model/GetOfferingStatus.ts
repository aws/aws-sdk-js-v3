import { GetOfferingStatusInput } from "./GetOfferingStatusInput";
import { GetOfferingStatusOutput } from "./GetOfferingStatusOutput";
import { ArgumentException } from "./ArgumentException";
import { NotFoundException } from "./NotFoundException";
import { NotEligibleException } from "./NotEligibleException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceAccountException } from "./ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetOfferingStatus: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetOfferingStatus",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetOfferingStatusInput
  },
  output: {
    shape: GetOfferingStatusOutput
  },
  errors: [
    {
      shape: ArgumentException
    },
    {
      shape: NotFoundException
    },
    {
      shape: NotEligibleException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ServiceAccountException
    }
  ]
};
