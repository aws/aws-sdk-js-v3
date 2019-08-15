import { ScheduleKeyDeletionInput } from "../shapes/ScheduleKeyDeletionInput";
import { ScheduleKeyDeletionOutput } from "../shapes/ScheduleKeyDeletionOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { DependencyTimeoutException } from "../shapes/DependencyTimeoutException";
import { KMSInternalException } from "../shapes/KMSInternalException";
import { KMSInvalidStateException } from "../shapes/KMSInvalidStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
