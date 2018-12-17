import {_InputSerialization, _UnmarshalledInputSerialization} from './_InputSerialization';
import {_OutputSerialization, _UnmarshalledOutputSerialization} from './_OutputSerialization';

/**
 * <p>Contains information about the parameters used for a select.</p>
 */
export interface _SelectParameters {
    /**
     * <p>Describes the serialization format of the object.</p>
     */
    InputSerialization?: _InputSerialization;

    /**
     * <p>The type of the provided expression, for example <code>SQL</code>.</p>
     */
    ExpressionType?: 'SQL'|string;

    /**
     * <p>The expression that is used to select the object.</p>
     */
    Expression?: string;

    /**
     * <p>Describes how the results of the select job are serialized.</p>
     */
    OutputSerialization?: _OutputSerialization;
}

export interface _UnmarshalledSelectParameters extends _SelectParameters {
    /**
     * <p>Describes the serialization format of the object.</p>
     */
    InputSerialization?: _UnmarshalledInputSerialization;

    /**
     * <p>Describes how the results of the select job are serialized.</p>
     */
    OutputSerialization?: _UnmarshalledOutputSerialization;
}