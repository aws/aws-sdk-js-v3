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

import { UpdateSMBLocalGroupsInput, UpdateSMBLocalGroupsOutput } from "../models/models_0";
import { de_UpdateSMBLocalGroupsCommand, se_UpdateSMBLocalGroupsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateSMBLocalGroupsCommand}.
 */
export interface UpdateSMBLocalGroupsCommandInput extends UpdateSMBLocalGroupsInput {}
/**
 * @public
 *
 * The output of {@link UpdateSMBLocalGroupsCommand}.
 */
export interface UpdateSMBLocalGroupsCommandOutput extends UpdateSMBLocalGroupsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Updates the list of Active Directory users and groups that have special permissions for
 *          SMB file shares on the gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, UpdateSMBLocalGroupsCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, UpdateSMBLocalGroupsCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // UpdateSMBLocalGroupsInput
 *   GatewayARN: "STRING_VALUE", // required
 *   SMBLocalGroups: { // SMBLocalGroups
 *     GatewayAdmins: [ // UserList
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new UpdateSMBLocalGroupsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSMBLocalGroupsOutput
 * //   GatewayARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateSMBLocalGroupsCommandInput - {@link UpdateSMBLocalGroupsCommandInput}
 * @returns {@link UpdateSMBLocalGroupsCommandOutput}
 * @see {@link UpdateSMBLocalGroupsCommandInput} for command's `input` shape.
 * @see {@link UpdateSMBLocalGroupsCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An internal server error has occurred during the request. For more information, see the
 *          error and message fields.</p>
 *
 * @throws {@link InvalidGatewayRequestException} (client fault)
 *  <p>An exception occurred because an invalid gateway request was issued to the service. For
 *          more information, see the error and message fields.</p>
 *
 * @throws {@link StorageGatewayServiceException}
 * <p>Base exception class for all service exceptions from StorageGateway service.</p>
 *
 */
export class UpdateSMBLocalGroupsCommand extends $Command<
  UpdateSMBLocalGroupsCommandInput,
  UpdateSMBLocalGroupsCommandOutput,
  StorageGatewayClientResolvedConfig
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
  constructor(readonly input: UpdateSMBLocalGroupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: StorageGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateSMBLocalGroupsCommandInput, UpdateSMBLocalGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateSMBLocalGroupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "UpdateSMBLocalGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "StorageGateway_20130630",
        operation: "UpdateSMBLocalGroups",
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
  private serialize(input: UpdateSMBLocalGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateSMBLocalGroupsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateSMBLocalGroupsCommandOutput> {
    return de_UpdateSMBLocalGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
