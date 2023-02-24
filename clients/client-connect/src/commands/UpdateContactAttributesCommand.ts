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

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import {
  UpdateContactAttributesRequest,
  UpdateContactAttributesRequestFilterSensitiveLog,
  UpdateContactAttributesResponse,
  UpdateContactAttributesResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1UpdateContactAttributesCommand,
  serializeAws_restJson1UpdateContactAttributesCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateContactAttributesCommandInput extends UpdateContactAttributesRequest {}
export interface UpdateContactAttributesCommandOutput extends UpdateContactAttributesResponse, __MetadataBearer {}

/**
 * <p>Creates or updates
 *    user-defined contact attributes
 *    associated with the specified contact.</p>
 *          <p>You can create or update user-defined attributes for both ongoing and completed contacts.
 *    For example, while the call is active, you can update the customer's name or the reason the
 *    customer called. You can add notes about steps that the agent took during the call that display
 *    to the next agent that takes the call. You can also update attributes for a contact using data
 *    from your CRM application and save the data with the contact in Amazon Connect. You could
 *    also flag calls for additional analysis, such as legal review or to identify abusive
 *    callers.</p>
 *          <p>Contact attributes are available in Amazon Connect for 24 months, and are then deleted.
 *    For information about contact record retention and the maximum size of the contact record
 *    attributes section, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html#feature-limits">Feature
 *     specifications</a> in the <i>Amazon Connect Administrator Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateContactAttributesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateContactAttributesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new UpdateContactAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateContactAttributesCommandInput} for command's `input` shape.
 * @see {@link UpdateContactAttributesCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 */
export class UpdateContactAttributesCommand extends $Command<
  UpdateContactAttributesCommandInput,
  UpdateContactAttributesCommandOutput,
  ConnectClientResolvedConfig
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

  constructor(readonly input: UpdateContactAttributesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateContactAttributesCommandInput, UpdateContactAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateContactAttributesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "UpdateContactAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateContactAttributesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateContactAttributesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateContactAttributesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateContactAttributesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateContactAttributesCommandOutput> {
    return deserializeAws_restJson1UpdateContactAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
