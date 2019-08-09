import { DescribeEventTrackerInput } from "./DescribeEventTrackerInput";
import { DescribeEventTrackerOutput } from "./DescribeEventTrackerOutput";
import { InvalidInputException } from "./InvalidInputException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeEventTracker: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeEventTracker",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeEventTrackerInput
  },
  output: {
    shape: DescribeEventTrackerOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
