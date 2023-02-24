// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
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
  DeleteAppVersionResourceRequest,
  DeleteAppVersionResourceRequestFilterSensitiveLog,
  DeleteAppVersionResourceResponse,
  DeleteAppVersionResourceResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteAppVersionResourceCommand,
  serializeAws_restJson1DeleteAppVersionResourceCommand,
} from "../protocols/Aws_restJson1";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";

export interface DeleteAppVersionResourceCommandInput extends DeleteAppVersionResourceRequest {}
export interface DeleteAppVersionResourceCommandOutput extends DeleteAppVersionResourceResponse, __MetadataBearer {}

/**
 * <p>Deletes a resource from the AWS Resilience Hub application.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>You can only delete a manually added resource. To exclude non-manually added resources, use the <code>UpdateAppVersionResource</code> API.</p>
 *                </li>
 *                <li>
 *                   <p>This action has no effect outside AWS Resilience Hub.</p>
 *                </li>
 *                <li>
 *                   <p>This API updates the AWS Resilience Hub application draft version. To use this resource for running resiliency assessments, you must publish the AWS Resilience Hub application using the <code>PublishAppVersion</code> API.</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, DeleteAppVersionResourceCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, DeleteAppVersionResourceCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * const client = new ResiliencehubClient(config);
 * const command = new DeleteAppVersionResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAppVersionResourceCommandInput} for command's `input` shape.
 * @see {@link DeleteAppVersionResourceCommandOutput} for command's `response` shape.
 * @see {@link ResiliencehubClientResolvedConfig | config} for ResiliencehubClient's `config` shape.
 *
 */
export class DeleteAppVersionResourceCommand extends $Command<
  DeleteAppVersionResourceCommandInput,
  DeleteAppVersionResourceCommandOutput,
  ResiliencehubClientResolvedConfig
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

  constructor(readonly input: DeleteAppVersionResourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ResiliencehubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteAppVersionResourceCommandInput, DeleteAppVersionResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteAppVersionResourceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResiliencehubClient";
    const commandName = "DeleteAppVersionResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteAppVersionResourceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteAppVersionResourceResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteAppVersionResourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteAppVersionResourceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteAppVersionResourceCommandOutput> {
    return deserializeAws_restJson1DeleteAppVersionResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
