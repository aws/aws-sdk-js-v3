import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { NotFoundException } from "./NotFoundException";
export type GetDomainDeliverabilityCampaignExceptionsUnion =
  | TooManyRequestsException
  | BadRequestException
  | NotFoundException;
