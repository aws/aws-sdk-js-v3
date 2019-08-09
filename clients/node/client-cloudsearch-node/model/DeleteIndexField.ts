import { DeleteIndexFieldInput } from "./DeleteIndexFieldInput";
import { DeleteIndexFieldOutput } from "./DeleteIndexFieldOutput";
import { BaseException } from "./BaseException";
import { InternalException } from "./InternalException";
import { InvalidTypeException } from "./InvalidTypeException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteIndexField: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteIndexField",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteIndexFieldInput
  },
  output: {
    shape: DeleteIndexFieldOutput,
    resultWrapper: "DeleteIndexFieldResult"
  },
  errors: [
    {
      shape: BaseException
    },
    {
      shape: InternalException
    },
    {
      shape: InvalidTypeException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
