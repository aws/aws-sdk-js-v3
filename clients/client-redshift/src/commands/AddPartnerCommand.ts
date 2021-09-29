import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { PartnerIntegrationInputMessage, PartnerIntegrationOutputMessage } from "../models/models_0";
import { deserializeAws_queryAddPartnerCommand, serializeAws_queryAddPartnerCommand } from "../protocols/Aws_query";
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

export interface AddPartnerCommandInput extends PartnerIntegrationInputMessage {}
export interface AddPartnerCommandOutput extends PartnerIntegrationOutputMessage, __MetadataBearer {}

/**
 * <p>Adds a partner integration to a cluster.
 *             This operation authorizes a partner to push status updates for the specified database.
 *             To complete the integration, you also set up the integration on the partner website.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, AddPartnerCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, AddPartnerCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new AddPartnerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddPartnerCommandInput} for command's `input` shape.
 * @see {@link AddPartnerCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class AddPartnerCommand extends $Command<
  AddPartnerCommandInput,
  AddPartnerCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AddPartnerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AddPartnerCommandInput, AddPartnerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "AddPartnerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PartnerIntegrationInputMessage.filterSensitiveLog,
      outputFilterSensitiveLog: PartnerIntegrationOutputMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AddPartnerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryAddPartnerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddPartnerCommandOutput> {
    return deserializeAws_queryAddPartnerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
