import { UpdateOpsItemInput } from "./UpdateOpsItemInput";
import { UpdateOpsItemOutput } from "./UpdateOpsItemOutput";
import { InternalServerError } from "./InternalServerError";
import { OpsItemNotFoundException } from "./OpsItemNotFoundException";
import { OpsItemAlreadyExistsException } from "./OpsItemAlreadyExistsException";
import { OpsItemLimitExceededException } from "./OpsItemLimitExceededException";
import { OpsItemInvalidParameterException } from "./OpsItemInvalidParameterException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateOpsItem: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateOpsItem",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateOpsItemInput
  },
  output: {
    shape: UpdateOpsItemOutput
  },
  errors: [
    {
      shape: InternalServerError
    },
    {
      shape: OpsItemNotFoundException
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
