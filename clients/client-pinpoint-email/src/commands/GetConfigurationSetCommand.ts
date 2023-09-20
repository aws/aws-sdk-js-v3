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

import { GetConfigurationSetRequest, GetConfigurationSetResponse } from "../models/models_0";
import { PinpointEmailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointEmailClient";
import { de_GetConfigurationSetCommand, se_GetConfigurationSetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetConfigurationSetCommand}.
 */
export interface GetConfigurationSetCommandInput extends GetConfigurationSetRequest {}
/**
 * @public
 *
 * The output of {@link GetConfigurationSetCommand}.
 */
export interface GetConfigurationSetCommandOutput extends GetConfigurationSetResponse, __MetadataBearer {}

/**
 * @public
 * <p>Get information about an existing configuration set, including the dedicated IP pool
 *             that it's associated with, whether or not it's enabled for sending email, and
 *             more.</p>
 *         <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can
 *             apply to the emails you send. You apply a configuration set to an email by including a
 *             reference to the configuration set in the headers of the email. When you apply a
 *             configuration set to an email, all of the rules in that configuration set are applied to
 *             the email.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, GetConfigurationSetCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, GetConfigurationSetCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * const client = new PinpointEmailClient(config);
 * const input = { // GetConfigurationSetRequest
 *   ConfigurationSetName: "STRING_VALUE", // required
 * };
 * const command = new GetConfigurationSetCommand(input);
 * const response = await client.send(command);
 * // { // GetConfigurationSetResponse
 * //   ConfigurationSetName: "STRING_VALUE",
 * //   TrackingOptions: { // TrackingOptions
 * //     CustomRedirectDomain: "STRING_VALUE", // required
 * //   },
 * //   DeliveryOptions: { // DeliveryOptions
 * //     TlsPolicy: "REQUIRE" || "OPTIONAL",
 * //     SendingPoolName: "STRING_VALUE",
 * //   },
 * //   ReputationOptions: { // ReputationOptions
 * //     ReputationMetricsEnabled: true || false,
 * //     LastFreshStart: new Date("TIMESTAMP"),
 * //   },
 * //   SendingOptions: { // SendingOptions
 * //     SendingEnabled: true || false,
 * //   },
 * //   Tags: [ // TagList
 * //     { // Tag
 * //       Key: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetConfigurationSetCommandInput - {@link GetConfigurationSetCommandInput}
 * @returns {@link GetConfigurationSetCommandOutput}
 * @see {@link GetConfigurationSetCommandInput} for command's `input` shape.
 * @see {@link GetConfigurationSetCommandOutput} for command's `response` shape.
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
export class GetConfigurationSetCommand extends $Command<
  GetConfigurationSetCommandInput,
  GetConfigurationSetCommandOutput,
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
  constructor(readonly input: GetConfigurationSetCommandInput) {
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
  ): Handler<GetConfigurationSetCommandInput, GetConfigurationSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetConfigurationSetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointEmailClient";
    const commandName = "GetConfigurationSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonPinpointEmailService",
        operation: "GetConfigurationSet",
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
  private serialize(input: GetConfigurationSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetConfigurationSetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetConfigurationSetCommandOutput> {
    return de_GetConfigurationSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
