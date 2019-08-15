import { StartDeliveryStreamEncryptionInput } from "../shapes/StartDeliveryStreamEncryptionInput";
import { StartDeliveryStreamEncryptionOutput } from "../shapes/StartDeliveryStreamEncryptionOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StartDeliveryStreamEncryption: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartDeliveryStreamEncryption",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartDeliveryStreamEncryptionInput
  },
  output: {
    shape: StartDeliveryStreamEncryptionOutput
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
