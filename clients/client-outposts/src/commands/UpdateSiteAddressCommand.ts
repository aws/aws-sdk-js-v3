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
  UpdateSiteAddressInput,
  UpdateSiteAddressInputFilterSensitiveLog,
  UpdateSiteAddressOutput,
  UpdateSiteAddressOutputFilterSensitiveLog,
} from "../models/models_0";
import { OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OutpostsClient";
import {
  deserializeAws_restJson1UpdateSiteAddressCommand,
  serializeAws_restJson1UpdateSiteAddressCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateSiteAddressCommandInput extends UpdateSiteAddressInput {}
export interface UpdateSiteAddressCommandOutput extends UpdateSiteAddressOutput, __MetadataBearer {}

/**
 * <p>Updates the address of the specified site.</p>
 *          <p>You can't update a site address if there is an order in progress. You must wait for the order
 *       to complete or cancel the order.</p>
 *          <p>You can update the operating address before you place an order at the
 *       site, or after all Outposts that belong to the site have been deactivated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, UpdateSiteAddressCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, UpdateSiteAddressCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * const client = new OutpostsClient(config);
 * const command = new UpdateSiteAddressCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSiteAddressCommandInput} for command's `input` shape.
 * @see {@link UpdateSiteAddressCommandOutput} for command's `response` shape.
 * @see {@link OutpostsClientResolvedConfig | config} for OutpostsClient's `config` shape.
 *
 */
export class UpdateSiteAddressCommand extends $Command<
  UpdateSiteAddressCommandInput,
  UpdateSiteAddressCommandOutput,
  OutpostsClientResolvedConfig
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

  constructor(readonly input: UpdateSiteAddressCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OutpostsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateSiteAddressCommandInput, UpdateSiteAddressCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateSiteAddressCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OutpostsClient";
    const commandName = "UpdateSiteAddressCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateSiteAddressInputFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateSiteAddressOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateSiteAddressCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateSiteAddressCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateSiteAddressCommandOutput> {
    return deserializeAws_restJson1UpdateSiteAddressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
