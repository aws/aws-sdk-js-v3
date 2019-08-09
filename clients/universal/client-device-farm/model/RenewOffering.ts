import { RenewOfferingInput } from "./RenewOfferingInput";
import { RenewOfferingOutput } from "./RenewOfferingOutput";
import { ArgumentException } from "./ArgumentException";
import { NotFoundException } from "./NotFoundException";
import { NotEligibleException } from "./NotEligibleException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceAccountException } from "./ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
