import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";
import { DescribeProtectionRequest, DescribeProtectionResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeProtectionCommand,
  serializeAws_json1_1DescribeProtectionCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface DescribeProtectionCommandInput extends DescribeProtectionRequest {}
export interface DescribeProtectionCommandOutput extends DescribeProtectionResponse, __MetadataBearer {}

/**
 * <p>Lists the details of a <a>Protection</a> object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, DescribeProtectionCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, DescribeProtectionCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const command = new DescribeProtectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeProtectionCommandInput} for command's `input` shape.
 * @see {@link DescribeProtectionCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeProtectionCommand extends $Command<
  DescribeProtectionCommandInput,
  DescribeProtectionCommandOutput,
  ShieldClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeProtectionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ShieldClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeProtectionCommandInput, DescribeProtectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ShieldClient";
    const commandName = "DescribeProtectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeProtectionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeProtectionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeProtectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeProtectionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeProtectionCommandOutput> {
    return deserializeAws_json1_1DescribeProtectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
