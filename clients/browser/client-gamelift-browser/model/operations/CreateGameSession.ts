import { CreateGameSessionInput } from "../shapes/CreateGameSessionInput";
import { CreateGameSessionOutput } from "../shapes/CreateGameSessionOutput";
import { ConflictException } from "../shapes/ConflictException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InvalidFleetStatusException } from "../shapes/InvalidFleetStatusException";
import { TerminalRoutingStrategyException } from "../shapes/TerminalRoutingStrategyException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { NotFoundException } from "../shapes/NotFoundException";
import { FleetCapacityExceededException } from "../shapes/FleetCapacityExceededException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { IdempotentParameterMismatchException } from "../shapes/IdempotentParameterMismatchException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateGameSession: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateGameSession",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateGameSessionInput
  },
  output: {
    shape: CreateGameSessionOutput
  },
  errors: [
    {
      shape: ConflictException
    },
    {
      shape: InternalServiceException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: InvalidFleetStatusException
    },
    {
      shape: TerminalRoutingStrategyException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: NotFoundException
    },
    {
      shape: FleetCapacityExceededException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: IdempotentParameterMismatchException
    }
  ]
};
