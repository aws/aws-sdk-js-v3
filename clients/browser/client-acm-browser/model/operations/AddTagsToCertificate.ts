import { AddTagsToCertificateInput } from "../shapes/AddTagsToCertificateInput";
import { AddTagsToCertificateOutput } from "../shapes/AddTagsToCertificateOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { InvalidTagException } from "../shapes/InvalidTagException";
import { TooManyTagsException } from "../shapes/TooManyTagsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
