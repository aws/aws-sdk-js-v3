import { DeleteUsageReportSubscriptionInput } from "./DeleteUsageReportSubscriptionInput";
import { DeleteUsageReportSubscriptionOutput } from "./DeleteUsageReportSubscriptionOutput";
import { InvalidAccountStatusException } from "./InvalidAccountStatusException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteUsageReportSubscription: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteUsageReportSubscription",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteUsageReportSubscriptionInput
  },
  output: {
    shape: DeleteUsageReportSubscriptionOutput
  },
  errors: [
    {
      shape: InvalidAccountStatusException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
