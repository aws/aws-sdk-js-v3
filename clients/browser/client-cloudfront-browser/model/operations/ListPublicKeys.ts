import { ListPublicKeysInput } from "../shapes/ListPublicKeysInput";
import { ListPublicKeysOutput } from "../shapes/ListPublicKeysOutput";
import { InvalidArgument } from "../shapes/InvalidArgument";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListPublicKeys: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListPublicKeys",
  http: {
    method: "GET",
    requestUri: "/2019-03-26/public-key"
  },
  input: {
    shape: ListPublicKeysInput
  },
  output: {
    shape: ListPublicKeysOutput
  },
  errors: [
    {
      shape: InvalidArgument
    }
  ]
};
