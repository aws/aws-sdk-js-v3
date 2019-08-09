import { ListQualificationTypesInput } from "./ListQualificationTypesInput";
import { ListQualificationTypesOutput } from "./ListQualificationTypesOutput";
import { ServiceFault } from "./ServiceFault";
import { RequestError } from "./RequestError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListQualificationTypes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListQualificationTypes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListQualificationTypesInput
  },
  output: {
    shape: ListQualificationTypesOutput
  },
  errors: [
    {
      shape: ServiceFault
    },
    {
      shape: RequestError
    }
  ]
};
