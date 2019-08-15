import { UpdateOpsItemInput } from "../shapes/UpdateOpsItemInput";
import { UpdateOpsItemOutput } from "../shapes/UpdateOpsItemOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { OpsItemNotFoundException } from "../shapes/OpsItemNotFoundException";
import { OpsItemAlreadyExistsException } from "../shapes/OpsItemAlreadyExistsException";
import { OpsItemLimitExceededException } from "../shapes/OpsItemLimitExceededException";
import { OpsItemInvalidParameterException } from "../shapes/OpsItemInvalidParameterException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
