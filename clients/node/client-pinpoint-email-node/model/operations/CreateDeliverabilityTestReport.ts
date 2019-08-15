import { CreateDeliverabilityTestReportInput } from "../shapes/CreateDeliverabilityTestReportInput";
import { CreateDeliverabilityTestReportOutput } from "../shapes/CreateDeliverabilityTestReportOutput";
import { AccountSuspendedException } from "../shapes/AccountSuspendedException";
import { SendingPausedException } from "../shapes/SendingPausedException";
import { MessageRejected } from "../shapes/MessageRejected";
import { MailFromDomainNotVerifiedException } from "../shapes/MailFromDomainNotVerifiedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateDeliverabilityTestReport: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateDeliverabilityTestReport",
  http: {
    method: "POST",
    requestUri: "/v1/email/deliverability-dashboard/test"
  },
  input: {
    shape: CreateDeliverabilityTestReportInput
  },
  output: {
    shape: CreateDeliverabilityTestReportOutput
  },
  errors: [
    {
      shape: AccountSuspendedException
    },
    {
      shape: SendingPausedException
    },
    {
      shape: MessageRejected
    },
    {
      shape: MailFromDomainNotVerifiedException
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
    },
    {
      shape: ConcurrentModificationException
    }
  ]
};
