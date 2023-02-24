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
  ListVerifiedEmailAddressesResponse,
  ListVerifiedEmailAddressesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryListVerifiedEmailAddressesCommand,
  serializeAws_queryListVerifiedEmailAddressesCommand,
} from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

export interface ListVerifiedEmailAddressesCommandInput {}
export interface ListVerifiedEmailAddressesCommandOutput extends ListVerifiedEmailAddressesResponse, __MetadataBearer {}

/**
 * <p>Deprecated. Use the <code>ListIdentities</code> operation to list the email addresses
 *             and domains associated with your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, ListVerifiedEmailAddressesCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, ListVerifiedEmailAddressesCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const command = new ListVerifiedEmailAddressesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListVerifiedEmailAddressesCommandInput} for command's `input` shape.
 * @see {@link ListVerifiedEmailAddressesCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 */
export class ListVerifiedEmailAddressesCommand extends $Command<
  ListVerifiedEmailAddressesCommandInput,
  ListVerifiedEmailAddressesCommandOutput,
  SESClientResolvedConfig
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

  constructor(readonly input: ListVerifiedEmailAddressesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListVerifiedEmailAddressesCommandInput, ListVerifiedEmailAddressesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListVerifiedEmailAddressesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "ListVerifiedEmailAddressesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (input: any) => input,
      outputFilterSensitiveLog: ListVerifiedEmailAddressesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListVerifiedEmailAddressesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListVerifiedEmailAddressesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListVerifiedEmailAddressesCommandOutput> {
    return deserializeAws_queryListVerifiedEmailAddressesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
