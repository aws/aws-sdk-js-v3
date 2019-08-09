import { CreateStackSetInput } from "./CreateStackSetInput";
import { CreateStackSetOutput } from "./CreateStackSetOutput";
import { NameAlreadyExistsException } from "./NameAlreadyExistsException";
import { CreatedButModifiedException } from "./CreatedButModifiedException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
