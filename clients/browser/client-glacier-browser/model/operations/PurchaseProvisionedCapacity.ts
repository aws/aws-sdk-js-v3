import { PurchaseProvisionedCapacityInput } from "../shapes/PurchaseProvisionedCapacityInput";
import { PurchaseProvisionedCapacityOutput } from "../shapes/PurchaseProvisionedCapacityOutput";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PurchaseProvisionedCapacity: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PurchaseProvisionedCapacity",
  http: {
    method: "POST",
    requestUri: "/{accountId}/provisioned-capacity"
  },
  input: {
    shape: PurchaseProvisionedCapacityInput
  },
  output: {
    shape: PurchaseProvisionedCapacityOutput
  },
  errors: [
    {
      shape: InvalidParameterValueException
    },
    {
      shape: MissingParameterValueException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
