import { DisassociateS3ResourcesInput } from "../shapes/DisassociateS3ResourcesInput";
import { DisassociateS3ResourcesOutput } from "../shapes/DisassociateS3ResourcesOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { InternalException } from "../shapes/InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
