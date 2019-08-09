/**
 * <p>A complex type that contains a Lambda function association.</p>
 */
export interface _LambdaFunctionAssociation {
  /**
   * <p>The ARN of the Lambda function. You must specify the ARN of a function version; you can't specify a Lambda alias or $LATEST.</p>
   */
  LambdaFunctionARN: string;

  /**
   * <p>Specifies the event type that triggers a Lambda function invocation. You can specify the following values:</p> <ul> <li> <p> <code>viewer-request</code>: The function executes when CloudFront receives a request from a viewer and before it checks to see whether the requested object is in the edge cache. </p> </li> <li> <p> <code>origin-request</code>: The function executes only when CloudFront forwards a request to your origin. When the requested object is in the edge cache, the function doesn't execute.</p> </li> <li> <p> <code>origin-response</code>: The function executes after CloudFront receives a response from the origin and before it caches the object in the response. When the requested object is in the edge cache, the function doesn't execute.</p> </li> <li> <p> <code>viewer-response</code>: The function executes before CloudFront returns the requested object to the viewer. The function executes regardless of whether the object was already in the edge cache.</p> <p>If the origin returns an HTTP status code other than HTTP 200 (OK), the function doesn't execute.</p> </li> </ul>
   */
  EventType:
    | "viewer-request"
    | "viewer-response"
    | "origin-request"
    | "origin-response"
    | string;

  /**
   * <p>A flag that allows a Lambda function to have read access to the body content. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-include-body-access.html">Accessing the Request Body by Choosing the Include Body Option</a> in the Amazon CloudFront Developer Guide.</p>
   */
  IncludeBody?: boolean;
}

export type _UnmarshalledLambdaFunctionAssociation = _LambdaFunctionAssociation;
