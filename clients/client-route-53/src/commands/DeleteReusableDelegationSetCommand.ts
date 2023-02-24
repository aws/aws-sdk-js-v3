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

import {
  DeleteReusableDelegationSetRequest,
  DeleteReusableDelegationSetRequestFilterSensitiveLog,
  DeleteReusableDelegationSetResponse,
  DeleteReusableDelegationSetResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restXmlDeleteReusableDelegationSetCommand,
  serializeAws_restXmlDeleteReusableDelegationSetCommand,
} from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

export interface DeleteReusableDelegationSetCommandInput extends DeleteReusableDelegationSetRequest {}
export interface DeleteReusableDelegationSetCommandOutput
  extends DeleteReusableDelegationSetResponse,
    __MetadataBearer {}

/**
 * <p>Deletes a reusable delegation set.</p>
 *          <important>
 *             <p>You can delete a reusable delegation set only if it isn't associated with any
 * 				hosted zones.</p>
 *          </important>
 *          <p>To verify that the reusable delegation set is not associated with any hosted zones,
 * 			submit a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetReusableDelegationSet.html">GetReusableDelegationSet</a> request and specify the ID of the reusable
 * 			delegation set that you want to delete.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, DeleteReusableDelegationSetCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, DeleteReusableDelegationSetCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new DeleteReusableDelegationSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteReusableDelegationSetCommandInput} for command's `input` shape.
 * @see {@link DeleteReusableDelegationSetCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 */
export class DeleteReusableDelegationSetCommand extends $Command<
  DeleteReusableDelegationSetCommandInput,
  DeleteReusableDelegationSetCommandOutput,
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

  constructor(readonly input: DeleteReusableDelegationSetCommandInput) {
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
  ): Handler<DeleteReusableDelegationSetCommandInput, DeleteReusableDelegationSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteReusableDelegationSetCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "DeleteReusableDelegationSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteReusableDelegationSetRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteReusableDelegationSetResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteReusableDelegationSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlDeleteReusableDelegationSetCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteReusableDelegationSetCommandOutput> {
    return deserializeAws_restXmlDeleteReusableDelegationSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
