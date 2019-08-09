import { StartDeliveryStreamEncryptionInput } from "./StartDeliveryStreamEncryptionInput";
import { StartDeliveryStreamEncryptionOutput } from "./StartDeliveryStreamEncryptionOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceInUseException } from "./ResourceInUseException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
