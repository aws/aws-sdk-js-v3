import { RenewOfferingInput } from "../shapes/RenewOfferingInput";
import { RenewOfferingOutput } from "../shapes/RenewOfferingOutput";
import { ArgumentException } from "../shapes/ArgumentException";
import { NotFoundException } from "../shapes/NotFoundException";
import { NotEligibleException } from "../shapes/NotEligibleException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceAccountException } from "../shapes/ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RenewOffering: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RenewOffering",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RenewOfferingInput
  },
  output: {
    shape: RenewOfferingOutput
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
