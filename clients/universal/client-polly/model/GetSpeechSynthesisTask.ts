import { GetSpeechSynthesisTaskInput } from "./GetSpeechSynthesisTaskInput";
import { GetSpeechSynthesisTaskOutput } from "./GetSpeechSynthesisTaskOutput";
import { InvalidTaskIdException } from "./InvalidTaskIdException";
import { ServiceFailureException } from "./ServiceFailureException";
import { SynthesisTaskNotFoundException } from "./SynthesisTaskNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetSpeechSynthesisTask: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetSpeechSynthesisTask",
  http: {
    method: "GET",
    requestUri: "/v1/synthesisTasks/{TaskId}"
  },
  input: {
    shape: GetSpeechSynthesisTaskInput
  },
  output: {
    shape: GetSpeechSynthesisTaskOutput
  },
  errors: [
    {
      shape: InvalidTaskIdException
    },
    {
      shape: ServiceFailureException
    },
    {
      shape: SynthesisTaskNotFoundException
    }
  ]
};
