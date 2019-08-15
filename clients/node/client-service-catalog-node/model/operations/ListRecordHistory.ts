import { ListRecordHistoryInput } from "../shapes/ListRecordHistoryInput";
import { ListRecordHistoryOutput } from "../shapes/ListRecordHistoryOutput";
import { InvalidParametersException } from "../shapes/InvalidParametersException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListRecordHistory: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListRecordHistory",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListRecordHistoryInput
  },
  output: {
    shape: ListRecordHistoryOutput
  },
  errors: [
    {
      shape: InvalidParametersException
    }
  ]
};
