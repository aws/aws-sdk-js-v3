import { ListPublicKeysInput } from "../shapes/ListPublicKeysInput";
import { ListPublicKeysOutput } from "../shapes/ListPublicKeysOutput";
import { InvalidTimeRangeException } from "../shapes/InvalidTimeRangeException";
import { UnsupportedOperationException } from "../shapes/UnsupportedOperationException";
import { OperationNotPermittedException } from "../shapes/OperationNotPermittedException";
import { InvalidTokenException } from "../shapes/InvalidTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListPublicKeys: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListPublicKeys",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListPublicKeysInput
  },
  output: {
    shape: ListPublicKeysOutput
  },
  errors: [
    {
      shape: InvalidTimeRangeException
    },
    {
      shape: UnsupportedOperationException
    },
    {
      shape: OperationNotPermittedException
    },
    {
      shape: InvalidTokenException
    }
  ]
};
