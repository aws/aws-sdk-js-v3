// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { MediaStoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreClient";
import { PutCorsPolicyInput, PutCorsPolicyOutput } from "../models/models_0";
import { de_PutCorsPolicyCommand, se_PutCorsPolicyCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutCorsPolicyCommand}.
 */
export interface PutCorsPolicyCommandInput extends PutCorsPolicyInput {}
/**
 * @public
 *
 * The output of {@link PutCorsPolicyCommand}.
 */
export interface PutCorsPolicyCommandOutput extends PutCorsPolicyOutput, __MetadataBearer {}

/**
 * @public
 * <p>Sets the cross-origin resource sharing (CORS) configuration on a container so that
 *          the container can service cross-origin requests. For example, you might want to enable a
 *          request whose origin is http://www.example.com to access your AWS Elemental MediaStore
 *          container at my.example.container.com by using the browser's XMLHttpRequest
 *          capability.</p>
 *          <p>To enable CORS on a container, you attach a CORS policy to the container. In the CORS
 *          policy, you configure rules that identify origins and the HTTP methods that can be executed
 *          on your container. The policy can contain up to 398,000 characters. You can add up to 100
 *          rules to a CORS policy. If more than one rule applies, the service uses the first
 *          applicable rule listed.</p>
 *          <p>To learn more about CORS, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/cors-policy.html">Cross-Origin Resource Sharing (CORS) in AWS Elemental MediaStore</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreClient, PutCorsPolicyCommand } from "@aws-sdk/client-mediastore"; // ES Modules import
 * // const { MediaStoreClient, PutCorsPolicyCommand } = require("@aws-sdk/client-mediastore"); // CommonJS import
 * const client = new MediaStoreClient(config);
 * const input = { // PutCorsPolicyInput
 *   ContainerName: "STRING_VALUE", // required
 *   CorsPolicy: [ // CorsPolicy // required
 *     { // CorsRule
 *       AllowedOrigins: [ // AllowedOrigins // required
 *         "STRING_VALUE",
 *       ],
 *       AllowedMethods: [ // AllowedMethods
 *         "PUT" || "GET" || "DELETE" || "HEAD",
 *       ],
 *       AllowedHeaders: [ // AllowedHeaders // required
 *         "STRING_VALUE",
 *       ],
 *       MaxAgeSeconds: Number("int"),
 *       ExposeHeaders: [ // ExposeHeaders
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new PutCorsPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutCorsPolicyCommandInput - {@link PutCorsPolicyCommandInput}
 * @returns {@link PutCorsPolicyCommandOutput}
 * @see {@link PutCorsPolicyCommandInput} for command's `input` shape.
 * @see {@link PutCorsPolicyCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreClientResolvedConfig | config} for MediaStoreClient's `config` shape.
 *
 * @throws {@link ContainerInUseException} (client fault)
 *  <p>The container that you specified in the request already exists or is being
 *          updated.</p>
 *
 * @throws {@link ContainerNotFoundException} (client fault)
 *  <p>The container that you specified in the request does not exist.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link MediaStoreServiceException}
 * <p>Base exception class for all service exceptions from MediaStore service.</p>
 *
 */
export class PutCorsPolicyCommand extends $Command<
  PutCorsPolicyCommandInput,
  PutCorsPolicyCommandOutput,
  MediaStoreClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: PutCorsPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaStoreClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutCorsPolicyCommandInput, PutCorsPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, PutCorsPolicyCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaStoreClient";
    const commandName = "PutCorsPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "MediaStore_20170901",
        operation: "PutCorsPolicy",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: PutCorsPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutCorsPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutCorsPolicyCommandOutput> {
    return de_PutCorsPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
