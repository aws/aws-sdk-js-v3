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

import { AppRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppRunnerClient";
import {
  DeleteVpcConnectorRequest,
  DeleteVpcConnectorRequestFilterSensitiveLog,
  DeleteVpcConnectorResponse,
  DeleteVpcConnectorResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0DeleteVpcConnectorCommand,
  serializeAws_json1_0DeleteVpcConnectorCommand,
} from "../protocols/Aws_json1_0";

export interface DeleteVpcConnectorCommandInput extends DeleteVpcConnectorRequest {}
export interface DeleteVpcConnectorCommandOutput extends DeleteVpcConnectorResponse, __MetadataBearer {}

/**
 * <p>Delete an App Runner VPC connector resource. You can't delete a
 *       connector that's used by one or more App Runner services.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, DeleteVpcConnectorCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, DeleteVpcConnectorCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * const client = new AppRunnerClient(config);
 * const command = new DeleteVpcConnectorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVpcConnectorCommandInput} for command's `input` shape.
 * @see {@link DeleteVpcConnectorCommandOutput} for command's `response` shape.
 * @see {@link AppRunnerClientResolvedConfig | config} for AppRunnerClient's `config` shape.
 *
 */
export class DeleteVpcConnectorCommand extends $Command<
  DeleteVpcConnectorCommandInput,
  DeleteVpcConnectorCommandOutput,
  AppRunnerClientResolvedConfig
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

  constructor(readonly input: DeleteVpcConnectorCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppRunnerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteVpcConnectorCommandInput, DeleteVpcConnectorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteVpcConnectorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppRunnerClient";
    const commandName = "DeleteVpcConnectorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteVpcConnectorRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteVpcConnectorResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteVpcConnectorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0DeleteVpcConnectorCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteVpcConnectorCommandOutput> {
    return deserializeAws_json1_0DeleteVpcConnectorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
