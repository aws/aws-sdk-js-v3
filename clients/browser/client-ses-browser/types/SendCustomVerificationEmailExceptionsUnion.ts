import { MessageRejected } from "./MessageRejected";
import { ConfigurationSetDoesNotExistException } from "./ConfigurationSetDoesNotExistException";
import { CustomVerificationEmailTemplateDoesNotExistException } from "./CustomVerificationEmailTemplateDoesNotExistException";
import { FromEmailAddressNotVerifiedException } from "./FromEmailAddressNotVerifiedException";
import { ProductionAccessNotGrantedException } from "./ProductionAccessNotGrantedException";
export type SendCustomVerificationEmailExceptionsUnion =
  | MessageRejected
  | ConfigurationSetDoesNotExistException
  | CustomVerificationEmailTemplateDoesNotExistException
  | FromEmailAddressNotVerifiedException
  | ProductionAccessNotGrantedException;
