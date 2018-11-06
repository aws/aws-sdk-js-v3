/**
 * _CORSRule shape
 */
export interface _CORSRule {
    /**
     * <p>Specifies which headers are allowed in a pre-flight OPTIONS request.</p>
     */
    AllowedHeaders?: Array<string>|Iterable<string>;

    /**
     * <p>Identifies HTTP methods that the domain/origin specified in the rule is allowed to execute.</p>
     */
    AllowedMethods: Array<string>|Iterable<string>;

    /**
     * <p>One or more origins you want customers to be able to access the bucket from.</p>
     */
    AllowedOrigins: Array<string>|Iterable<string>;

    /**
     * <p>One or more headers in the response that you want customers to be able to access from their applications (for example, from a JavaScript XMLHttpRequest object).</p>
     */
    ExposeHeaders?: Array<string>|Iterable<string>;

    /**
     * <p>The time in seconds that your browser is to cache the preflight response for the specified resource.</p>
     */
    MaxAgeSeconds?: number;
}

export interface _UnmarshalledCORSRule extends _CORSRule {
    /**
     * <p>Specifies which headers are allowed in a pre-flight OPTIONS request.</p>
     */
    AllowedHeaders?: Array<string>;

    /**
     * <p>Identifies HTTP methods that the domain/origin specified in the rule is allowed to execute.</p>
     */
    AllowedMethods: Array<string>;

    /**
     * <p>One or more origins you want customers to be able to access the bucket from.</p>
     */
    AllowedOrigins: Array<string>;

    /**
     * <p>One or more headers in the response that you want customers to be able to access from their applications (for example, from a JavaScript XMLHttpRequest object).</p>
     */
    ExposeHeaders?: Array<string>;
}