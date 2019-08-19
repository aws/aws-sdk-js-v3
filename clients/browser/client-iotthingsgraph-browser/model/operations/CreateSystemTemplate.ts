import { CreateSystemTemplateInput } from "../shapes/CreateSystemTemplateInput";
import { CreateSystemTemplateOutput } from "../shapes/CreateSystemTemplateOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceAlreadyExistsException } from "../shapes/ResourceAlreadyExistsException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateSystemTemplate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateSystemTemplate",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateSystemTemplateInput
  },
  output: {
    shape: CreateSystemTemplateOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceAlreadyExistsException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalFailureException
    }
  ]
};
