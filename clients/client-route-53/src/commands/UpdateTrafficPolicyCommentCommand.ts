// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { UpdateTrafficPolicyCommentRequest, UpdateTrafficPolicyCommentResponse } from "../models/models_0";
import {
  deserializeAws_restXmlUpdateTrafficPolicyCommentCommand,
  serializeAws_restXmlUpdateTrafficPolicyCommentCommand,
} from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

/**
 * @public
 *
 * The input for {@link UpdateTrafficPolicyCommentCommand}.
 */
export interface UpdateTrafficPolicyCommentCommandInput extends UpdateTrafficPolicyCommentRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTrafficPolicyCommentCommand}.
 */
export interface UpdateTrafficPolicyCommentCommandOutput extends UpdateTrafficPolicyCommentResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates the comment for a specified traffic policy version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, UpdateTrafficPolicyCommentCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, UpdateTrafficPolicyCommentCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new UpdateTrafficPolicyCommentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateTrafficPolicyCommentCommandInput - {@link UpdateTrafficPolicyCommentCommandInput}
 * @returns {@link UpdateTrafficPolicyCommentCommandOutput}
 * @see {@link UpdateTrafficPolicyCommentCommandInput} for command's `input` shape.
 * @see {@link UpdateTrafficPolicyCommentCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link ConcurrentModification} (client fault)
 *  <p>Another user submitted a request to create, update, or delete the object at the same
 * 			time that you did. Retry the request. </p>
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link NoSuchTrafficPolicy} (client fault)
 *  <p>No traffic policy exists with the specified ID.</p>
 *
 *
 */
export class UpdateTrafficPolicyCommentCommand extends $Command<
  UpdateTrafficPolicyCommentCommandInput,
  UpdateTrafficPolicyCommentCommandOutput,
  Route53ClientResolvedConfig
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
  constructor(readonly input: UpdateTrafficPolicyCommentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateTrafficPolicyCommentCommandInput, UpdateTrafficPolicyCommentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateTrafficPolicyCommentCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "UpdateTrafficPolicyCommentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: UpdateTrafficPolicyCommentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlUpdateTrafficPolicyCommentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateTrafficPolicyCommentCommandOutput> {
    return deserializeAws_restXmlUpdateTrafficPolicyCommentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
