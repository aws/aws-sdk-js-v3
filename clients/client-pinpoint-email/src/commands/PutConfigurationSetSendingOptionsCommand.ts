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

import {
  PutConfigurationSetSendingOptionsRequest,
  PutConfigurationSetSendingOptionsResponse,
} from "../models/models_0";
import { PinpointEmailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointEmailClient";
import {
  de_PutConfigurationSetSendingOptionsCommand,
  se_PutConfigurationSetSendingOptionsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutConfigurationSetSendingOptionsCommand}.
 */
export interface PutConfigurationSetSendingOptionsCommandInput extends PutConfigurationSetSendingOptionsRequest {}
/**
 * @public
 *
 * The output of {@link PutConfigurationSetSendingOptionsCommand}.
 */
export interface PutConfigurationSetSendingOptionsCommandOutput
  extends PutConfigurationSetSendingOptionsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Enable or disable email sending for messages that use a particular configuration set
 *             in a specific AWS Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, PutConfigurationSetSendingOptionsCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, PutConfigurationSetSendingOptionsCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * const client = new PinpointEmailClient(config);
 * const input = { // PutConfigurationSetSendingOptionsRequest
 *   ConfigurationSetName: "STRING_VALUE", // required
 *   SendingEnabled: true || false,
 * };
 * const command = new PutConfigurationSetSendingOptionsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutConfigurationSetSendingOptionsCommandInput - {@link PutConfigurationSetSendingOptionsCommandInput}
 * @returns {@link PutConfigurationSetSendingOptionsCommandOutput}
 * @see {@link PutConfigurationSetSendingOptionsCommandInput} for command's `input` shape.
 * @see {@link PutConfigurationSetSendingOptionsCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for PinpointEmailClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource you attempted to access doesn't exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link PinpointEmailServiceException}
 * <p>Base exception class for all service exceptions from PinpointEmail service.</p>
 *
 */
export class PutConfigurationSetSendingOptionsCommand extends $Command<
  PutConfigurationSetSendingOptionsCommandInput,
  PutConfigurationSetSendingOptionsCommandOutput,
  PinpointEmailClientResolvedConfig
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
  constructor(readonly input: PutConfigurationSetSendingOptionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointEmailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutConfigurationSetSendingOptionsCommandInput, PutConfigurationSetSendingOptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutConfigurationSetSendingOptionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointEmailClient";
    const commandName = "PutConfigurationSetSendingOptionsCommand";
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
  private serialize(
    input: PutConfigurationSetSendingOptionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_PutConfigurationSetSendingOptionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutConfigurationSetSendingOptionsCommandOutput> {
    return de_PutConfigurationSetSendingOptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
