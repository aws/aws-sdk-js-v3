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
  UpdateConfigurationSetTrackingOptionsRequest,
  UpdateConfigurationSetTrackingOptionsResponse,
} from "../models/models_0";
import {
  de_UpdateConfigurationSetTrackingOptionsCommand,
  se_UpdateConfigurationSetTrackingOptionsCommand,
} from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateConfigurationSetTrackingOptionsCommand}.
 */
export interface UpdateConfigurationSetTrackingOptionsCommandInput
  extends UpdateConfigurationSetTrackingOptionsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateConfigurationSetTrackingOptionsCommand}.
 */
export interface UpdateConfigurationSetTrackingOptionsCommandOutput
  extends UpdateConfigurationSetTrackingOptionsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Modifies an association between a configuration set and a custom domain for open and
 *             click event tracking. </p>
 *          <p>By default, images and links used for tracking open and click events are hosted on
 *             domains operated by Amazon SES. You can configure a subdomain of your own to handle these
 *             events. For information about using custom domains, see the <a href="https://docs.aws.amazon.com/ses/latest/dg/configure-custom-open-click-domains.html">Amazon SES Developer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, UpdateConfigurationSetTrackingOptionsCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, UpdateConfigurationSetTrackingOptionsCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // UpdateConfigurationSetTrackingOptionsRequest
 *   ConfigurationSetName: "STRING_VALUE", // required
 *   TrackingOptions: { // TrackingOptions
 *     CustomRedirectDomain: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateConfigurationSetTrackingOptionsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateConfigurationSetTrackingOptionsCommandInput - {@link UpdateConfigurationSetTrackingOptionsCommandInput}
 * @returns {@link UpdateConfigurationSetTrackingOptionsCommandOutput}
 * @see {@link UpdateConfigurationSetTrackingOptionsCommandInput} for command's `input` shape.
 * @see {@link UpdateConfigurationSetTrackingOptionsCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link ConfigurationSetDoesNotExistException} (client fault)
 *  <p>Indicates that the configuration set does not exist.</p>
 *
 * @throws {@link InvalidTrackingOptionsException} (client fault)
 *  <p>Indicates that the custom domain to be used for open and click tracking redirects is
 *             invalid. This error appears most often in the following situations:</p>
 *          <ul>
 *             <li>
 *                <p>When the tracking domain you specified is not verified in Amazon SES.</p>
 *             </li>
 *             <li>
 *                <p>When the tracking domain you specified is not a valid domain or
 *                     subdomain.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link TrackingOptionsDoesNotExistException} (client fault)
 *  <p>Indicates that the TrackingOptions object you specified does not exist.</p>
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 */
export class UpdateConfigurationSetTrackingOptionsCommand extends $Command<
  UpdateConfigurationSetTrackingOptionsCommandInput,
  UpdateConfigurationSetTrackingOptionsCommandOutput,
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
  constructor(readonly input: UpdateConfigurationSetTrackingOptionsCommandInput) {
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
  ): Handler<UpdateConfigurationSetTrackingOptionsCommandInput, UpdateConfigurationSetTrackingOptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateConfigurationSetTrackingOptionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "UpdateConfigurationSetTrackingOptionsCommand";
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
    input: UpdateConfigurationSetTrackingOptionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_UpdateConfigurationSetTrackingOptionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateConfigurationSetTrackingOptionsCommandOutput> {
    return de_UpdateConfigurationSetTrackingOptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
