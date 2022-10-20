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

import { DevOpsGuruClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsGuruClient";
import {
  DescribeInsightRequest,
  DescribeInsightRequestFilterSensitiveLog,
  DescribeInsightResponse,
  DescribeInsightResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeInsightCommand,
  serializeAws_restJson1DescribeInsightCommand,
} from "../protocols/Aws_restJson1";

export interface DescribeInsightCommandInput extends DescribeInsightRequest {}
export interface DescribeInsightCommandOutput extends DescribeInsightResponse, __MetadataBearer {}

/**
 * <p> Returns details about an insight that you specify using its ID. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, DescribeInsightCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, DescribeInsightCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const command = new DescribeInsightCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInsightCommandInput} for command's `input` shape.
 * @see {@link DescribeInsightCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for DevOpsGuruClient's `config` shape.
 *
 */
export class DescribeInsightCommand extends $Command<
  DescribeInsightCommandInput,
  DescribeInsightCommandOutput,
  DevOpsGuruClientResolvedConfig
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

  constructor(readonly input: DescribeInsightCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DevOpsGuruClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeInsightCommandInput, DescribeInsightCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeInsightCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DevOpsGuruClient";
    const commandName = "DescribeInsightCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeInsightRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeInsightResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeInsightCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeInsightCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeInsightCommandOutput> {
    return deserializeAws_restJson1DescribeInsightCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
