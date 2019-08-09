import { PurchaseReservedElasticsearchInstanceOfferingInput } from "./PurchaseReservedElasticsearchInstanceOfferingInput";
import { PurchaseReservedElasticsearchInstanceOfferingOutput } from "./PurchaseReservedElasticsearchInstanceOfferingOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { LimitExceededException } from "./LimitExceededException";
import { DisabledOperationException } from "./DisabledOperationException";
import { ValidationException } from "./ValidationException";
import { InternalException } from "./InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
