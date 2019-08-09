import { GetStatisticsInput } from "./GetStatisticsInput";
import { GetStatisticsOutput } from "./GetStatisticsOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidQueryException } from "./InvalidQueryException";
import { InvalidAggregationException } from "./InvalidAggregationException";
import { IndexNotReadyException } from "./IndexNotReadyException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
