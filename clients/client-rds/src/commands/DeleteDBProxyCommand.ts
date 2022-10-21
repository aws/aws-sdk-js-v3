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
  DeleteDBProxyRequest,
  DeleteDBProxyRequestFilterSensitiveLog,
  DeleteDBProxyResponse,
  DeleteDBProxyResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDeleteDBProxyCommand,
  serializeAws_queryDeleteDBProxyCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

export interface DeleteDBProxyCommandInput extends DeleteDBProxyRequest {}
export interface DeleteDBProxyCommandOutput extends DeleteDBProxyResponse, __MetadataBearer {}

/**
 * <p>Deletes an existing DB proxy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DeleteDBProxyCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DeleteDBProxyCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DeleteDBProxyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDBProxyCommandInput} for command's `input` shape.
 * @see {@link DeleteDBProxyCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 */
export class DeleteDBProxyCommand extends $Command<
  DeleteDBProxyCommandInput,
  DeleteDBProxyCommandOutput,
  RDSClientResolvedConfig
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

  constructor(readonly input: DeleteDBProxyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteDBProxyCommandInput, DeleteDBProxyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteDBProxyCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DeleteDBProxyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteDBProxyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteDBProxyResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteDBProxyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteDBProxyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteDBProxyCommandOutput> {
    return deserializeAws_queryDeleteDBProxyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
