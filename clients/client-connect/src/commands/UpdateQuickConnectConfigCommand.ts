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

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { UpdateQuickConnectConfigRequest } from "../models/models_1";
import { de_UpdateQuickConnectConfigCommand, se_UpdateQuickConnectConfigCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateQuickConnectConfigCommand}.
 */
export interface UpdateQuickConnectConfigCommandInput extends UpdateQuickConnectConfigRequest {}
/**
 * @public
 *
 * The output of {@link UpdateQuickConnectConfigCommand}.
 */
export interface UpdateQuickConnectConfigCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Updates the configuration settings for the specified quick connect.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateQuickConnectConfigCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateQuickConnectConfigCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // UpdateQuickConnectConfigRequest
 *   InstanceId: "STRING_VALUE", // required
 *   QuickConnectId: "STRING_VALUE", // required
 *   QuickConnectConfig: { // QuickConnectConfig
 *     QuickConnectType: "USER" || "QUEUE" || "PHONE_NUMBER", // required
 *     UserConfig: { // UserQuickConnectConfig
 *       UserId: "STRING_VALUE", // required
 *       ContactFlowId: "STRING_VALUE", // required
 *     },
 *     QueueConfig: { // QueueQuickConnectConfig
 *       QueueId: "STRING_VALUE", // required
 *       ContactFlowId: "STRING_VALUE", // required
 *     },
 *     PhoneConfig: { // PhoneNumberQuickConnectConfig
 *       PhoneNumber: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new UpdateQuickConnectConfigCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateQuickConnectConfigCommandInput - {@link UpdateQuickConnectConfigCommandInput}
 * @returns {@link UpdateQuickConnectConfigCommandOutput}
 * @see {@link UpdateQuickConnectConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateQuickConnectConfigCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 */
export class UpdateQuickConnectConfigCommand extends $Command<
  UpdateQuickConnectConfigCommandInput,
  UpdateQuickConnectConfigCommandOutput,
  ConnectClientResolvedConfig
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
  constructor(readonly input: UpdateQuickConnectConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateQuickConnectConfigCommandInput, UpdateQuickConnectConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateQuickConnectConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "UpdateQuickConnectConfigCommand";
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
  private serialize(input: UpdateQuickConnectConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateQuickConnectConfigCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateQuickConnectConfigCommandOutput> {
    return de_UpdateQuickConnectConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
