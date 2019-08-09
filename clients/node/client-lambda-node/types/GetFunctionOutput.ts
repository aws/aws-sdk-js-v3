import { _UnmarshalledFunctionConfiguration } from "./_FunctionConfiguration";
import { _UnmarshalledFunctionCodeLocation } from "./_FunctionCodeLocation";
import { _UnmarshalledConcurrency } from "./_Concurrency";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetFunctionOutput shape
 */
export interface GetFunctionOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The configuration of the function or version.</p>
   */
  Configuration?: _UnmarshalledFunctionConfiguration;

  /**
   * <p>The deployment package of the function or version.</p>
   */
  Code?: _UnmarshalledFunctionCodeLocation;

  /**
   * <p>The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a>.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html">reserved concurrency</a>.</p>
   */
  Concurrency?: _UnmarshalledConcurrency;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
