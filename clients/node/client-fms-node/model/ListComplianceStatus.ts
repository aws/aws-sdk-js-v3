import { ListComplianceStatusInput } from "./ListComplianceStatusInput";
import { ListComplianceStatusOutput } from "./ListComplianceStatusOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListComplianceStatus: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListComplianceStatus",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListComplianceStatusInput
  },
  output: {
    shape: ListComplianceStatusOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InternalErrorException
    }
  ]
};
