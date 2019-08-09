import { ListActivityTypesInput } from "./ListActivityTypesInput";
import { ListActivityTypesOutput } from "./ListActivityTypesOutput";
import { OperationNotPermittedFault } from "./OperationNotPermittedFault";
import { UnknownResourceFault } from "./UnknownResourceFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
