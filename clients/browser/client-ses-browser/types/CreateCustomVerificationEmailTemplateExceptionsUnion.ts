import { CustomVerificationEmailTemplateAlreadyExistsException } from "./CustomVerificationEmailTemplateAlreadyExistsException";
import { FromEmailAddressNotVerifiedException } from "./FromEmailAddressNotVerifiedException";
import { CustomVerificationEmailInvalidContentException } from "./CustomVerificationEmailInvalidContentException";
import { LimitExceededException } from "./LimitExceededException";
export type CreateCustomVerificationEmailTemplateExceptionsUnion =
  | CustomVerificationEmailTemplateAlreadyExistsException
  | FromEmailAddressNotVerifiedException
  | CustomVerificationEmailInvalidContentException
  | LimitExceededException;
