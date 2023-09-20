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

import { UpdateConfigurationSetReputationMetricsEnabledRequest } from "../models/models_0";
import {
  de_UpdateConfigurationSetReputationMetricsEnabledCommand,
  se_UpdateConfigurationSetReputationMetricsEnabledCommand,
} from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateConfigurationSetReputationMetricsEnabledCommand}.
 */
export interface UpdateConfigurationSetReputationMetricsEnabledCommandInput
  extends UpdateConfigurationSetReputationMetricsEnabledRequest {}
/**
 * @public
 *
 * The output of {@link UpdateConfigurationSetReputationMetricsEnabledCommand}.
 */
export interface UpdateConfigurationSetReputationMetricsEnabledCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Enables or disables the publishing of reputation metrics for emails sent using a
 *             specific configuration set in a given Amazon Web Services Region. Reputation metrics include bounce
 *             and complaint rates. These metrics are published to Amazon CloudWatch. By using CloudWatch, you can
 *             create alarms when bounce or complaint rates exceed certain thresholds.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, UpdateConfigurationSetReputationMetricsEnabledCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, UpdateConfigurationSetReputationMetricsEnabledCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // UpdateConfigurationSetReputationMetricsEnabledRequest
 *   ConfigurationSetName: "STRING_VALUE", // required
 *   Enabled: true || false, // required
 * };
 * const command = new UpdateConfigurationSetReputationMetricsEnabledCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateConfigurationSetReputationMetricsEnabledCommandInput - {@link UpdateConfigurationSetReputationMetricsEnabledCommandInput}
 * @returns {@link UpdateConfigurationSetReputationMetricsEnabledCommandOutput}
 * @see {@link UpdateConfigurationSetReputationMetricsEnabledCommandInput} for command's `input` shape.
 * @see {@link UpdateConfigurationSetReputationMetricsEnabledCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link ConfigurationSetDoesNotExistException} (client fault)
 *  <p>Indicates that the configuration set does not exist.</p>
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 * @example UpdateConfigurationSetReputationMetricsEnabled
 * ```javascript
 * // Set the reputationMetricsEnabled flag for a specific configuration set.
 * const input = {
 *   "ConfigurationSetName": "foo",
 *   "Enabled": true
 * };
 * const command = new UpdateConfigurationSetReputationMetricsEnabledCommand(input);
 * await client.send(command);
 * // example id: updateconfigurationsetreputationmetricsenabled-2362747741333
 * ```
 *
 */
export class UpdateConfigurationSetReputationMetricsEnabledCommand extends $Command<
  UpdateConfigurationSetReputationMetricsEnabledCommandInput,
  UpdateConfigurationSetReputationMetricsEnabledCommandOutput,
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
  constructor(readonly input: UpdateConfigurationSetReputationMetricsEnabledCommandInput) {
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
  ): Handler<
    UpdateConfigurationSetReputationMetricsEnabledCommandInput,
    UpdateConfigurationSetReputationMetricsEnabledCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        UpdateConfigurationSetReputationMetricsEnabledCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "UpdateConfigurationSetReputationMetricsEnabledCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SimpleEmailService",
        operation: "UpdateConfigurationSetReputationMetricsEnabled",
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
  private serialize(
    input: UpdateConfigurationSetReputationMetricsEnabledCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_UpdateConfigurationSetReputationMetricsEnabledCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateConfigurationSetReputationMetricsEnabledCommandOutput> {
    return de_UpdateConfigurationSetReputationMetricsEnabledCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
