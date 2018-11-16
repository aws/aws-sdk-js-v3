/**
 * <p>The code for the Lambda function. You can specify either an S3 location, or upload a deployment package directly.</p>
 */
export interface _FunctionCode {
    /**
     * <p>The base64-encoded contents of your zip file containing your deployment package. AWS SDK and AWS CLI clients handle the encoding for you.</p>
     */
    ZipFile?: ArrayBuffer|ArrayBufferView|string;

    /**
     * <p>An Amazon S3 bucket in the same region as your function.</p>
     */
    S3Bucket?: string;

    /**
     * <p>The Amazon S3 key of the deployment package.</p>
     */
    S3Key?: string;

    /**
     * <p>For versioned objects, the version of the deployment package object to use.</p>
     */
    S3ObjectVersion?: string;
}

export interface _UnmarshalledFunctionCode extends _FunctionCode {
    /**
     * <p>The base64-encoded contents of your zip file containing your deployment package. AWS SDK and AWS CLI clients handle the encoding for you.</p>
     */
    ZipFile?: Uint8Array;
}