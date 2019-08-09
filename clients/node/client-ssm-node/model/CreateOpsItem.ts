import { CreateOpsItemInput } from "./CreateOpsItemInput";
import { CreateOpsItemOutput } from "./CreateOpsItemOutput";
import { InternalServerError } from "./InternalServerError";
import { OpsItemAlreadyExistsException } from "./OpsItemAlreadyExistsException";
import { OpsItemLimitExceededException } from "./OpsItemLimitExceededException";
import { OpsItemInvalidParameterException } from "./OpsItemInvalidParameterException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateOpsItem: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateOpsItem",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateOpsItemInput
  },
  output: {
    shape: CreateOpsItemOutput
  },
  errors: [
    {
      shape: InternalServerError
    },
    {
      shape: OpsItemAlreadyExistsException
    },
    {
      shape: OpsItemLimitExceededException
    },
    {
      shape: OpsItemInvalidParameterException
    }
  ]
};
