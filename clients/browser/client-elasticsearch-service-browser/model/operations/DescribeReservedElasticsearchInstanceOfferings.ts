import { DescribeReservedElasticsearchInstanceOfferingsInput } from "../shapes/DescribeReservedElasticsearchInstanceOfferingsInput";
import { DescribeReservedElasticsearchInstanceOfferingsOutput } from "../shapes/DescribeReservedElasticsearchInstanceOfferingsOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ValidationException } from "../shapes/ValidationException";
import { DisabledOperationException } from "../shapes/DisabledOperationException";
import { InternalException } from "../shapes/InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeReservedElasticsearchInstanceOfferings: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeReservedElasticsearchInstanceOfferings",
  http: {
    method: "GET",
    requestUri: "/2015-01-01/es/reservedInstanceOfferings"
  },
  input: {
    shape: DescribeReservedElasticsearchInstanceOfferingsInput
  },
  output: {
    shape: DescribeReservedElasticsearchInstanceOfferingsOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ValidationException
    },
    {
      shape: DisabledOperationException
    },
    {
      shape: InternalException
    }
  ]
};
