import { ListPublicKeysInput } from "./ListPublicKeysInput";
import { ListPublicKeysOutput } from "./ListPublicKeysOutput";
import { InvalidArgument } from "./InvalidArgument";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListPublicKeys2019_03_26: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListPublicKeys2019_03_26",
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
