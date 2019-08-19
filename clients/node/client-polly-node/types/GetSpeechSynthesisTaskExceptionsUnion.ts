import { InvalidTaskIdException } from "./InvalidTaskIdException";
import { ServiceFailureException } from "./ServiceFailureException";
import { SynthesisTaskNotFoundException } from "./SynthesisTaskNotFoundException";
export type GetSpeechSynthesisTaskExceptionsUnion =
  | InvalidTaskIdException
  | ServiceFailureException
  | SynthesisTaskNotFoundException;
