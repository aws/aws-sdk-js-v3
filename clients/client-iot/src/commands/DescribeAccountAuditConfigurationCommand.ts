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

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import {
  DescribeAccountAuditConfigurationRequest,
  DescribeAccountAuditConfigurationResponse,
} from "../models/models_1";
import {
  de_DescribeAccountAuditConfigurationCommand,
  se_DescribeAccountAuditConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAccountAuditConfigurationCommand}.
 */
export interface DescribeAccountAuditConfigurationCommandInput extends DescribeAccountAuditConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAccountAuditConfigurationCommand}.
 */
export interface DescribeAccountAuditConfigurationCommandOutput
  extends DescribeAccountAuditConfigurationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets information about the Device Defender audit settings for this account.
 *           Settings include how audit notifications are sent and which audit checks are
 *           enabled or disabled.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeAccountAuditConfiguration</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeAccountAuditConfigurationCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeAccountAuditConfigurationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = {};
 * const command = new DescribeAccountAuditConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAccountAuditConfigurationResponse
 * //   roleArn: "STRING_VALUE",
 * //   auditNotificationTargetConfigurations: { // AuditNotificationTargetConfigurations
 * //     "<keys>": { // AuditNotificationTarget
 * //       targetArn: "STRING_VALUE",
 * //       roleArn: "STRING_VALUE",
 * //       enabled: true || false,
 * //     },
 * //   },
 * //   auditCheckConfigurations: { // AuditCheckConfigurations
 * //     "<keys>": { // AuditCheckConfiguration
 * //       enabled: true || false,
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAccountAuditConfigurationCommandInput - {@link DescribeAccountAuditConfigurationCommandInput}
 * @returns {@link DescribeAccountAuditConfigurationCommandOutput}
 * @see {@link DescribeAccountAuditConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountAuditConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 */
export class DescribeAccountAuditConfigurationCommand extends $Command<
  DescribeAccountAuditConfigurationCommandInput,
  DescribeAccountAuditConfigurationCommandOutput,
  IoTClientResolvedConfig
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
  constructor(readonly input: DescribeAccountAuditConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAccountAuditConfigurationCommandInput, DescribeAccountAuditConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAccountAuditConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "DescribeAccountAuditConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIotService",
        operation: "DescribeAccountAuditConfiguration",
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
    input: DescribeAccountAuditConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeAccountAuditConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAccountAuditConfigurationCommandOutput> {
    return de_DescribeAccountAuditConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
