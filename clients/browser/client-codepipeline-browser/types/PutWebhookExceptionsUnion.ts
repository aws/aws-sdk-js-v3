import { ValidationException } from "./ValidationException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidWebhookFilterPatternException } from "./InvalidWebhookFilterPatternException";
import { InvalidWebhookAuthenticationParametersException } from "./InvalidWebhookAuthenticationParametersException";
import { PipelineNotFoundException } from "./PipelineNotFoundException";
import { TooManyTagsException } from "./TooManyTagsException";
import { InvalidTagsException } from "./InvalidTagsException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
export type PutWebhookExceptionsUnion =
  | ValidationException
  | LimitExceededException
  | InvalidWebhookFilterPatternException
  | InvalidWebhookAuthenticationParametersException
  | PipelineNotFoundException
  | TooManyTagsException
  | InvalidTagsException
  | ConcurrentModificationException;
