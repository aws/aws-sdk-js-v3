// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  UpdateLedgerPermissionsModeRequest,
  UpdateLedgerPermissionsModeRequestFilterSensitiveLog,
  UpdateLedgerPermissionsModeResponse,
  UpdateLedgerPermissionsModeResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateLedgerPermissionsModeCommand,
  serializeAws_restJson1UpdateLedgerPermissionsModeCommand,
} from "../protocols/Aws_restJson1";
import { QLDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QLDBClient";

export interface UpdateLedgerPermissionsModeCommandInput extends UpdateLedgerPermissionsModeRequest {}
export interface UpdateLedgerPermissionsModeCommandOutput
  extends UpdateLedgerPermissionsModeResponse,
    __MetadataBearer {}

/**
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
 * const command = new UpdateLedgerPermissionsModeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateLedgerPermissionsModeCommandInput} for command's `input` shape.
 * @see {@link UpdateLedgerPermissionsModeCommandOutput} for command's `response` shape.
 * @see {@link QLDBClientResolvedConfig | config} for QLDBClient's `config` shape.
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
      inputFilterSensitiveLog: UpdateLedgerPermissionsModeRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateLedgerPermissionsModeResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateLedgerPermissionsModeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateLedgerPermissionsModeCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateLedgerPermissionsModeCommandOutput> {
    return deserializeAws_restJson1UpdateLedgerPermissionsModeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
