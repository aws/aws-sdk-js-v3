import { ListOfferingsInput } from "./ListOfferingsInput";
import { ListOfferingsOutput } from "./ListOfferingsOutput";
import { ArgumentException } from "./ArgumentException";
import { NotFoundException } from "./NotFoundException";
import { NotEligibleException } from "./NotEligibleException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceAccountException } from "./ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
