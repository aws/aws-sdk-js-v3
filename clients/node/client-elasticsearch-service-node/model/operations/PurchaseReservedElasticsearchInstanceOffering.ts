import { PurchaseReservedElasticsearchInstanceOfferingInput } from "../shapes/PurchaseReservedElasticsearchInstanceOfferingInput";
import { PurchaseReservedElasticsearchInstanceOfferingOutput } from "../shapes/PurchaseReservedElasticsearchInstanceOfferingOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceAlreadyExistsException } from "../shapes/ResourceAlreadyExistsException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { DisabledOperationException } from "../shapes/DisabledOperationException";
import { ValidationException } from "../shapes/ValidationException";
import { InternalException } from "../shapes/InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PurchaseReservedElasticsearchInstanceOffering: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PurchaseReservedElasticsearchInstanceOffering",
  http: {
    method: "POST",
    requestUri: "/2015-01-01/es/purchaseReservedInstanceOffering"
  },
  input: {
    shape: PurchaseReservedElasticsearchInstanceOfferingInput
  },
  output: {
    shape: PurchaseReservedElasticsearchInstanceOfferingOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ResourceAlreadyExistsException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: DisabledOperationException
    },
    {
      shape: ValidationException
    },
    {
      shape: InternalException
    }
  ]
};
