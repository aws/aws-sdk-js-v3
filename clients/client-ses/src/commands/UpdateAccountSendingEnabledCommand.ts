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
} from "@smithy/types";

import { UpdateAccountSendingEnabledRequest } from "../models/models_0";
import { de_UpdateAccountSendingEnabledCommand, se_UpdateAccountSendingEnabledCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateAccountSendingEnabledCommand}.
 */
export interface UpdateAccountSendingEnabledCommandInput extends UpdateAccountSendingEnabledRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAccountSendingEnabledCommand}.
 */
export interface UpdateAccountSendingEnabledCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Enables or disables email sending across your entire Amazon SES account in the current
 *             Amazon Web Services Region. You can use this operation in conjunction with Amazon CloudWatch alarms to
 *             temporarily pause email sending across your Amazon SES account in a given Amazon Web Services Region when
 *             reputation metrics (such as your bounce or complaint rates) reach certain
 *             thresholds.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, UpdateAccountSendingEnabledCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, UpdateAccountSendingEnabledCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // UpdateAccountSendingEnabledRequest
 *   Enabled: true || false,
 * };
 * const command = new UpdateAccountSendingEnabledCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateAccountSendingEnabledCommandInput - {@link UpdateAccountSendingEnabledCommandInput}
 * @returns {@link UpdateAccountSendingEnabledCommandOutput}
 * @see {@link UpdateAccountSendingEnabledCommandInput} for command's `input` shape.
 * @see {@link UpdateAccountSendingEnabledCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 * @example UpdateAccountSendingEnabled
 * ```javascript
 * // The following example updated the sending status for this account.
 * const input = {
 *   "Enabled": true
 * };
 * const command = new UpdateAccountSendingEnabledCommand(input);
 * await client.send(command);
 * // example id: updateaccountsendingenabled-1469047741333
 * ```
 *
 */
export class UpdateAccountSendingEnabledCommand extends $Command<
  UpdateAccountSendingEnabledCommandInput,
  UpdateAccountSendingEnabledCommandOutput,
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
  constructor(readonly input: UpdateAccountSendingEnabledCommandInput) {
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
  ): Handler<UpdateAccountSendingEnabledCommandInput, UpdateAccountSendingEnabledCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateAccountSendingEnabledCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "UpdateAccountSendingEnabledCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: UpdateAccountSendingEnabledCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateAccountSendingEnabledCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateAccountSendingEnabledCommandOutput> {
    return de_UpdateAccountSendingEnabledCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
