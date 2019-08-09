import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request included an IAM session ARN that has already been used to register a different instance.</p>
 */
export interface IamSessionArnAlreadyRegisteredException
  extends __ServiceException__<
    _IamSessionArnAlreadyRegisteredExceptionDetails
  > {
  name: "IamSessionArnAlreadyRegisteredException";
}

export interface _IamSessionArnAlreadyRegisteredExceptionDetails {}
