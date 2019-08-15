import { ListAttacksInput } from "../shapes/ListAttacksInput";
import { ListAttacksOutput } from "../shapes/ListAttacksOutput";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InvalidOperationException } from "../shapes/InvalidOperationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
