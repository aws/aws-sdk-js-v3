import { DescribeSchemasInput } from "../shapes/DescribeSchemasInput";
import { DescribeSchemasOutput } from "../shapes/DescribeSchemasOutput";
import { InvalidResourceStateFault } from "../shapes/InvalidResourceStateFault";
import { ResourceNotFoundFault } from "../shapes/ResourceNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeSchemas: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeSchemas",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeSchemasInput
  },
  output: {
    shape: DescribeSchemasOutput
  },
  errors: [
    {
      shape: InvalidResourceStateFault
    },
    {
      shape: ResourceNotFoundFault
    }
  ]
};
