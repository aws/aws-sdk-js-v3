// smithy-typescript generated code
/**
 * @public
 */
export interface InvokeInferenceRouterInput {
  /**
   * <p>The name of the inference router to invoke.</p>
   * @public
   */
  InferenceRouterName: string | undefined;

  /**
   * <p>The name of the routing target in the inference router. The routing target lists the destinations that can serve the request.</p>
   * @public
   */
  RoutingTargetName: string | undefined;

  /**
   * <p>The MIME type of the input data in the request body. The router passes it to the destination.</p>
   * @public
   */
  ContentType?: string | undefined;

  /**
   * <p>The MIME type that you want for the inference response. The router passes it to the destination.</p>
   * @public
   */
  Accept?: string | undefined;

  /**
   * <p>An identifier for the inference request. The router passes it to the destination.</p>
   * @public
   */
  InferenceId?: string | undefined;

  /**
   * <p>An optional, stable identifier that serves as a routing hint for prefix-aware routing. The router passes it to the destination that serves the request. Within that destination, requests with the same prefix and the same identifier go to the same instance. If requests from different applications might have the same prompt prefix, set a different identifier for each application to differentiate their routing decisions.</p> <p>Applies only to destination endpoints configured with a <code>RoutingStrategy</code> of <code>PREFIX_AWARE</code>.</p>
   * @public
   */
  PrefixAwareId?: string | undefined;

  /**
   * <p>Provides additional information about the inference request. The value is an opaque string that the router passes, unchanged, to the model container of the destination that serves the request. The value can contain up to 1,024 visible US-ASCII characters.</p>
   * @public
   */
  CustomAttributes?: string | undefined;

  /**
   * <p>The input data for the inference, in the format that your model expects. The body can't be empty.</p>
   * @public
   */
  Body: Uint8Array | undefined;
}

/**
 * @public
 */
export interface InvokeInferenceRouterOutput {
  /**
   * <p>The inference that the model returned.</p>
   * @public
   */
  Body?: Uint8Array | undefined;

  /**
   * <p>The MIME type of the inference returned in the response body.</p>
   * @public
   */
  ContentType?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint or inference component that served the request.</p>
   * @public
   */
  InvokedRoutedResourceArn?: string | undefined;

  /**
   * <p>The reason that the router chose the destination that served the request. Possible values:</p> <ul> <li> <p> <code>local-preferred</code> – The destination is a healthy destination in the router's Region.</p> </li> <li> <p> <code>capacity-available</code> – No destination in the router's Region could take the request, and two or more destinations in other Regions could.</p> </li> <li> <p> <code>only-healthy</code> – No destination in the router's Region could take the request, and exactly one destination in another Region could.</p> </li> <li> <p> <code>failover</code> – The router moved the request away from destinations in its Region because they were overloaded or returning errors. You also see this value when the router can't assess destination health, and when no destination is healthy and the router tries one anyway.</p> </li> </ul>
   * @public
   */
  RoutingReason?: string | undefined;

  /**
   * <p>The production variant of the destination endpoint that served the request.</p>
   * @public
   */
  InvokedProductionVariant?: string | undefined;

  /**
   * <p>Provides additional information in the response about the inference. This is the value that the model container of the destination returned, unchanged.</p>
   * @public
   */
  CustomAttributes?: string | undefined;
}

/**
 * @public
 */
export interface InvokeInferenceRouterAsyncInput {
  /**
   * <p>The name of the inference router to invoke.</p>
   * @public
   */
  InferenceRouterName: string | undefined;

  /**
   * <p>The name of the routing target in the inference router. The routing target must be configured for asynchronous inference.</p>
   * @public
   */
  RoutingTargetName: string | undefined;

  /**
   * <p>The MIME type of the input data in Amazon S3. The router passes it to the destination.</p>
   * @public
   */
  ContentType?: string | undefined;

  /**
   * <p>The MIME type that you want for the inference response. The router passes it to the destination.</p>
   * @public
   */
  Accept?: string | undefined;

  /**
   * <p>Provides additional information about the inference request. The value is an opaque string that the router passes, unchanged, to the model container of the destination that serves the request. The value can contain up to 1,024 visible US-ASCII characters.</p>
   * @public
   */
  CustomAttributes?: string | undefined;

  /**
   * <p>An identifier for the inference request. If you don't provide one, SageMaker AI generates one and returns it in the response.</p>
   * @public
   */
  InferenceId?: string | undefined;

  /**
   * <p>The Amazon S3 URI of the object that contains the input data for the inference. The bucket must be in the inference router's Amazon Web Services Region and owned by the router's account. The destination endpoint's execution role reads the object, and the destination's asynchronous inference limits apply to it.</p>
   * @public
   */
  InputLocation: string | undefined;

  /**
   * <p>The path extension that is appended to the routing target's Amazon S3 output path where the inference response is stored.</p>
   * @public
   */
  S3OutputPathExtension?: string | undefined;

  /**
   * <p>The file name of the inference response stored in Amazon S3. If you don't provide one, SageMaker AI generates one.</p>
   * @public
   */
  Filename?: string | undefined;

  /**
   * <p>The time to live of the request, in seconds, measured from when the router accepts it. If no destination starts the request in this time, the request fails. The default is 21,600 seconds (6 hours).</p>
   * @public
   */
  RequestTTLSeconds?: number | undefined;

  /**
   * <p>The maximum time, in seconds, that a destination can spend processing the request before the request is marked as expired. The default is 900 seconds (15 minutes).</p>
   * @public
   */
  InvocationTimeoutSeconds?: number | undefined;
}

/**
 * @public
 */
export interface InvokeInferenceRouterAsyncOutput {
  /**
   * <p>The identifier for the inference request. This is the <code>InferenceId</code> that you provided, or the one that SageMaker AI generated.</p>
   * @public
   */
  InferenceId?: string | undefined;

  /**
   * <p>The Amazon S3 URI where the inference response is written. The location doesn't change if the router moves the request to another destination.</p>
   * @public
   */
  OutputLocation?: string | undefined;

  /**
   * <p>The Amazon S3 URI where the failure details are written if the inference fails.</p>
   * @public
   */
  FailureLocation?: string | undefined;
}
