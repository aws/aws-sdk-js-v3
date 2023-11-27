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

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { DeleteRestoreTestingSelectionInput } from "../models/models_0";
import {
  de_DeleteRestoreTestingSelectionCommand,
  se_DeleteRestoreTestingSelectionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteRestoreTestingSelectionCommand}.
 */
export interface DeleteRestoreTestingSelectionCommandInput extends DeleteRestoreTestingSelectionInput {}
/**
 * @public
 *
 * The output of {@link DeleteRestoreTestingSelectionCommand}.
 */
export interface DeleteRestoreTestingSelectionCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Input the Restore Testing Plan name and Restore Testing Selection
 *          name.</p>
 *          <p>All testing selections associated with a restore testing plan must
 *          be deleted before the restore testing plan can be deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DeleteRestoreTestingSelectionCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DeleteRestoreTestingSelectionCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // DeleteRestoreTestingSelectionInput
 *   RestoreTestingPlanName: "STRING_VALUE", // required
 *   RestoreTestingSelectionName: "STRING_VALUE", // required
 * };
 * const command = new DeleteRestoreTestingSelectionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRestoreTestingSelectionCommandInput - {@link DeleteRestoreTestingSelectionCommandInput}
 * @returns {@link DeleteRestoreTestingSelectionCommandOutput}
 * @see {@link DeleteRestoreTestingSelectionCommandInput} for command's `input` shape.
 * @see {@link DeleteRestoreTestingSelectionCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource that is required for the action doesn't exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request failed due to a temporary failure of the server.</p>
 *
 * @throws {@link BackupServiceException}
 * <p>Base exception class for all service exceptions from Backup service.</p>
 *
 */
export class DeleteRestoreTestingSelectionCommand extends $Command<
  DeleteRestoreTestingSelectionCommandInput,
  DeleteRestoreTestingSelectionCommandOutput,
  BackupClientResolvedConfig
> {
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
  constructor(readonly input: DeleteRestoreTestingSelectionCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteRestoreTestingSelectionCommandInput, DeleteRestoreTestingSelectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteRestoreTestingSelectionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "DeleteRestoreTestingSelectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CryoControllerUserManager",
        operation: "DeleteRestoreTestingSelection",
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
  private serialize(input: DeleteRestoreTestingSelectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteRestoreTestingSelectionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteRestoreTestingSelectionCommandOutput> {
    return de_DeleteRestoreTestingSelectionCommand(output, context);
  }
}
