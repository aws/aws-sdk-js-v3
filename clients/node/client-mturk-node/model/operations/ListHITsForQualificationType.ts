import { ListHITsForQualificationTypeInput } from "../shapes/ListHITsForQualificationTypeInput";
import { ListHITsForQualificationTypeOutput } from "../shapes/ListHITsForQualificationTypeOutput";
import { ServiceFault } from "../shapes/ServiceFault";
import { RequestError } from "../shapes/RequestError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListHITsForQualificationType: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListHITsForQualificationType",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListHITsForQualificationTypeInput
  },
  output: {
    shape: ListHITsForQualificationTypeOutput
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
