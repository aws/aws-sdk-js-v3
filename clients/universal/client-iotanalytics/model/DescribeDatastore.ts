import { DescribeDatastoreInput } from "./DescribeDatastoreInput";
import { DescribeDatastoreOutput } from "./DescribeDatastoreOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
