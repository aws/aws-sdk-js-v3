import { PutResourcePolicyInput } from "./PutResourcePolicyInput";
import { PutResourcePolicyOutput } from "./PutResourcePolicyOutput";
import { MalformedPolicyDocumentException } from "./MalformedPolicyDocumentException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalServiceError } from "./InternalServiceError";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
