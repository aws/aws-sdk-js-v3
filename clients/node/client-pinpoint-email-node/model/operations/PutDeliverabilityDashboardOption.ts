import { PutDeliverabilityDashboardOptionInput } from "../shapes/PutDeliverabilityDashboardOptionInput";
import { PutDeliverabilityDashboardOptionOutput } from "../shapes/PutDeliverabilityDashboardOptionOutput";
import { AlreadyExistsException } from "../shapes/AlreadyExistsException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutDeliverabilityDashboardOption: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutDeliverabilityDashboardOption",
  http: {
    method: "PUT",
    requestUri: "/v1/email/deliverability-dashboard"
  },
  input: {
    shape: PutDeliverabilityDashboardOptionInput
  },
  output: {
    shape: PutDeliverabilityDashboardOptionOutput
  },
  errors: [
    {
      shape: AlreadyExistsException
    },
    {
      shape: NotFoundException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: BadRequestException
    }
  ]
};
