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

import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { UpdateFlowEntitlementRequest, UpdateFlowEntitlementResponse } from "../models/models_0";
import { de_UpdateFlowEntitlementCommand, se_UpdateFlowEntitlementCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateFlowEntitlementCommand}.
 */
export interface UpdateFlowEntitlementCommandInput extends UpdateFlowEntitlementRequest {}
/**
 * @public
 *
 * The output of {@link UpdateFlowEntitlementCommand}.
 */
export interface UpdateFlowEntitlementCommandOutput extends UpdateFlowEntitlementResponse, __MetadataBearer {}

/**
 * @public
 * You can change an entitlement's description, subscribers, and encryption. If you change the subscribers, the service will remove the outputs that are are used by the subscribers that are removed.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, UpdateFlowEntitlementCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, UpdateFlowEntitlementCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const input = { // UpdateFlowEntitlementRequest
 *   Description: "STRING_VALUE",
 *   Encryption: { // UpdateEncryption
 *     Algorithm: "aes128" || "aes192" || "aes256",
 *     ConstantInitializationVector: "STRING_VALUE",
 *     DeviceId: "STRING_VALUE",
 *     KeyType: "speke" || "static-key" || "srt-password",
 *     Region: "STRING_VALUE",
 *     ResourceId: "STRING_VALUE",
 *     RoleArn: "STRING_VALUE",
 *     SecretArn: "STRING_VALUE",
 *     Url: "STRING_VALUE",
 *   },
 *   EntitlementArn: "STRING_VALUE", // required
 *   EntitlementStatus: "ENABLED" || "DISABLED",
 *   FlowArn: "STRING_VALUE", // required
 *   Subscribers: [ // __listOf__string
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateFlowEntitlementCommand(input);
 * const response = await client.send(command);
 * // { // UpdateFlowEntitlementResponse
 * //   Entitlement: { // Entitlement
 * //     DataTransferSubscriberFeePercent: Number("int"),
 * //     Description: "STRING_VALUE",
 * //     Encryption: { // Encryption
 * //       Algorithm: "aes128" || "aes192" || "aes256",
 * //       ConstantInitializationVector: "STRING_VALUE",
 * //       DeviceId: "STRING_VALUE",
 * //       KeyType: "speke" || "static-key" || "srt-password",
 * //       Region: "STRING_VALUE",
 * //       ResourceId: "STRING_VALUE",
 * //       RoleArn: "STRING_VALUE", // required
 * //       SecretArn: "STRING_VALUE",
 * //       Url: "STRING_VALUE",
 * //     },
 * //     EntitlementArn: "STRING_VALUE", // required
 * //     EntitlementStatus: "ENABLED" || "DISABLED",
 * //     Name: "STRING_VALUE", // required
 * //     Subscribers: [ // __listOf__string // required
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   FlowArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateFlowEntitlementCommandInput - {@link UpdateFlowEntitlementCommandInput}
 * @returns {@link UpdateFlowEntitlementCommandOutput}
 * @see {@link UpdateFlowEntitlementCommandInput} for command's `input` shape.
 * @see {@link UpdateFlowEntitlementCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for MediaConnectClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link ForbiddenException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link NotFoundException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link MediaConnectServiceException}
 * <p>Base exception class for all service exceptions from MediaConnect service.</p>
 *
 */
export class UpdateFlowEntitlementCommand extends $Command<
  UpdateFlowEntitlementCommandInput,
  UpdateFlowEntitlementCommandOutput,
  MediaConnectClientResolvedConfig
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
  constructor(readonly input: UpdateFlowEntitlementCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateFlowEntitlementCommandInput, UpdateFlowEntitlementCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateFlowEntitlementCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaConnectClient";
    const commandName = "UpdateFlowEntitlementCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "MediaConnect",
        operation: "UpdateFlowEntitlement",
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
  private serialize(input: UpdateFlowEntitlementCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateFlowEntitlementCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateFlowEntitlementCommandOutput> {
    return de_UpdateFlowEntitlementCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
