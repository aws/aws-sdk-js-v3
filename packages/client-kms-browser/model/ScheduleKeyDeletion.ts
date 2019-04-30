import { ScheduleKeyDeletionInput } from "./ScheduleKeyDeletionInput";
import { ScheduleKeyDeletionOutput } from "./ScheduleKeyDeletionOutput";
import { NotFoundException } from "./NotFoundException";
import { InvalidArnException } from "./InvalidArnException";
import { DependencyTimeoutException } from "./DependencyTimeoutException";
import { KMSInternalException } from "./KMSInternalException";
import { KMSInvalidStateException } from "./KMSInvalidStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ScheduleKeyDeletion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ScheduleKeyDeletion",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ScheduleKeyDeletionInput
  },
  output: {
    shape: ScheduleKeyDeletionOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: InvalidArnException
    },
    {
      shape: DependencyTimeoutException
    },
    {
      shape: KMSInternalException
    },
    {
      shape: KMSInvalidStateException
    }
  ]
};
