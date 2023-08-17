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

import { UpdateLedgerPermissionsModeRequest, UpdateLedgerPermissionsModeResponse } from "../models/models_0";
import {
  de_UpdateLedgerPermissionsModeCommand,
  se_UpdateLedgerPermissionsModeCommand,
} from "../protocols/Aws_restJson1";
import { QLDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QLDBClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateLedgerPermissionsModeCommand}.
 */
export interface UpdateLedgerPermissionsModeCommandInput extends UpdateLedgerPermissionsModeRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLedgerPermissionsModeCommand}.
 */
export interface UpdateLedgerPermissionsModeCommandOutput
  extends UpdateLedgerPermissionsModeResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Updates the permissions mode of a ledger.</p>
 *          <important>
 *             <p>Before you switch to the <code>STANDARD</code> permissions mode, you must first
 *             create all required IAM policies and table tags to avoid disruption to your users. To
 *             learn more, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/ledger-management.basics.html#ledger-mgmt.basics.update-permissions.migrating">Migrating to the standard permissions mode</a> in the <i>Amazon QLDB
 *                Developer Guide</i>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBClient, UpdateLedgerPermissionsModeCommand } from "@aws-sdk/client-qldb"; // ES Modules import
 * // const { QLDBClient, UpdateLedgerPermissionsModeCommand } = require("@aws-sdk/client-qldb"); // CommonJS import
 * const client = new QLDBClient(config);
 * const input = { // UpdateLedgerPermissionsModeRequest
 *   Name: "STRING_VALUE", // required
 *   PermissionsMode: "ALLOW_ALL" || "STANDARD", // required
 * };
 * const command = new UpdateLedgerPermissionsModeCommand(input);
 * const response = await client.send(command);
 * // { // UpdateLedgerPermissionsModeResponse
 * //   Name: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * //   PermissionsMode: "ALLOW_ALL" || "STANDARD",
 * // };
 *
 * ```
 *
 * @param UpdateLedgerPermissionsModeCommandInput - {@link UpdateLedgerPermissionsModeCommandInput}
 * @returns {@link UpdateLedgerPermissionsModeCommandOutput}
 * @see {@link UpdateLedgerPermissionsModeCommandInput} for command's `input` shape.
 * @see {@link UpdateLedgerPermissionsModeCommandOutput} for command's `response` shape.
 * @see {@link QLDBClientResolvedConfig | config} for QLDBClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters in the request aren't valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist.</p>
 *
 * @throws {@link QLDBServiceException}
 * <p>Base exception class for all service exceptions from QLDB service.</p>
 *
 */
export class UpdateLedgerPermissionsModeCommand extends $Command<
  UpdateLedgerPermissionsModeCommandInput,
  UpdateLedgerPermissionsModeCommandOutput,
  QLDBClientResolvedConfig
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
  constructor(readonly input: UpdateLedgerPermissionsModeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QLDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateLedgerPermissionsModeCommandInput, UpdateLedgerPermissionsModeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateLedgerPermissionsModeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QLDBClient";
    const commandName = "UpdateLedgerPermissionsModeCommand";
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
  private serialize(input: UpdateLedgerPermissionsModeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateLedgerPermissionsModeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateLedgerPermissionsModeCommandOutput> {
    return de_UpdateLedgerPermissionsModeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
