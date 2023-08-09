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
import { DescribeDeliveryChannelStatusRequest, DescribeDeliveryChannelStatusResponse } from "../models/models_0";
import {
  de_DescribeDeliveryChannelStatusCommand,
  se_DescribeDeliveryChannelStatusCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeDeliveryChannelStatusCommand}.
 */
export interface DescribeDeliveryChannelStatusCommandInput extends DescribeDeliveryChannelStatusRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDeliveryChannelStatusCommand}.
 */
export interface DescribeDeliveryChannelStatusCommandOutput
  extends DescribeDeliveryChannelStatusResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns the current status of the specified delivery channel.
 * 			If a delivery channel is not specified, this action returns the
 * 			current status of all delivery channels associated with the
 * 			account.</p>
 *          <note>
 *             <p>Currently, you can specify only one delivery channel per
 * 				region in your account.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeDeliveryChannelStatusCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeDeliveryChannelStatusCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const input = { // DescribeDeliveryChannelStatusRequest
 *   DeliveryChannelNames: [ // DeliveryChannelNameList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeDeliveryChannelStatusCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDeliveryChannelStatusResponse
 * //   DeliveryChannelsStatus: [ // DeliveryChannelStatusList
 * //     { // DeliveryChannelStatus
 * //       name: "STRING_VALUE",
 * //       configSnapshotDeliveryInfo: { // ConfigExportDeliveryInfo
 * //         lastStatus: "Success" || "Failure" || "Not_Applicable",
 * //         lastErrorCode: "STRING_VALUE",
 * //         lastErrorMessage: "STRING_VALUE",
 * //         lastAttemptTime: new Date("TIMESTAMP"),
 * //         lastSuccessfulTime: new Date("TIMESTAMP"),
 * //         nextDeliveryTime: new Date("TIMESTAMP"),
 * //       },
 * //       configHistoryDeliveryInfo: {
 * //         lastStatus: "Success" || "Failure" || "Not_Applicable",
 * //         lastErrorCode: "STRING_VALUE",
 * //         lastErrorMessage: "STRING_VALUE",
 * //         lastAttemptTime: new Date("TIMESTAMP"),
 * //         lastSuccessfulTime: new Date("TIMESTAMP"),
 * //         nextDeliveryTime: new Date("TIMESTAMP"),
 * //       },
 * //       configStreamDeliveryInfo: { // ConfigStreamDeliveryInfo
 * //         lastStatus: "Success" || "Failure" || "Not_Applicable",
 * //         lastErrorCode: "STRING_VALUE",
 * //         lastErrorMessage: "STRING_VALUE",
 * //         lastStatusChangeTime: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeDeliveryChannelStatusCommandInput - {@link DescribeDeliveryChannelStatusCommandInput}
 * @returns {@link DescribeDeliveryChannelStatusCommandOutput}
 * @see {@link DescribeDeliveryChannelStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeDeliveryChannelStatusCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link NoSuchDeliveryChannelException} (client fault)
 *  <p>You have specified a delivery channel that does not
 * 			exist.</p>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 */
export class DescribeDeliveryChannelStatusCommand extends $Command<
  DescribeDeliveryChannelStatusCommandInput,
  DescribeDeliveryChannelStatusCommandOutput,
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
  constructor(readonly input: DescribeDeliveryChannelStatusCommandInput) {
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
  ): Handler<DescribeDeliveryChannelStatusCommandInput, DescribeDeliveryChannelStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDeliveryChannelStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "DescribeDeliveryChannelStatusCommand";
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
  private serialize(input: DescribeDeliveryChannelStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeDeliveryChannelStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDeliveryChannelStatusCommandOutput> {
    return de_DescribeDeliveryChannelStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
