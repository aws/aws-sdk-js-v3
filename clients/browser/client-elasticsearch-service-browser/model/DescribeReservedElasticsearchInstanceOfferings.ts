import { DescribeReservedElasticsearchInstanceOfferingsInput } from "./DescribeReservedElasticsearchInstanceOfferingsInput";
import { DescribeReservedElasticsearchInstanceOfferingsOutput } from "./DescribeReservedElasticsearchInstanceOfferingsOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ValidationException } from "./ValidationException";
import { DisabledOperationException } from "./DisabledOperationException";
import { InternalException } from "./InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
