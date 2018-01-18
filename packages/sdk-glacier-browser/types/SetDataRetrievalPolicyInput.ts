import {_DataRetrievalPolicy} from './_DataRetrievalPolicy';

/**
 * <p>SetDataRetrievalPolicy input.</p>
 */
export interface SetDataRetrievalPolicyInput {
    /**
     * <p>The <code>AccountId</code> value is the AWS account ID. This value must match the AWS account ID associated with the credentials used to sign the request. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you specify your account ID, do not include any hyphens ('-') in the ID.</p>
     */
    accountId: string;

    /**
     * <p>The data retrieval policy in JSON format.</p>
     */
    Policy?: _DataRetrievalPolicy;
}