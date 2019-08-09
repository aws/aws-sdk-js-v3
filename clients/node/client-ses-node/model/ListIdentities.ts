import { ListIdentitiesInput } from "./ListIdentitiesInput";
import { ListIdentitiesOutput } from "./ListIdentitiesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListIdentities: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListIdentities",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListIdentitiesInput
  },
  output: {
    shape: ListIdentitiesOutput,
    resultWrapper: "ListIdentitiesResult"
  },
  errors: []
};
