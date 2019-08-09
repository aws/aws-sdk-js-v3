import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified IAM user ARN is already registered with an on-premises instance.</p>
 */
export interface IamUserArnAlreadyRegisteredException
  extends __ServiceException__<_IamUserArnAlreadyRegisteredExceptionDetails> {
  name: "IamUserArnAlreadyRegisteredException";
}

export interface _IamUserArnAlreadyRegisteredExceptionDetails {}
