import { StopDeliveryStreamEncryptionInput } from "../shapes/StopDeliveryStreamEncryptionInput";
import { StopDeliveryStreamEncryptionOutput } from "../shapes/StopDeliveryStreamEncryptionOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
