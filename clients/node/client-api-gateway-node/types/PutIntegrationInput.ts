import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Sets up a method's integration.</p>
 */
export interface PutIntegrationInput {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string;

  /**
   * <p>[Required] Specifies a put integration request's resource ID.</p>
   */
  resourceId: string;

  /**
   * <p>[Required] Specifies a put integration request's HTTP method.</p>
   */
  httpMethod: string;

  /**
   * <p>[Required] Specifies a put integration input's type.</p>
   */
  type: "HTTP" | "AWS" | "MOCK" | "HTTP_PROXY" | "AWS_PROXY" | string;

  /**
   * <p>Specifies a put integration HTTP method. When the integration type is HTTP or AWS, this field is required.</p>
   */
  integrationHttpMethod?: string;

  /**
   * <p>Specifies Uniform Resource Identifier (URI) of the integration endpoint.</p> <ul> <li><p> For <code>HTTP</code> or <code>HTTP_PROXY</code> integrations, the URI must be a fully formed, encoded HTTP(S) URL according to the <a target="_blank" href="https://en.wikipedia.org/wiki/Uniform_Resource_Identifier">RFC-3986 specification</a>, for either standard integration, where <code>connectionType</code> is not <code>VPC_LINK</code>, or private integration, where <code>connectionType</code> is <code>VPC_LINK</code>. For a private HTTP integration, the URI is not used for routing. </p> </li> <li><p> For <code>AWS</code> or <code>AWS_PROXY</code> integrations, the URI is of the form <code>arn:aws:apigateway:{region}:{subdomain.service|service}:path|action/{service_api}</code>. Here, <code>{Region}</code> is the API Gateway region (e.g., <code>us-east-1</code>); <code>{service}</code> is the name of the integrated AWS service (e.g., <code>s3</code>); and <code>{subdomain}</code> is a designated subdomain supported by certain AWS service for fast host-name lookup. <code>action</code> can be used for an AWS service action-based API, using an <code>Action={name}&amp;{p1}={v1}&amp;p2={v2}...</code> query string. The ensuing <code>{service_api}</code> refers to a supported action <code>{name}</code> plus any required input parameters. Alternatively, <code>path</code> can be used for an AWS service path-based API. The ensuing <code>service_api</code> refers to the path to an AWS service resource, including the region of the integrated AWS service, if applicable. For example, for integration with the S3 API of <code><a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectGET.html">GetObject</a></code>, the <code>uri</code> can be either <code>arn:aws:apigateway:us-west-2:s3:action/GetObject&amp;Bucket={bucket}&amp;Key={key}</code> or <code>arn:aws:apigateway:us-west-2:s3:path/{bucket}/{key}</code></p> </li></ul>
   */
  uri?: string;

  /**
   * <p>The type of the network connection to the integration endpoint. The valid value is <code>INTERNET</code> for connections through the public routable internet or <code>VPC_LINK</code> for private connections between API Gateway and a network load balancer in a VPC. The default value is <code>INTERNET</code>.</p>
   */
  connectionType?: "INTERNET" | "VPC_LINK" | string;

  /**
   * <p>The (<a href="https://docs.aws.amazon.com/apigateway/api-reference/resource/vpc-link/#id"><code>id</code></a>) of the <a>VpcLink</a> used for the integration when <code>connectionType=VPC_LINK</code> and undefined, otherwise.</p>
   */
  connectionId?: string;

  /**
   * <p>Specifies whether credentials are required for a put integration.</p>
   */
  credentials?: string;

  /**
   * <p>A key-value map specifying request parameters that are passed from the method request to the back end. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the back end. The method request parameter value must match the pattern of <code>method.request.{location}.{name}</code>, where <code>location</code> is <code>querystring</code>, <code>path</code>, or <code>header</code> and <code>name</code> must be a valid and unique method request parameter name.</p>
   */
  requestParameters?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value.</p>
   */
  requestTemplates?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the <code>requestTemplates</code> property on the Integration resource. There are three valid values: <code>WHEN_NO_MATCH</code>, <code>WHEN_NO_TEMPLATES</code>, and <code>NEVER</code>. </p> <ul> <li><p><code>WHEN_NO_MATCH</code> passes the request body for unmapped content types through to the integration back end without transformation.</p></li> <li><p><code>NEVER</code> rejects unmapped content types with an HTTP 415 'Unsupported Media Type' response.</p></li> <li><p><code>WHEN_NO_TEMPLATES</code> allows pass-through when the integration has NO content types mapped to templates. However if there is at least one content type defined, unmapped content types will be rejected with the same 415 response.</p></li> </ul>
   */
  passthroughBehavior?: string;

  /**
   * <p>A list of request parameters whose values are to be cached.</p>
   */
  cacheNamespace?: string;

  /**
   * <p>An API-specific tag group of related cached parameters.</p>
   */
  cacheKeyParameters?: Array<string> | Iterable<string>;

  /**
   * <p>Specifies how to handle request payload content type conversions. Supported values are <code>CONVERT_TO_BINARY</code> and <code>CONVERT_TO_TEXT</code>, with the following behaviors:</p> <ul> <li><p><code>CONVERT_TO_BINARY</code>: Converts a request payload from a Base64-encoded string to the corresponding binary blob.</p></li> <li><p><code>CONVERT_TO_TEXT</code>: Converts a request payload from a binary blob to a Base64-encoded string.</p></li> </ul> <p>If this property is not defined, the request payload will be passed through from the method request to integration request without modification, provided that the <code>passthroughBehavior</code> is configured to support payload pass-through.</p>
   */
  contentHandling?: "CONVERT_TO_BINARY" | "CONVERT_TO_TEXT" | string;

  /**
   * <p>Custom timeout between 50 and 29,000 milliseconds. The default value is 29,000 milliseconds or 29 seconds.</p>
   */
  timeoutInMillis?: number;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
