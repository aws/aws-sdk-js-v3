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

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { DeleteDeviceUsageDataRequest, DeleteDeviceUsageDataResponse } from "../models/models_0";
import { de_DeleteDeviceUsageDataCommand, se_DeleteDeviceUsageDataCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteDeviceUsageDataCommand}.
 */
export interface DeleteDeviceUsageDataCommandInput extends DeleteDeviceUsageDataRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDeviceUsageDataCommand}.
 */
export interface DeleteDeviceUsageDataCommandOutput extends DeleteDeviceUsageDataResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>When this action is called for a specified shared device, it allows authorized users to
 *          delete the device's entire previous history of voice input data and associated response
 *          data. This action can be called once every 24 hours for a specific shared device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, DeleteDeviceUsageDataCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, DeleteDeviceUsageDataCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // DeleteDeviceUsageDataRequest
 *   DeviceArn: "STRING_VALUE", // required
 *   DeviceUsageType: "VOICE", // required
 * };
 * const command = new DeleteDeviceUsageDataCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDeviceUsageDataCommandInput - {@link DeleteDeviceUsageDataCommandInput}
 * @returns {@link DeleteDeviceUsageDataCommandOutput}
 * @see {@link DeleteDeviceUsageDataCommandInput} for command's `input` shape.
 * @see {@link DeleteDeviceUsageDataCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link DeviceNotRegisteredException} (client fault)
 *  <p>The request failed because this device is no longer registered and therefore no longer managed by this account.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You are performing an action that would put you beyond your account's limits.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource is not found.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class DeleteDeviceUsageDataCommand extends $Command<
  DeleteDeviceUsageDataCommandInput,
  DeleteDeviceUsageDataCommandOutput,
  AlexaForBusinessClientResolvedConfig
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
  constructor(readonly input: DeleteDeviceUsageDataCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteDeviceUsageDataCommandInput, DeleteDeviceUsageDataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteDeviceUsageDataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "DeleteDeviceUsageDataCommand";
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
  private serialize(input: DeleteDeviceUsageDataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteDeviceUsageDataCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteDeviceUsageDataCommandOutput> {
    return de_DeleteDeviceUsageDataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
