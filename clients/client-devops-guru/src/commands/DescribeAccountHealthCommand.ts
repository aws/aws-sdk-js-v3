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
  DescribeAccountHealthRequest,
  DescribeAccountHealthRequestFilterSensitiveLog,
  DescribeAccountHealthResponse,
  DescribeAccountHealthResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeAccountHealthCommand,
  serializeAws_restJson1DescribeAccountHealthCommand,
} from "../protocols/Aws_restJson1";

export interface DescribeAccountHealthCommandInput extends DescribeAccountHealthRequest {}
export interface DescribeAccountHealthCommandOutput extends DescribeAccountHealthResponse, __MetadataBearer {}

/**
 * <p> Returns the number of open reactive insights, the number of open proactive insights,
 * 			and the number of metrics analyzed in your Amazon Web Services account. Use these numbers to gauge the
 * 			health of operations in your Amazon Web Services account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, DescribeAccountHealthCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, DescribeAccountHealthCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const command = new DescribeAccountHealthCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAccountHealthCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountHealthCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for DevOpsGuruClient's `config` shape.
 *
 */
export class DescribeAccountHealthCommand extends $Command<
  DescribeAccountHealthCommandInput,
  DescribeAccountHealthCommandOutput,
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

  constructor(readonly input: DescribeAccountHealthCommandInput) {
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
  ): Handler<DescribeAccountHealthCommandInput, DescribeAccountHealthCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAccountHealthCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DevOpsGuruClient";
    const commandName = "DescribeAccountHealthCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAccountHealthRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeAccountHealthResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAccountHealthCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeAccountHealthCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAccountHealthCommandOutput> {
    return deserializeAws_restJson1DescribeAccountHealthCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
