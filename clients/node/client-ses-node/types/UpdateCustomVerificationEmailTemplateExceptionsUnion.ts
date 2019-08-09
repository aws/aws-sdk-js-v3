import { CustomVerificationEmailTemplateDoesNotExistException } from "./CustomVerificationEmailTemplateDoesNotExistException";
import { FromEmailAddressNotVerifiedException } from "./FromEmailAddressNotVerifiedException";
import { CustomVerificationEmailInvalidContentException } from "./CustomVerificationEmailInvalidContentException";
export type UpdateCustomVerificationEmailTemplateExceptionsUnion =
  | CustomVerificationEmailTemplateDoesNotExistException
  | FromEmailAddressNotVerifiedException
  | CustomVerificationEmailInvalidContentException;
