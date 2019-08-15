import { TestEventPatternInput } from "../shapes/TestEventPatternInput";
import { TestEventPatternOutput } from "../shapes/TestEventPatternOutput";
import { InvalidEventPatternException } from "../shapes/InvalidEventPatternException";
import { InternalException } from "../shapes/InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const TestEventPattern: _Operation_ = {
  metadata: ServiceMetadata,
  name: "TestEventPattern",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: TestEventPatternInput
  },
  output: {
    shape: TestEventPatternOutput
  },
  errors: [
    {
      shape: InvalidEventPatternException
    },
    {
      shape: InternalException
    }
  ]
};
