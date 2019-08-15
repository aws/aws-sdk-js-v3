import { DescribeStateMachineInput } from "../shapes/DescribeStateMachineInput";
import { DescribeStateMachineOutput } from "../shapes/DescribeStateMachineOutput";
import { InvalidArn } from "../shapes/InvalidArn";
import { StateMachineDoesNotExist } from "../shapes/StateMachineDoesNotExist";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeStateMachine: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeStateMachine",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeStateMachineInput
  },
  output: {
    shape: DescribeStateMachineOutput
  },
  errors: [
    {
      shape: InvalidArn
    },
    {
      shape: StateMachineDoesNotExist
    }
  ]
};
