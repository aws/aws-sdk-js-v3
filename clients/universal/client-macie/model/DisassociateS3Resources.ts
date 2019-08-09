import { DisassociateS3ResourcesInput } from "./DisassociateS3ResourcesInput";
import { DisassociateS3ResourcesOutput } from "./DisassociateS3ResourcesOutput";
import { InvalidInputException } from "./InvalidInputException";
import { AccessDeniedException } from "./AccessDeniedException";
import { InternalException } from "./InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DisassociateS3Resources: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisassociateS3Resources",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisassociateS3ResourcesInput
  },
  output: {
    shape: DisassociateS3ResourcesOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: AccessDeniedException
    },
    {
      shape: InternalException
    }
  ]
};
