import { PurchaseOfferingInput } from "../shapes/PurchaseOfferingInput";
import { PurchaseOfferingOutput } from "../shapes/PurchaseOfferingOutput";
import { ArgumentException } from "../shapes/ArgumentException";
import { NotFoundException } from "../shapes/NotFoundException";
import { NotEligibleException } from "../shapes/NotEligibleException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceAccountException } from "../shapes/ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PurchaseOffering: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PurchaseOffering",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PurchaseOfferingInput
  },
  output: {
    shape: PurchaseOfferingOutput
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
