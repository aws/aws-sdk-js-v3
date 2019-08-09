import { ListReceiptRuleSetsInput } from "./ListReceiptRuleSetsInput";
import { ListReceiptRuleSetsOutput } from "./ListReceiptRuleSetsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListReceiptRuleSets: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListReceiptRuleSets",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListReceiptRuleSetsInput
  },
  output: {
    shape: ListReceiptRuleSetsOutput,
    resultWrapper: "ListReceiptRuleSetsResult"
  },
  errors: []
};
