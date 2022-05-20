// smithy-typescript generated code
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
import { ListContactReferencesRequest, ListContactReferencesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListContactReferencesCommand,
  serializeAws_restJson1ListContactReferencesCommand,
} from "../protocols/Aws_restJson1";

export interface ListContactReferencesCommandInput extends ListContactReferencesRequest {}
export interface ListContactReferencesCommandOutput extends ListContactReferencesResponse, __MetadataBearer {}

/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>For the specified <code>referenceTypes</code>, returns a list of references associated with
 *    the contact. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListContactReferencesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListContactReferencesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new ListContactReferencesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListContactReferencesCommandInput} for command's `input` shape.
 * @see {@link ListContactReferencesCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 */
export class ListContactReferencesCommand extends $Command<
  ListContactReferencesCommandInput,
  ListContactReferencesCommandOutput,
  ConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListContactReferencesCommandInput) {
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
  ): Handler<ListContactReferencesCommandInput, ListContactReferencesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "ListContactReferencesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListContactReferencesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListContactReferencesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListContactReferencesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListContactReferencesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListContactReferencesCommandOutput> {
    return deserializeAws_restJson1ListContactReferencesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
