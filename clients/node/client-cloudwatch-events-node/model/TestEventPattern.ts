import { TestEventPatternInput } from "./TestEventPatternInput";
import { TestEventPatternOutput } from "./TestEventPatternOutput";
import { InvalidEventPatternException } from "./InvalidEventPatternException";
import { InternalException } from "./InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
