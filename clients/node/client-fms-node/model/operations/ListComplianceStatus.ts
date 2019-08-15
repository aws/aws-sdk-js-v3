import { ListComplianceStatusInput } from "../shapes/ListComplianceStatusInput";
import { ListComplianceStatusOutput } from "../shapes/ListComplianceStatusOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
