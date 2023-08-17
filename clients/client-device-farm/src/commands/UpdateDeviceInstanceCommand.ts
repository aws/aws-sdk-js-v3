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

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { UpdateDeviceInstanceRequest, UpdateDeviceInstanceResult } from "../models/models_0";
import { de_UpdateDeviceInstanceCommand, se_UpdateDeviceInstanceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateDeviceInstanceCommand}.
 */
export interface UpdateDeviceInstanceCommandInput extends UpdateDeviceInstanceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDeviceInstanceCommand}.
 */
export interface UpdateDeviceInstanceCommandOutput extends UpdateDeviceInstanceResult, __MetadataBearer {}

/**
 * @public
 * <p>Updates information about a private device instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, UpdateDeviceInstanceCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, UpdateDeviceInstanceCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const input = { // UpdateDeviceInstanceRequest
 *   arn: "STRING_VALUE", // required
 *   profileArn: "STRING_VALUE",
 *   labels: [ // InstanceLabels
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateDeviceInstanceCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDeviceInstanceResult
 * //   deviceInstance: { // DeviceInstance
 * //     arn: "STRING_VALUE",
 * //     deviceArn: "STRING_VALUE",
 * //     labels: [ // InstanceLabels
 * //       "STRING_VALUE",
 * //     ],
 * //     status: "IN_USE" || "PREPARING" || "AVAILABLE" || "NOT_AVAILABLE",
 * //     udid: "STRING_VALUE",
 * //     instanceProfile: { // InstanceProfile
 * //       arn: "STRING_VALUE",
 * //       packageCleanup: true || false,
 * //       excludeAppPackagesFromCleanup: [ // PackageIds
 * //         "STRING_VALUE",
 * //       ],
 * //       rebootAfterUse: true || false,
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateDeviceInstanceCommandInput - {@link UpdateDeviceInstanceCommandInput}
 * @returns {@link UpdateDeviceInstanceCommandOutput}
 * @see {@link UpdateDeviceInstanceCommandInput} for command's `input` shape.
 * @see {@link UpdateDeviceInstanceCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for DeviceFarmClient's `config` shape.
 *
 * @throws {@link ArgumentException} (client fault)
 *  <p>An invalid argument was specified.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit was exceeded.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified entity was not found.</p>
 *
 * @throws {@link ServiceAccountException} (client fault)
 *  <p>There was a problem with the service account.</p>
 *
 * @throws {@link DeviceFarmServiceException}
 * <p>Base exception class for all service exceptions from DeviceFarm service.</p>
 *
 */
export class UpdateDeviceInstanceCommand extends $Command<
  UpdateDeviceInstanceCommandInput,
  UpdateDeviceInstanceCommandOutput,
  DeviceFarmClientResolvedConfig
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
  constructor(readonly input: UpdateDeviceInstanceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DeviceFarmClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateDeviceInstanceCommandInput, UpdateDeviceInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateDeviceInstanceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "UpdateDeviceInstanceCommand";
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
  private serialize(input: UpdateDeviceInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateDeviceInstanceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDeviceInstanceCommandOutput> {
    return de_UpdateDeviceInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
