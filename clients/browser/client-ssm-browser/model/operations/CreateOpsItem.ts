import { CreateOpsItemInput } from "../shapes/CreateOpsItemInput";
import { CreateOpsItemOutput } from "../shapes/CreateOpsItemOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { OpsItemAlreadyExistsException } from "../shapes/OpsItemAlreadyExistsException";
import { OpsItemLimitExceededException } from "../shapes/OpsItemLimitExceededException";
import { OpsItemInvalidParameterException } from "../shapes/OpsItemInvalidParameterException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
