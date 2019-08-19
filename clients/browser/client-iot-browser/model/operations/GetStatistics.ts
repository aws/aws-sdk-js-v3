import { GetStatisticsInput } from "../shapes/GetStatisticsInput";
import { GetStatisticsOutput } from "../shapes/GetStatisticsOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidQueryException } from "../shapes/InvalidQueryException";
import { InvalidAggregationException } from "../shapes/InvalidAggregationException";
import { IndexNotReadyException } from "../shapes/IndexNotReadyException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetStatistics: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetStatistics",
  http: {
    method: "POST",
    requestUri: "/indices/statistics"
  },
  input: {
    shape: GetStatisticsInput
  },
  output: {
    shape: GetStatisticsOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidQueryException
    },
    {
      shape: InvalidAggregationException
    },
    {
      shape: IndexNotReadyException
    }
  ]
};
