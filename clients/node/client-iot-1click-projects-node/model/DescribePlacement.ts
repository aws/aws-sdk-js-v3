import { DescribePlacementInput } from "./DescribePlacementInput";
import { DescribePlacementOutput } from "./DescribePlacementOutput";
import { InternalFailureException } from "./InternalFailureException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribePlacement: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribePlacement",
  http: {
    method: "GET",
    requestUri: "/projects/{projectName}/placements/{placementName}"
  },
  input: {
    shape: DescribePlacementInput
  },
  output: {
    shape: DescribePlacementOutput
  },
  errors: [
    {
      shape: InternalFailureException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
