import { UploadEntityDefinitionsInput } from "../shapes/UploadEntityDefinitionsInput";
import { UploadEntityDefinitionsOutput } from "../shapes/UploadEntityDefinitionsOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
