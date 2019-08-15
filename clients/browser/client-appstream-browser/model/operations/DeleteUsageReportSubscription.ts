import { DeleteUsageReportSubscriptionInput } from "../shapes/DeleteUsageReportSubscriptionInput";
import { DeleteUsageReportSubscriptionOutput } from "../shapes/DeleteUsageReportSubscriptionOutput";
import { InvalidAccountStatusException } from "../shapes/InvalidAccountStatusException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
