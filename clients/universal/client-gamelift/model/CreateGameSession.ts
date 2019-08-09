import { CreateGameSessionInput } from "./CreateGameSessionInput";
import { CreateGameSessionOutput } from "./CreateGameSessionOutput";
import { ConflictException } from "./ConflictException";
import { InternalServiceException } from "./InternalServiceException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InvalidFleetStatusException } from "./InvalidFleetStatusException";
import { TerminalRoutingStrategyException } from "./TerminalRoutingStrategyException";
import { InvalidRequestException } from "./InvalidRequestException";
import { NotFoundException } from "./NotFoundException";
import { FleetCapacityExceededException } from "./FleetCapacityExceededException";
import { LimitExceededException } from "./LimitExceededException";
import { IdempotentParameterMismatchException } from "./IdempotentParameterMismatchException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
