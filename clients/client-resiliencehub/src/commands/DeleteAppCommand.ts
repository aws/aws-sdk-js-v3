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
  DeleteAppRequest,
  DeleteAppRequestFilterSensitiveLog,
  DeleteAppResponse,
  DeleteAppResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteAppCommand,
  serializeAws_restJson1DeleteAppCommand,
} from "../protocols/Aws_restJson1";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";

/**
 * The input for {@link DeleteAppCommand}.
 */
export interface DeleteAppCommandInput extends DeleteAppRequest {}
/**
 * The output of {@link DeleteAppCommand}.
 */
export interface DeleteAppCommandOutput extends DeleteAppResponse, __MetadataBearer {}

/**
 * <p>Deletes an AWS Resilience Hub application. This is a destructive action that can't be
 *       undone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, DeleteAppCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, DeleteAppCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * const client = new ResiliencehubClient(config);
 * const command = new DeleteAppCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAppCommandInput} for command's `input` shape.
 * @see {@link DeleteAppCommandOutput} for command's `response` shape.
 * @see {@link ResiliencehubClientResolvedConfig | config} for ResiliencehubClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This exception occurs when a conflict with a previous successful write is detected. This generally occurs
 *       when the previous write did not have time to propagate to the host serving the current
 *       request. A retry (with appropriate backoff logic) is the recommended response to this
 *       exception.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the AWS Resilience Hub
 *       service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception occurs when the specified resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This exception occurs when you have exceeded the limit on the number of requests per second.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>This exception occurs when a request is not valid.</p>
 *
 *
 */
export class DeleteAppCommand extends $Command<
  DeleteAppCommandInput,
  DeleteAppCommandOutput,
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

  constructor(readonly input: DeleteAppCommandInput) {
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
  ): Handler<DeleteAppCommandInput, DeleteAppCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteAppCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResiliencehubClient";
    const commandName = "DeleteAppCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteAppRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteAppResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteAppCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteAppCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteAppCommandOutput> {
    return deserializeAws_restJson1DeleteAppCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
