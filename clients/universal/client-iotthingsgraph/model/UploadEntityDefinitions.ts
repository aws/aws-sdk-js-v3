import { UploadEntityDefinitionsInput } from "./UploadEntityDefinitionsInput";
import { UploadEntityDefinitionsOutput } from "./UploadEntityDefinitionsOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalFailureException } from "./InternalFailureException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UploadEntityDefinitions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UploadEntityDefinitions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UploadEntityDefinitionsInput
  },
  output: {
    shape: UploadEntityDefinitionsOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: ThrottlingException
    }
  ]
};
