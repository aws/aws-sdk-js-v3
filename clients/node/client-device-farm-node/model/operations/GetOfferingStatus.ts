import { GetOfferingStatusInput } from "../shapes/GetOfferingStatusInput";
import { GetOfferingStatusOutput } from "../shapes/GetOfferingStatusOutput";
import { ArgumentException } from "../shapes/ArgumentException";
import { NotFoundException } from "../shapes/NotFoundException";
import { NotEligibleException } from "../shapes/NotEligibleException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceAccountException } from "../shapes/ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
