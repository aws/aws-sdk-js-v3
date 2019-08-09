import { ListOfferingPromotionsInput } from "./ListOfferingPromotionsInput";
import { ListOfferingPromotionsOutput } from "./ListOfferingPromotionsOutput";
import { ArgumentException } from "./ArgumentException";
import { NotFoundException } from "./NotFoundException";
import { NotEligibleException } from "./NotEligibleException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceAccountException } from "./ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
