import { AddTagsToCertificateInput } from "./AddTagsToCertificateInput";
import { AddTagsToCertificateOutput } from "./AddTagsToCertificateOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidArnException } from "./InvalidArnException";
import { InvalidTagException } from "./InvalidTagException";
import { TooManyTagsException } from "./TooManyTagsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AddTagsToCertificate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AddTagsToCertificate",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AddTagsToCertificateInput
  },
  output: {
    shape: AddTagsToCertificateOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidArnException
    },
    {
      shape: InvalidTagException
    },
    {
      shape: TooManyTagsException
    }
  ]
};
