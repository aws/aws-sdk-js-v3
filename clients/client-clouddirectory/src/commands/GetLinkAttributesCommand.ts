import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { GetLinkAttributesRequest, GetLinkAttributesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetLinkAttributesCommand,
  serializeAws_restJson1GetLinkAttributesCommand,
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

export interface GetLinkAttributesCommandInput extends GetLinkAttributesRequest {}
export interface GetLinkAttributesCommandOutput extends GetLinkAttributesResponse, __MetadataBearer {}

/**
 * <p>Retrieves attributes that are associated with a typed link.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, GetLinkAttributesCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, GetLinkAttributesCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new GetLinkAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLinkAttributesCommandInput} for command's `input` shape.
 * @see {@link GetLinkAttributesCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetLinkAttributesCommand extends $Command<
  GetLinkAttributesCommandInput,
  GetLinkAttributesCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetLinkAttributesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudDirectoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetLinkAttributesCommandInput, GetLinkAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudDirectoryClient";
    const commandName = "GetLinkAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetLinkAttributesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetLinkAttributesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetLinkAttributesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetLinkAttributesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetLinkAttributesCommandOutput> {
    return deserializeAws_restJson1GetLinkAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
