import { TestDNSAnswerInput } from "./TestDNSAnswerInput";
import { TestDNSAnswerOutput } from "./TestDNSAnswerOutput";
import { NoSuchHostedZone } from "./NoSuchHostedZone";
import { InvalidInput } from "./InvalidInput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const TestDNSAnswer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "TestDNSAnswer",
  http: {
    method: "GET",
    requestUri: "/2013-04-01/testdnsanswer"
  },
  input: {
    shape: TestDNSAnswerInput
  },
  output: {
    shape: TestDNSAnswerOutput
  },
  errors: [
    {
      shape: NoSuchHostedZone
    },
    {
      shape: InvalidInput
    }
  ]
};
