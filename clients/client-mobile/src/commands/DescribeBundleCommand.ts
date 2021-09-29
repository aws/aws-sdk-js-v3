import { MobileClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MobileClient";
import { DescribeBundleRequest, DescribeBundleResult } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeBundleCommand,
  serializeAws_restJson1DescribeBundleCommand,
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

export interface DescribeBundleCommandInput extends DescribeBundleRequest {}
export interface DescribeBundleCommandOutput extends DescribeBundleResult, __MetadataBearer {}

/**
 * <p>
 *             Get the bundle details for the requested bundle id.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MobileClient, DescribeBundleCommand } from "@aws-sdk/client-mobile"; // ES Modules import
 * // const { MobileClient, DescribeBundleCommand } = require("@aws-sdk/client-mobile"); // CommonJS import
 * const client = new MobileClient(config);
 * const command = new DescribeBundleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBundleCommandInput} for command's `input` shape.
 * @see {@link DescribeBundleCommandOutput} for command's `response` shape.
 * @see {@link MobileClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeBundleCommand extends $Command<
  DescribeBundleCommandInput,
  DescribeBundleCommandOutput,
  MobileClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeBundleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MobileClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeBundleCommandInput, DescribeBundleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MobileClient";
    const commandName = "DescribeBundleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeBundleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeBundleResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeBundleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeBundleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeBundleCommandOutput> {
    return deserializeAws_restJson1DescribeBundleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
