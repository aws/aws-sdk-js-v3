import { StopDeliveryStreamEncryptionInput } from "./StopDeliveryStreamEncryptionInput";
import { StopDeliveryStreamEncryptionOutput } from "./StopDeliveryStreamEncryptionOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceInUseException } from "./ResourceInUseException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const StopDeliveryStreamEncryption: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StopDeliveryStreamEncryption",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StopDeliveryStreamEncryptionInput
  },
  output: {
    shape: StopDeliveryStreamEncryptionOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ResourceInUseException
    },
    {
      shape: InvalidArgumentException
    },
    {
      shape: LimitExceededException
    }
  ]
};
