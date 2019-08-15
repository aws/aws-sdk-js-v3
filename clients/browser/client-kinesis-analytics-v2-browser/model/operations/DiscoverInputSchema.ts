import { DiscoverInputSchemaInput } from "../shapes/DiscoverInputSchemaInput";
import { DiscoverInputSchemaOutput } from "../shapes/DiscoverInputSchemaOutput";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { UnableToDetectSchemaException } from "../shapes/UnableToDetectSchemaException";
import { ResourceProvisionedThroughputExceededException } from "../shapes/ResourceProvisionedThroughputExceededException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DiscoverInputSchema: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DiscoverInputSchema",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DiscoverInputSchemaInput
  },
  output: {
    shape: DiscoverInputSchemaOutput
  },
  errors: [
    {
      shape: InvalidArgumentException
    },
    {
      shape: UnableToDetectSchemaException
    },
    {
      shape: ResourceProvisionedThroughputExceededException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: InvalidRequestException
    }
  ]
};
