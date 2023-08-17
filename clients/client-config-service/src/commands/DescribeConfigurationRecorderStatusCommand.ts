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

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import {
  DescribeConfigurationRecorderStatusRequest,
  DescribeConfigurationRecorderStatusResponse,
} from "../models/models_0";
import {
  de_DescribeConfigurationRecorderStatusCommand,
  se_DescribeConfigurationRecorderStatusCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeConfigurationRecorderStatusCommand}.
 */
export interface DescribeConfigurationRecorderStatusCommandInput extends DescribeConfigurationRecorderStatusRequest {}
/**
 * @public
 *
 * The output of {@link DescribeConfigurationRecorderStatusCommand}.
 */
export interface DescribeConfigurationRecorderStatusCommandOutput
  extends DescribeConfigurationRecorderStatusResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns the current status of the specified configuration
 * 			recorder as well as the status of the last recording event for the recorder. If a configuration recorder is not specified, this action
 * 			returns the status of all configuration recorders associated with
 * 			the account.</p>
 *          <note>
 *             <p>>You can specify only one configuration recorder for each Amazon Web Services Region for each account.
 * 				For a detailed status of recording events over time, add your Config events to Amazon CloudWatch metrics and use CloudWatch metrics.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeConfigurationRecorderStatusCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeConfigurationRecorderStatusCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const input = { // DescribeConfigurationRecorderStatusRequest
 *   ConfigurationRecorderNames: [ // ConfigurationRecorderNameList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeConfigurationRecorderStatusCommand(input);
 * const response = await client.send(command);
 * // { // DescribeConfigurationRecorderStatusResponse
 * //   ConfigurationRecordersStatus: [ // ConfigurationRecorderStatusList
 * //     { // ConfigurationRecorderStatus
 * //       name: "STRING_VALUE",
 * //       lastStartTime: new Date("TIMESTAMP"),
 * //       lastStopTime: new Date("TIMESTAMP"),
 * //       recording: true || false,
 * //       lastStatus: "Pending" || "Success" || "Failure",
 * //       lastErrorCode: "STRING_VALUE",
 * //       lastErrorMessage: "STRING_VALUE",
 * //       lastStatusChangeTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeConfigurationRecorderStatusCommandInput - {@link DescribeConfigurationRecorderStatusCommandInput}
 * @returns {@link DescribeConfigurationRecorderStatusCommandOutput}
 * @see {@link DescribeConfigurationRecorderStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeConfigurationRecorderStatusCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link NoSuchConfigurationRecorderException} (client fault)
 *  <p>You have specified a configuration recorder that does not
 * 			exist.</p>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 */
export class DescribeConfigurationRecorderStatusCommand extends $Command<
  DescribeConfigurationRecorderStatusCommandInput,
  DescribeConfigurationRecorderStatusCommandOutput,
  ConfigServiceClientResolvedConfig
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
  constructor(readonly input: DescribeConfigurationRecorderStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeConfigurationRecorderStatusCommandInput, DescribeConfigurationRecorderStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeConfigurationRecorderStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "DescribeConfigurationRecorderStatusCommand";
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
    input: DescribeConfigurationRecorderStatusCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeConfigurationRecorderStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeConfigurationRecorderStatusCommandOutput> {
    return de_DescribeConfigurationRecorderStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
