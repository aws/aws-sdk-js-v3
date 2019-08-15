import { DescribePlacementInput } from "../shapes/DescribePlacementInput";
import { DescribePlacementOutput } from "../shapes/DescribePlacementOutput";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
