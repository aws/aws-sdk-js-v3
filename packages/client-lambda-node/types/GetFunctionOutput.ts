import {_UnmarshalledFunctionConfiguration} from './_FunctionConfiguration';
import {_UnmarshalledFunctionCodeLocation} from './_FunctionCodeLocation';
import {_UnmarshalledConcurrency} from './_Concurrency';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * <p>This response contains the object for the Lambda function location (see <a>FunctionCodeLocation</a>.</p>
 */
export interface GetFunctionOutput {
    /**
     * <p>The function's configuration.</p>
     */
    Configuration?: _UnmarshalledFunctionConfiguration;

    /**
     * <p>The function's code.</p>
     */
    Code?: _UnmarshalledFunctionCodeLocation;

    /**
     * <p>Returns the list of tags associated with the function. For more information, see <a href="http://docs.aws.amazon.com/lambda/latest/dg/tagging.html">Tagging Lambda Functions</a> in the <b>AWS Lambda Developer Guide</b>.</p>
     */
    Tags?: {[key: string]: string};

    /**
     * <p>The concurrent execution limit set for this function. For more information, see <a href="http://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html">Managing Concurrency</a>.</p>
     */
    Concurrency?: _UnmarshalledConcurrency;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
