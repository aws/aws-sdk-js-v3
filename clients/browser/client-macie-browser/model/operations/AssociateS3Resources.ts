import { AssociateS3ResourcesInput } from "../shapes/AssociateS3ResourcesInput";
import { AssociateS3ResourcesOutput } from "../shapes/AssociateS3ResourcesOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalException } from "../shapes/InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AssociateS3Resources: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AssociateS3Resources",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AssociateS3ResourcesInput
  },
  output: {
    shape: AssociateS3ResourcesOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: AccessDeniedException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InternalException
    }
  ]
};
