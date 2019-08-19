import { GetSpeechSynthesisTaskInput } from "../shapes/GetSpeechSynthesisTaskInput";
import { GetSpeechSynthesisTaskOutput } from "../shapes/GetSpeechSynthesisTaskOutput";
import { InvalidTaskIdException } from "../shapes/InvalidTaskIdException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { SynthesisTaskNotFoundException } from "../shapes/SynthesisTaskNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
