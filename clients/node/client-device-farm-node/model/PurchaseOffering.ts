import { PurchaseOfferingInput } from "./PurchaseOfferingInput";
import { PurchaseOfferingOutput } from "./PurchaseOfferingOutput";
import { ArgumentException } from "./ArgumentException";
import { NotFoundException } from "./NotFoundException";
import { NotEligibleException } from "./NotEligibleException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceAccountException } from "./ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
