import { GetKeyPolicyInput } from "../shapes/GetKeyPolicyInput";
import { GetKeyPolicyOutput } from "../shapes/GetKeyPolicyOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { DependencyTimeoutException } from "../shapes/DependencyTimeoutException";
import { KMSInternalException } from "../shapes/KMSInternalException";
import { KMSInvalidStateException } from "../shapes/KMSInvalidStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetKeyPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetKeyPolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetKeyPolicyInput
  },
  output: {
    shape: GetKeyPolicyOutput
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
