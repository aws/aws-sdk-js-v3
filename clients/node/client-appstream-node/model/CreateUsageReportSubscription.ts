import { CreateUsageReportSubscriptionInput } from "./CreateUsageReportSubscriptionInput";
import { CreateUsageReportSubscriptionOutput } from "./CreateUsageReportSubscriptionOutput";
import { InvalidRoleException } from "./InvalidRoleException";
import { InvalidAccountStatusException } from "./InvalidAccountStatusException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateUsageReportSubscription: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateUsageReportSubscription",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateUsageReportSubscriptionInput
  },
  output: {
    shape: CreateUsageReportSubscriptionOutput
  },
  errors: [
    {
      shape: InvalidRoleException
    },
    {
      shape: InvalidAccountStatusException
    }
  ]
};
