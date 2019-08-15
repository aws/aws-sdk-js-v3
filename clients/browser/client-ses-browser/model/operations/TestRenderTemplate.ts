import { TestRenderTemplateInput } from "../shapes/TestRenderTemplateInput";
import { TestRenderTemplateOutput } from "../shapes/TestRenderTemplateOutput";
import { TemplateDoesNotExistException } from "../shapes/TemplateDoesNotExistException";
import { InvalidRenderingParameterException } from "../shapes/InvalidRenderingParameterException";
import { MissingRenderingAttributeException } from "../shapes/MissingRenderingAttributeException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const TestRenderTemplate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "TestRenderTemplate",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: TestRenderTemplateInput
  },
  output: {
    shape: TestRenderTemplateOutput,
    resultWrapper: "TestRenderTemplateResult"
  },
  errors: [
    {
      shape: TemplateDoesNotExistException
    },
    {
      shape: InvalidRenderingParameterException
    },
    {
      shape: MissingRenderingAttributeException
    }
  ]
};
