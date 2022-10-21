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
  PartnerIntegrationInputMessage,
  PartnerIntegrationInputMessageFilterSensitiveLog,
  PartnerIntegrationOutputMessage,
  PartnerIntegrationOutputMessageFilterSensitiveLog,
} from "../models/models_0";
import { deserializeAws_queryAddPartnerCommand, serializeAws_queryAddPartnerCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

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
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 */
export class AddPartnerCommand extends $Command<
  AddPartnerCommandInput,
  AddPartnerCommandOutput,
  RedshiftClientResolvedConfig
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
    this.middlewareStack.use(getEndpointPlugin(configuration, AddPartnerCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "AddPartnerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PartnerIntegrationInputMessageFilterSensitiveLog,
      outputFilterSensitiveLog: PartnerIntegrationOutputMessageFilterSensitiveLog,
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
