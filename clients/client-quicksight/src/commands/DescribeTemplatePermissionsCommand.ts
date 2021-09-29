import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { DescribeTemplatePermissionsRequest, DescribeTemplatePermissionsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeTemplatePermissionsCommand,
  serializeAws_restJson1DescribeTemplatePermissionsCommand,
} from "../protocols/Aws_restJson1";
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

export interface DescribeTemplatePermissionsCommandInput extends DescribeTemplatePermissionsRequest {}
export interface DescribeTemplatePermissionsCommandOutput
  extends DescribeTemplatePermissionsResponse,
    __MetadataBearer {}

/**
 * <p>Describes read and write permissions on a template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeTemplatePermissionsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeTemplatePermissionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DescribeTemplatePermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTemplatePermissionsCommandInput} for command's `input` shape.
 * @see {@link DescribeTemplatePermissionsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeTemplatePermissionsCommand extends $Command<
  DescribeTemplatePermissionsCommandInput,
  DescribeTemplatePermissionsCommandOutput,
  QuickSightClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeTemplatePermissionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeTemplatePermissionsCommandInput, DescribeTemplatePermissionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "DescribeTemplatePermissionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeTemplatePermissionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeTemplatePermissionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeTemplatePermissionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeTemplatePermissionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeTemplatePermissionsCommandOutput> {
    return deserializeAws_restJson1DescribeTemplatePermissionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
