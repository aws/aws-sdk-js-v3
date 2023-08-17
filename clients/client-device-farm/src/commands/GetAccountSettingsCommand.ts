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
import { GetAccountSettingsRequest, GetAccountSettingsResult } from "../models/models_0";
import { de_GetAccountSettingsCommand, se_GetAccountSettingsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetAccountSettingsCommand}.
 */
export interface GetAccountSettingsCommandInput extends GetAccountSettingsRequest {}
/**
 * @public
 *
 * The output of {@link GetAccountSettingsCommand}.
 */
export interface GetAccountSettingsCommandOutput extends GetAccountSettingsResult, __MetadataBearer {}

/**
 * @public
 * <p>Returns the number of unmetered iOS or unmetered Android devices that have been purchased by the
 *             account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, GetAccountSettingsCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, GetAccountSettingsCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const input = {};
 * const command = new GetAccountSettingsCommand(input);
 * const response = await client.send(command);
 * // { // GetAccountSettingsResult
 * //   accountSettings: { // AccountSettings
 * //     awsAccountNumber: "STRING_VALUE",
 * //     unmeteredDevices: { // PurchasedDevicesMap
 * //       "<keys>": Number("int"),
 * //     },
 * //     unmeteredRemoteAccessDevices: {
 * //       "<keys>": Number("int"),
 * //     },
 * //     maxJobTimeoutMinutes: Number("int"),
 * //     trialMinutes: { // TrialMinutes
 * //       total: Number("double"),
 * //       remaining: Number("double"),
 * //     },
 * //     maxSlots: { // MaxSlotMap
 * //       "<keys>": Number("int"),
 * //     },
 * //     defaultJobTimeoutMinutes: Number("int"),
 * //     skipAppResign: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAccountSettingsCommandInput - {@link GetAccountSettingsCommandInput}
 * @returns {@link GetAccountSettingsCommandOutput}
 * @see {@link GetAccountSettingsCommandInput} for command's `input` shape.
 * @see {@link GetAccountSettingsCommandOutput} for command's `response` shape.
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
 * @example To get information about account settings
 * ```javascript
 * // The following example returns information about your Device Farm account settings.
 * const input = {};
 * const command = new GetAccountSettingsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "accountSettings": {
 *     "awsAccountNumber": "123456789101",
 *     "unmeteredDevices": {
 *       "ANDROID": 1,
 *       "IOS": 2
 *     }
 *   }
 * }
 * *\/
 * // example id: to-get-information-about-account-settings-1472567568189
 * ```
 *
 */
export class GetAccountSettingsCommand extends $Command<
  GetAccountSettingsCommandInput,
  GetAccountSettingsCommandOutput,
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
  constructor(readonly input: GetAccountSettingsCommandInput) {
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
  ): Handler<GetAccountSettingsCommandInput, GetAccountSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetAccountSettingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "GetAccountSettingsCommand";
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
  private serialize(input: GetAccountSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetAccountSettingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAccountSettingsCommandOutput> {
    return de_GetAccountSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
