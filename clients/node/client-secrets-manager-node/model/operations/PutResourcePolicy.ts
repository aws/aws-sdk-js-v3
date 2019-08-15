import { PutResourcePolicyInput } from "../shapes/PutResourcePolicyInput";
import { PutResourcePolicyOutput } from "../shapes/PutResourcePolicyOutput";
import { MalformedPolicyDocumentException } from "../shapes/MalformedPolicyDocumentException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InternalServiceError } from "../shapes/InternalServiceError";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutResourcePolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutResourcePolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutResourcePolicyInput
  },
  output: {
    shape: PutResourcePolicyOutput
  },
  errors: [
    {
      shape: MalformedPolicyDocumentException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: InternalServiceError
    },
    {
      shape: InvalidRequestException
    }
  ]
};
