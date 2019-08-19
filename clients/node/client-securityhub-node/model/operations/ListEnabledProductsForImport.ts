import { ListEnabledProductsForImportInput } from "../shapes/ListEnabledProductsForImportInput";
import { ListEnabledProductsForImportOutput } from "../shapes/ListEnabledProductsForImportOutput";
import { InternalException } from "../shapes/InternalException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InvalidAccessException } from "../shapes/InvalidAccessException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
