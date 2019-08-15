import { DefineIndexFieldInput } from "../shapes/DefineIndexFieldInput";
import { DefineIndexFieldOutput } from "../shapes/DefineIndexFieldOutput";
import { BaseException } from "../shapes/BaseException";
import { InternalException } from "../shapes/InternalException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InvalidTypeException } from "../shapes/InvalidTypeException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DefineIndexField: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DefineIndexField",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DefineIndexFieldInput
  },
  output: {
    shape: DefineIndexFieldOutput,
    resultWrapper: "DefineIndexFieldResult"
  },
  errors: [
    {
      shape: BaseException
    },
    {
      shape: InternalException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InvalidTypeException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
