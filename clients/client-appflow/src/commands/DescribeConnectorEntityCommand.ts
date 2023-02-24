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

import { AppflowClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppflowClient";
import {
  DescribeConnectorEntityRequest,
  DescribeConnectorEntityRequestFilterSensitiveLog,
  DescribeConnectorEntityResponse,
  DescribeConnectorEntityResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeConnectorEntityCommand,
  serializeAws_restJson1DescribeConnectorEntityCommand,
} from "../protocols/Aws_restJson1";

export interface DescribeConnectorEntityCommandInput extends DescribeConnectorEntityRequest {}
export interface DescribeConnectorEntityCommandOutput extends DescribeConnectorEntityResponse, __MetadataBearer {}

/**
 * <p> Provides details regarding the entity used with the connector, with a description of the
 *       data model for each field in that entity. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppflowClient, DescribeConnectorEntityCommand } from "@aws-sdk/client-appflow"; // ES Modules import
 * // const { AppflowClient, DescribeConnectorEntityCommand } = require("@aws-sdk/client-appflow"); // CommonJS import
 * const client = new AppflowClient(config);
 * const command = new DescribeConnectorEntityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeConnectorEntityCommandInput} for command's `input` shape.
 * @see {@link DescribeConnectorEntityCommandOutput} for command's `response` shape.
 * @see {@link AppflowClientResolvedConfig | config} for AppflowClient's `config` shape.
 *
 */
export class DescribeConnectorEntityCommand extends $Command<
  DescribeConnectorEntityCommandInput,
  DescribeConnectorEntityCommandOutput,
  AppflowClientResolvedConfig
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

  constructor(readonly input: DescribeConnectorEntityCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppflowClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeConnectorEntityCommandInput, DescribeConnectorEntityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeConnectorEntityCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppflowClient";
    const commandName = "DescribeConnectorEntityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeConnectorEntityRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeConnectorEntityResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeConnectorEntityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeConnectorEntityCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeConnectorEntityCommandOutput> {
    return deserializeAws_restJson1DescribeConnectorEntityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
