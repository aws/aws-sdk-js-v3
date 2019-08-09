import { TestRenderTemplateInput } from "./TestRenderTemplateInput";
import { TestRenderTemplateOutput } from "./TestRenderTemplateOutput";
import { TemplateDoesNotExistException } from "./TemplateDoesNotExistException";
import { InvalidRenderingParameterException } from "./InvalidRenderingParameterException";
import { MissingRenderingAttributeException } from "./MissingRenderingAttributeException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
