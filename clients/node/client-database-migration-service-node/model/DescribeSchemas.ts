import { DescribeSchemasInput } from "./DescribeSchemasInput";
import { DescribeSchemasOutput } from "./DescribeSchemasOutput";
import { InvalidResourceStateFault } from "./InvalidResourceStateFault";
import { ResourceNotFoundFault } from "./ResourceNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
