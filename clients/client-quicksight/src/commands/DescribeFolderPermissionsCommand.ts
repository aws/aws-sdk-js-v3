import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { DescribeFolderPermissionsRequest, DescribeFolderPermissionsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeFolderPermissionsCommand,
  serializeAws_restJson1DescribeFolderPermissionsCommand,
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

export interface DescribeFolderPermissionsCommandInput extends DescribeFolderPermissionsRequest {}
export interface DescribeFolderPermissionsCommandOutput extends DescribeFolderPermissionsResponse, __MetadataBearer {}

/**
 * <p>Describes permissions for a folder.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeFolderPermissionsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeFolderPermissionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DescribeFolderPermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFolderPermissionsCommandInput} for command's `input` shape.
 * @see {@link DescribeFolderPermissionsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeFolderPermissionsCommand extends $Command<
  DescribeFolderPermissionsCommandInput,
  DescribeFolderPermissionsCommandOutput,
  QuickSightClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeFolderPermissionsCommandInput) {
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
  ): Handler<DescribeFolderPermissionsCommandInput, DescribeFolderPermissionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "DescribeFolderPermissionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeFolderPermissionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeFolderPermissionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeFolderPermissionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeFolderPermissionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeFolderPermissionsCommandOutput> {
    return deserializeAws_restJson1DescribeFolderPermissionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
