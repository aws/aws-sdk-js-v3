import { ListOfferingPromotionsInput } from "../shapes/ListOfferingPromotionsInput";
import { ListOfferingPromotionsOutput } from "../shapes/ListOfferingPromotionsOutput";
import { ArgumentException } from "../shapes/ArgumentException";
import { NotFoundException } from "../shapes/NotFoundException";
import { NotEligibleException } from "../shapes/NotEligibleException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceAccountException } from "../shapes/ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListOfferingPromotions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListOfferingPromotions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListOfferingPromotionsInput
  },
  output: {
    shape: ListOfferingPromotionsOutput
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
