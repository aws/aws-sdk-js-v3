import { ListEnabledProductsForImportInput } from "./ListEnabledProductsForImportInput";
import { ListEnabledProductsForImportOutput } from "./ListEnabledProductsForImportOutput";
import { InternalException } from "./InternalException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidAccessException } from "./InvalidAccessException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListEnabledProductsForImport: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListEnabledProductsForImport",
  http: {
    method: "GET",
    requestUri: "/productSubscriptions"
  },
  input: {
    shape: ListEnabledProductsForImportInput
  },
  output: {
    shape: ListEnabledProductsForImportOutput
  },
  errors: [
    {
      shape: InternalException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InvalidAccessException
    }
  ]
};
