import { ListRecordHistoryInput } from "./ListRecordHistoryInput";
import { ListRecordHistoryOutput } from "./ListRecordHistoryOutput";
import { InvalidParametersException } from "./InvalidParametersException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
