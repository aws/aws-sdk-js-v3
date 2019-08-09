import { DiscoverInputSchemaInput } from "./DiscoverInputSchemaInput";
import { DiscoverInputSchemaOutput } from "./DiscoverInputSchemaOutput";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { UnableToDetectSchemaException } from "./UnableToDetectSchemaException";
import { ResourceProvisionedThroughputExceededException } from "./ResourceProvisionedThroughputExceededException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
