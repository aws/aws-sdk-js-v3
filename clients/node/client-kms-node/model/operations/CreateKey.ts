import { CreateKeyInput } from "../shapes/CreateKeyInput";
import { CreateKeyOutput } from "../shapes/CreateKeyOutput";
import { MalformedPolicyDocumentException } from "../shapes/MalformedPolicyDocumentException";
import { DependencyTimeoutException } from "../shapes/DependencyTimeoutException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { UnsupportedOperationException } from "../shapes/UnsupportedOperationException";
import { KMSInternalException } from "../shapes/KMSInternalException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { TagException } from "../shapes/TagException";
import { CustomKeyStoreNotFoundException } from "../shapes/CustomKeyStoreNotFoundException";
import { CustomKeyStoreInvalidStateException } from "../shapes/CustomKeyStoreInvalidStateException";
import { CloudHsmClusterInvalidConfigurationException } from "../shapes/CloudHsmClusterInvalidConfigurationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateKey: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateKey",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateKeyInput
  },
  output: {
    shape: CreateKeyOutput
  },
  errors: [
    {
      shape: MalformedPolicyDocumentException
    },
    {
      shape: DependencyTimeoutException
    },
    {
      shape: InvalidArnException
    },
    {
      shape: UnsupportedOperationException
    },
    {
      shape: KMSInternalException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: TagException
    },
    {
      shape: CustomKeyStoreNotFoundException
    },
    {
      shape: CustomKeyStoreInvalidStateException
    },
    {
      shape: CloudHsmClusterInvalidConfigurationException
    }
  ]
};
