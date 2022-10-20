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
  DescribeEventSourcesConfigRequest,
  DescribeEventSourcesConfigRequestFilterSensitiveLog,
  DescribeEventSourcesConfigResponse,
  DescribeEventSourcesConfigResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeEventSourcesConfigCommand,
  serializeAws_restJson1DescribeEventSourcesConfigCommand,
} from "../protocols/Aws_restJson1";

export interface DescribeEventSourcesConfigCommandInput extends DescribeEventSourcesConfigRequest {}
export interface DescribeEventSourcesConfigCommandOutput extends DescribeEventSourcesConfigResponse, __MetadataBearer {}

/**
 * <p>Returns the integration status of services that are integrated with DevOps Guru as Consumer
 * 			via EventBridge. The one service that can be integrated with DevOps Guru is Amazon CodeGuru
 * 			Profiler, which can produce proactive recommendations which can be stored and viewed in
 * 			DevOps Guru.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, DescribeEventSourcesConfigCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, DescribeEventSourcesConfigCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const command = new DescribeEventSourcesConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEventSourcesConfigCommandInput} for command's `input` shape.
 * @see {@link DescribeEventSourcesConfigCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for DevOpsGuruClient's `config` shape.
 *
 */
export class DescribeEventSourcesConfigCommand extends $Command<
  DescribeEventSourcesConfigCommandInput,
  DescribeEventSourcesConfigCommandOutput,
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

  constructor(readonly input: DescribeEventSourcesConfigCommandInput) {
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
  ): Handler<DescribeEventSourcesConfigCommandInput, DescribeEventSourcesConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeEventSourcesConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DevOpsGuruClient";
    const commandName = "DescribeEventSourcesConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeEventSourcesConfigRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeEventSourcesConfigResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeEventSourcesConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeEventSourcesConfigCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeEventSourcesConfigCommandOutput> {
    return deserializeAws_restJson1DescribeEventSourcesConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
