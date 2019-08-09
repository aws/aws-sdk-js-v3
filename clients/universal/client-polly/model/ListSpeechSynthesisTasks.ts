import { ListSpeechSynthesisTasksInput } from "./ListSpeechSynthesisTasksInput";
import { ListSpeechSynthesisTasksOutput } from "./ListSpeechSynthesisTasksOutput";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListSpeechSynthesisTasks: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListSpeechSynthesisTasks",
  http: {
    method: "GET",
    requestUri: "/v1/synthesisTasks"
  },
  input: {
    shape: ListSpeechSynthesisTasksInput
  },
  output: {
    shape: ListSpeechSynthesisTasksOutput
  },
  errors: [
    {
      shape: InvalidNextTokenException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
