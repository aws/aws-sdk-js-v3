import { ListReceiptFiltersInput } from "../shapes/ListReceiptFiltersInput";
import { ListReceiptFiltersOutput } from "../shapes/ListReceiptFiltersOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListReceiptFilters: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListReceiptFilters",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListReceiptFiltersInput
  },
  output: {
    shape: ListReceiptFiltersOutput,
    resultWrapper: "ListReceiptFiltersResult"
  },
  errors: []
};
