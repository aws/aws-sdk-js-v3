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

import { DrsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DrsClient";
import {
  DescribeRecoveryInstancesRequest,
  DescribeRecoveryInstancesRequestFilterSensitiveLog,
  DescribeRecoveryInstancesResponse,
  DescribeRecoveryInstancesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeRecoveryInstancesCommand,
  serializeAws_restJson1DescribeRecoveryInstancesCommand,
} from "../protocols/Aws_restJson1";

export interface DescribeRecoveryInstancesCommandInput extends DescribeRecoveryInstancesRequest {}
export interface DescribeRecoveryInstancesCommandOutput extends DescribeRecoveryInstancesResponse, __MetadataBearer {}

/**
 * <p>Lists all Recovery Instances or multiple Recovery Instances by ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, DescribeRecoveryInstancesCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, DescribeRecoveryInstancesCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * const client = new DrsClient(config);
 * const command = new DescribeRecoveryInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRecoveryInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeRecoveryInstancesCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 */
export class DescribeRecoveryInstancesCommand extends $Command<
  DescribeRecoveryInstancesCommandInput,
  DescribeRecoveryInstancesCommandOutput,
  DrsClientResolvedConfig
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

  constructor(readonly input: DescribeRecoveryInstancesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DrsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeRecoveryInstancesCommandInput, DescribeRecoveryInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeRecoveryInstancesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DrsClient";
    const commandName = "DescribeRecoveryInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeRecoveryInstancesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeRecoveryInstancesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeRecoveryInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeRecoveryInstancesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeRecoveryInstancesCommandOutput> {
    return deserializeAws_restJson1DescribeRecoveryInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
