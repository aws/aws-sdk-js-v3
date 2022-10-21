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
  DescribeOptionGroupOptionsMessage,
  DescribeOptionGroupOptionsMessageFilterSensitiveLog,
  OptionGroupOptionsMessage,
  OptionGroupOptionsMessageFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_queryDescribeOptionGroupOptionsCommand,
  serializeAws_queryDescribeOptionGroupOptionsCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

export interface DescribeOptionGroupOptionsCommandInput extends DescribeOptionGroupOptionsMessage {}
export interface DescribeOptionGroupOptionsCommandOutput extends OptionGroupOptionsMessage, __MetadataBearer {}

/**
 * <p>Describes all available options.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeOptionGroupOptionsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeOptionGroupOptionsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DescribeOptionGroupOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeOptionGroupOptionsCommandInput} for command's `input` shape.
 * @see {@link DescribeOptionGroupOptionsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 */
export class DescribeOptionGroupOptionsCommand extends $Command<
  DescribeOptionGroupOptionsCommandInput,
  DescribeOptionGroupOptionsCommandOutput,
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

  constructor(readonly input: DescribeOptionGroupOptionsCommandInput) {
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
  ): Handler<DescribeOptionGroupOptionsCommandInput, DescribeOptionGroupOptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeOptionGroupOptionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DescribeOptionGroupOptionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeOptionGroupOptionsMessageFilterSensitiveLog,
      outputFilterSensitiveLog: OptionGroupOptionsMessageFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeOptionGroupOptionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeOptionGroupOptionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeOptionGroupOptionsCommandOutput> {
    return deserializeAws_queryDescribeOptionGroupOptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
