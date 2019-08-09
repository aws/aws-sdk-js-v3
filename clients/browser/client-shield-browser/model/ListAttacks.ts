import { ListAttacksInput } from "./ListAttacksInput";
import { ListAttacksOutput } from "./ListAttacksOutput";
import { InternalErrorException } from "./InternalErrorException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidOperationException } from "./InvalidOperationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListAttacks: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListAttacks",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListAttacksInput
  },
  output: {
    shape: ListAttacksOutput
  },
  errors: [
    {
      shape: InternalErrorException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: InvalidOperationException
    }
  ]
};
