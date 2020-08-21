import { SENSITIVE_STRING, SmithyException as __SmithyException, isa as __isa } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>
 *             Internal failure occurred.
 *         </p>
 */
export interface InternalFailure extends __SmithyException, $MetadataBearer {
  name: "InternalFailure";
  $fault: "server";
  Message?: string;
}

export namespace InternalFailure {
  export const filterSensitiveLog = (obj: InternalFailure): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InternalFailure => __isa(o, "InternalFailure");
}

export interface InvokeEndpointInput {
  __type?: "InvokeEndpointInput";
  /**
   * <p>The MIME type of the input data in the request body.</p>
   */
  ContentType?: string;

  /**
   * <p>Provides input data, in the format specified in the <code>ContentType</code>
   *             request header. Amazon SageMaker passes all of the data in the body to the model. </p>
   */
  Body: Uint8Array | undefined;

  /**
   * <p>The name of the endpoint that you specified when you created the endpoint using the
   *                 <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateEndpoint.html">CreateEndpoint</a> API. </p>
   */
  EndpointName: string | undefined;

  /**
   * <p>The desired MIME type of the inference in the response.</p>
   */
  Accept?: string;
}

export namespace InvokeEndpointInput {
  export const filterSensitiveLog = (obj: InvokeEndpointInput): any => ({
    ...obj,
    ...(obj.Body && { Body: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is InvokeEndpointInput => __isa(o, "InvokeEndpointInput");
}

export interface InvokeEndpointOutput {
  __type?: "InvokeEndpointOutput";
  /**
   * <p>Includes the inference provided by the model.</p>
   */
  Body: Uint8Array | undefined;

  /**
   * <p>Identifies the production variant that was invoked.</p>
   */
  InvokedProductionVariant?: string;

  /**
   * <p>The MIME type of the inference returned in the response body.</p>
   */
  ContentType?: string;
}

export namespace InvokeEndpointOutput {
  export const filterSensitiveLog = (obj: InvokeEndpointOutput): any => ({
    ...obj,
    ...(obj.Body && { Body: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is InvokeEndpointOutput => __isa(o, "InvokeEndpointOutput");
}

/**
 * <p>
 *             Model (owned by the customer in the container) returned an error 500.
 *         </p>
 */
export interface ModelError extends __SmithyException, $MetadataBearer {
  name: "ModelError";
  $fault: "client";
  /**
   * <p>
   *             Amazon Resource Name (ARN) of the log stream.
   *         </p>
   */
  LogStreamArn?: string;

  /**
   * <p>
   *             Original status code.
   *         </p>
   */
  OriginalStatusCode?: number;

  /**
   * <p>
   *             Original message.
   *         </p>
   */
  OriginalMessage?: string;

  Message?: string;
}

export namespace ModelError {
  export const filterSensitiveLog = (obj: ModelError): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ModelError => __isa(o, "ModelError");
}

/**
 * <p>
 *             Service is unavailable. Try your call again.
 *         </p>
 */
export interface ServiceUnavailable extends __SmithyException, $MetadataBearer {
  name: "ServiceUnavailable";
  $fault: "server";
  Message?: string;
}

export namespace ServiceUnavailable {
  export const filterSensitiveLog = (obj: ServiceUnavailable): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ServiceUnavailable => __isa(o, "ServiceUnavailable");
}

/**
 * <p>
 *             Inspect your request and try again.
 *
 *         </p>
 */
export interface ValidationError extends __SmithyException, $MetadataBearer {
  name: "ValidationError";
  $fault: "client";
  Message?: string;
}

export namespace ValidationError {
  export const filterSensitiveLog = (obj: ValidationError): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ValidationError => __isa(o, "ValidationError");
}
