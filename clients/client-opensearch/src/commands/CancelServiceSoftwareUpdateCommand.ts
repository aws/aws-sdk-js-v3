import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { CancelServiceSoftwareUpdateRequest, CancelServiceSoftwareUpdateResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CancelServiceSoftwareUpdateCommand,
  serializeAws_restJson1CancelServiceSoftwareUpdateCommand,
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

export interface CancelServiceSoftwareUpdateCommandInput extends CancelServiceSoftwareUpdateRequest {}
export interface CancelServiceSoftwareUpdateCommandOutput
  extends CancelServiceSoftwareUpdateResponse,
    __MetadataBearer {}

/**
 * <p>Cancels a scheduled service software update for an Amazon OpenSearch Service domain. You can only perform this operation before
 *       the <code>AutomatedUpdateDate</code> and when the <code>UpdateStatus</code> is in the <code>PENDING_UPDATE</code> state.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, CancelServiceSoftwareUpdateCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, CancelServiceSoftwareUpdateCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const command = new CancelServiceSoftwareUpdateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelServiceSoftwareUpdateCommandInput} for command's `input` shape.
 * @see {@link CancelServiceSoftwareUpdateCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CancelServiceSoftwareUpdateCommand extends $Command<
  CancelServiceSoftwareUpdateCommandInput,
  CancelServiceSoftwareUpdateCommandOutput,
  OpenSearchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CancelServiceSoftwareUpdateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpenSearchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CancelServiceSoftwareUpdateCommandInput, CancelServiceSoftwareUpdateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpenSearchClient";
    const commandName = "CancelServiceSoftwareUpdateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CancelServiceSoftwareUpdateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CancelServiceSoftwareUpdateResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CancelServiceSoftwareUpdateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CancelServiceSoftwareUpdateCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CancelServiceSoftwareUpdateCommandOutput> {
    return deserializeAws_restJson1CancelServiceSoftwareUpdateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
