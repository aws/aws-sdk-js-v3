import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>This operation can't be completed either because the current account has reached the limit on reusable delegation sets that it can create or because you've reached the limit on the number of Amazon VPCs that you can associate with a private hosted zone. To get the current limit on the number of reusable delegation sets, see <a>GetAccountLimit</a>. To get the current limit on the number of Amazon VPCs that you can associate with a private hosted zone, see <a>GetHostedZoneLimit</a>. To request a higher limit, <a href="http://aws.amazon.com/route53-request">create a case</a> with the AWS Support Center.</p>
 */
export interface LimitsExceeded extends __ServiceException__<_LimitsExceededDetails> {
    name: 'LimitsExceeded';
}

export interface _LimitsExceededDetails {
    /**
     * <p>Descriptive message for the error response.</p>
     */
    message?: string;
}