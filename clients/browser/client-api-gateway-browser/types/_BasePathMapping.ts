/**
 * <p>Represents the base path that callers of the API must provide as part of the URL after the domain name.</p> <div class="remarks">A custom domain name plus a <code>BasePathMapping</code> specification identifies a deployed <a>RestApi</a> in a given stage of the owner <a>Account</a>.</div> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains.html">Use Custom Domain Names</a> </div>
 */
export interface _BasePathMapping {
  /**
   * <p>The base path name that callers of the API must provide as part of the URL after the domain name.</p>
   */
  basePath?: string;

  /**
   * <p>The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId?: string;

  /**
   * <p>The name of the associated stage.</p>
   */
  stage?: string;
}

export type _UnmarshalledBasePathMapping = _BasePathMapping;
