import { DefineIndexFieldInput } from "./DefineIndexFieldInput";
import { DefineIndexFieldOutput } from "./DefineIndexFieldOutput";
import { BaseException } from "./BaseException";
import { InternalException } from "./InternalException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidTypeException } from "./InvalidTypeException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
