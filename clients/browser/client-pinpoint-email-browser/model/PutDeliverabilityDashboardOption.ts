import { PutDeliverabilityDashboardOptionInput } from "./PutDeliverabilityDashboardOptionInput";
import { PutDeliverabilityDashboardOptionOutput } from "./PutDeliverabilityDashboardOptionOutput";
import { AlreadyExistsException } from "./AlreadyExistsException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { LimitExceededException } from "./LimitExceededException";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
