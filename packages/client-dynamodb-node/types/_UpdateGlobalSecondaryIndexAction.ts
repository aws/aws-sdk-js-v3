import {_ProvisionedThroughput, _UnmarshalledProvisionedThroughput} from './_ProvisionedThroughput';

/**
 * <p>Represents the new provisioned throughput settings to be applied to a global secondary index.</p>
 */
export interface _UpdateGlobalSecondaryIndexAction {
    /**
     * <p>The name of the global secondary index to be updated.</p>
     */
    IndexName: string;

    /**
     * <p>Represents the provisioned throughput settings for the specified global secondary index.</p> <p>For current minimum and maximum provisioned throughput values, see <a href="http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Limits</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
     */
    ProvisionedThroughput: _ProvisionedThroughput;
}

export interface _UnmarshalledUpdateGlobalSecondaryIndexAction extends _UpdateGlobalSecondaryIndexAction {
    /**
     * <p>Represents the provisioned throughput settings for the specified global secondary index.</p> <p>For current minimum and maximum provisioned throughput values, see <a href="http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Limits</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
     */
    ProvisionedThroughput: _UnmarshalledProvisionedThroughput;
}