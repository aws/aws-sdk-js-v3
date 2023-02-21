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
  DeleteAppVersionAppComponentRequest,
  DeleteAppVersionAppComponentRequestFilterSensitiveLog,
  DeleteAppVersionAppComponentResponse,
  DeleteAppVersionAppComponentResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteAppVersionAppComponentCommand,
  serializeAws_restJson1DeleteAppVersionAppComponentCommand,
} from "../protocols/Aws_restJson1";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";

export interface DeleteAppVersionAppComponentCommandInput extends DeleteAppVersionAppComponentRequest {}
export interface DeleteAppVersionAppComponentCommandOutput
  extends DeleteAppVersionAppComponentResponse,
    __MetadataBearer {}

/**
 * <p>Deletes an Application Component from the AWS Resilience Hub application.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>This API updates the AWS Resilience Hub application draft version. To use this Application Component for running assessments, you must publish the AWS Resilience Hub application using the <code>PublishAppVersion</code> API.</p>
 *                </li>
 *                <li>
 *                   <p>You will not be able to delete an Application Component if it has resources associated with it.</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, DeleteAppVersionAppComponentCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, DeleteAppVersionAppComponentCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * const client = new ResiliencehubClient(config);
 * const command = new DeleteAppVersionAppComponentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAppVersionAppComponentCommandInput} for command's `input` shape.
 * @see {@link DeleteAppVersionAppComponentCommandOutput} for command's `response` shape.
 * @see {@link ResiliencehubClientResolvedConfig | config} for ResiliencehubClient's `config` shape.
 *
 */
export class DeleteAppVersionAppComponentCommand extends $Command<
  DeleteAppVersionAppComponentCommandInput,
  DeleteAppVersionAppComponentCommandOutput,
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

  constructor(readonly input: DeleteAppVersionAppComponentCommandInput) {
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
  ): Handler<DeleteAppVersionAppComponentCommandInput, DeleteAppVersionAppComponentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteAppVersionAppComponentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResiliencehubClient";
    const commandName = "DeleteAppVersionAppComponentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteAppVersionAppComponentRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteAppVersionAppComponentResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteAppVersionAppComponentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteAppVersionAppComponentCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteAppVersionAppComponentCommandOutput> {
    return deserializeAws_restJson1DeleteAppVersionAppComponentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
