import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request was rejected because the trust anchor certificate in the request is not the trust anchor certificate for the specified AWS CloudHSM cluster.</p> <p>When you <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/initialize-cluster.html#sign-csr">initialize the cluster</a>, you create the trust anchor certificate and save it in the <code>customerCA.crt</code> file.</p>
 */
export interface IncorrectTrustAnchorException
  extends __ServiceException__<_IncorrectTrustAnchorExceptionDetails> {
  name: "IncorrectTrustAnchorException";
}

export interface _IncorrectTrustAnchorExceptionDetails {
  /**
   * _ErrorMessageType shape
   */
  message?: string;
}
