import { ListPublicKeysInput } from "./ListPublicKeysInput";
import { ListPublicKeysOutput } from "./ListPublicKeysOutput";
import { InvalidTimeRangeException } from "./InvalidTimeRangeException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { InvalidTokenException } from "./InvalidTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
