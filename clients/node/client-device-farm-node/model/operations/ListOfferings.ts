import { ListOfferingsInput } from "../shapes/ListOfferingsInput";
import { ListOfferingsOutput } from "../shapes/ListOfferingsOutput";
import { ArgumentException } from "../shapes/ArgumentException";
import { NotFoundException } from "../shapes/NotFoundException";
import { NotEligibleException } from "../shapes/NotEligibleException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceAccountException } from "../shapes/ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListOfferings: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListOfferings",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListOfferingsInput
  },
  output: {
    shape: ListOfferingsOutput
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
