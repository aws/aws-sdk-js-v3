// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { ListVerifiedEmailAddressesResponse } from "../models/models_0";
import { de_ListVerifiedEmailAddressesCommand, se_ListVerifiedEmailAddressesCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListVerifiedEmailAddressesCommand}.
 */
export interface ListVerifiedEmailAddressesCommandInput {}
/**
 * @public
 *
 * The output of {@link ListVerifiedEmailAddressesCommand}.
 */
export interface ListVerifiedEmailAddressesCommandOutput extends ListVerifiedEmailAddressesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Deprecated. Use the <code>ListIdentities</code> operation to list the email addresses
 *             and domains associated with your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, ListVerifiedEmailAddressesCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, ListVerifiedEmailAddressesCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = {};
 * const command = new ListVerifiedEmailAddressesCommand(input);
 * const response = await client.send(command);
 * // { // ListVerifiedEmailAddressesResponse
 * //   VerifiedEmailAddresses: [ // AddressList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListVerifiedEmailAddressesCommandInput - {@link ListVerifiedEmailAddressesCommandInput}
 * @returns {@link ListVerifiedEmailAddressesCommandOutput}
 * @see {@link ListVerifiedEmailAddressesCommandInput} for command's `input` shape.
 * @see {@link ListVerifiedEmailAddressesCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 * @example ListVerifiedEmailAddresses
 * ```javascript
 * // The following example lists all email addresses that have been submitted for verification with Amazon SES:
 * const input = undefined;
 * const command = new ListVerifiedEmailAddressesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "VerifiedEmailAddresses": [
 *     "user1@example.com",
 *     "user2@example.com"
 *   ]
 * }
 * *\/
 * // example id: listverifiedemailaddresses-1469051402570
 * ```
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SimpleEmailService",
        operation: "ListVerifiedEmailAddresses",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: ListVerifiedEmailAddressesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListVerifiedEmailAddressesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListVerifiedEmailAddressesCommandOutput> {
    return de_ListVerifiedEmailAddressesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
