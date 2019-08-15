import { CreateStackSetInput } from "../shapes/CreateStackSetInput";
import { CreateStackSetOutput } from "../shapes/CreateStackSetOutput";
import { NameAlreadyExistsException } from "../shapes/NameAlreadyExistsException";
import { CreatedButModifiedException } from "../shapes/CreatedButModifiedException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateStackSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateStackSet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateStackSetInput
  },
  output: {
    shape: CreateStackSetOutput,
    resultWrapper: "CreateStackSetResult"
  },
  errors: [
    {
      shape: NameAlreadyExistsException
    },
    {
      shape: CreatedButModifiedException
    },
    {
      shape: LimitExceededException
    }
  ]
};
