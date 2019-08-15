import { DescribeNodeAssociationStatusInput } from "../shapes/DescribeNodeAssociationStatusInput";
import { DescribeNodeAssociationStatusOutput } from "../shapes/DescribeNodeAssociationStatusOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ValidationException } from "../shapes/ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeNodeAssociationStatus: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeNodeAssociationStatus",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeNodeAssociationStatusInput
  },
  output: {
    shape: DescribeNodeAssociationStatusOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ValidationException
    }
  ]
};
