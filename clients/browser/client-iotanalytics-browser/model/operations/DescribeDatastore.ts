import { DescribeDatastoreInput } from "../shapes/DescribeDatastoreInput";
import { DescribeDatastoreOutput } from "../shapes/DescribeDatastoreOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeDatastore: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeDatastore",
  http: {
    method: "GET",
    requestUri: "/datastores/{datastoreName}"
  },
  input: {
    shape: DescribeDatastoreInput
  },
  output: {
    shape: DescribeDatastoreOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: ThrottlingException
    }
  ]
};
