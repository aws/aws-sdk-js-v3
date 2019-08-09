import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request could not be fulfilled because the non-AWS identity provider (IDP) that was asked to verify the incoming identity token could not be reached. This is often a transient error caused by network conditions. Retry the request a limited number of times so that you don't exceed the request rate. If the error persists, the non-AWS identity provider might be down or not responding.</p>
 */
export interface IDPCommunicationErrorException
  extends __ServiceException__<_IDPCommunicationErrorExceptionDetails> {
  name: "IDPCommunicationErrorException";
}

export interface _IDPCommunicationErrorExceptionDetails {
  /**
   * _idpCommunicationErrorMessage shape
   */
  message?: string;
}
