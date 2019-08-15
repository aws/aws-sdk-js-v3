import { ListActivityTypesInput } from "../shapes/ListActivityTypesInput";
import { ListActivityTypesOutput } from "../shapes/ListActivityTypesOutput";
import { OperationNotPermittedFault } from "../shapes/OperationNotPermittedFault";
import { UnknownResourceFault } from "../shapes/UnknownResourceFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListActivityTypes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListActivityTypes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListActivityTypesInput
  },
  output: {
    shape: ListActivityTypesOutput
  },
  errors: [
    {
      shape: OperationNotPermittedFault
    },
    {
      shape: UnknownResourceFault
    }
  ]
};
