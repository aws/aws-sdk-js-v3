import { CreateDeliverabilityTestReportInput } from "./CreateDeliverabilityTestReportInput";
import { CreateDeliverabilityTestReportOutput } from "./CreateDeliverabilityTestReportOutput";
import { AccountSuspendedException } from "./AccountSuspendedException";
import { SendingPausedException } from "./SendingPausedException";
import { MessageRejected } from "./MessageRejected";
import { MailFromDomainNotVerifiedException } from "./MailFromDomainNotVerifiedException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { LimitExceededException } from "./LimitExceededException";
import { BadRequestException } from "./BadRequestException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
