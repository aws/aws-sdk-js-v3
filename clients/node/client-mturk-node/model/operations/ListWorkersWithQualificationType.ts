import { ListWorkersWithQualificationTypeInput } from "../shapes/ListWorkersWithQualificationTypeInput";
import { ListWorkersWithQualificationTypeOutput } from "../shapes/ListWorkersWithQualificationTypeOutput";
import { ServiceFault } from "../shapes/ServiceFault";
import { RequestError } from "../shapes/RequestError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListWorkersWithQualificationType: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListWorkersWithQualificationType",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListWorkersWithQualificationTypeInput
  },
  output: {
    shape: ListWorkersWithQualificationTypeOutput
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
