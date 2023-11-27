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
import {
  UpdateRestoreTestingSelectionInput,
  UpdateRestoreTestingSelectionInputFilterSensitiveLog,
  UpdateRestoreTestingSelectionOutput,
} from "../models/models_0";
import {
  de_UpdateRestoreTestingSelectionCommand,
  se_UpdateRestoreTestingSelectionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateRestoreTestingSelectionCommand}.
 */
export interface UpdateRestoreTestingSelectionCommandInput extends UpdateRestoreTestingSelectionInput {}
/**
 * @public
 *
 * The output of {@link UpdateRestoreTestingSelectionCommand}.
 */
export interface UpdateRestoreTestingSelectionCommandOutput
  extends UpdateRestoreTestingSelectionOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Most elements except the <code>RestoreTestingSelectionName</code>
 *          can be updated with this request.</p>
 *          <p>
 *             <code>RestoreTestingSelection</code> can use either protected
 *          resource ARNs or conditions, but not both. That is, if your selection
 *          has <code>ProtectedResourceArns</code>, requesting an update with the
 *          parameter <code>ProtectedResourceConditions</code> will be
 *          unsuccessful.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, UpdateRestoreTestingSelectionCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, UpdateRestoreTestingSelectionCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // UpdateRestoreTestingSelectionInput
 *   RestoreTestingPlanName: "STRING_VALUE", // required
 *   RestoreTestingSelection: { // RestoreTestingSelectionForUpdate
 *     IamRoleArn: "STRING_VALUE",
 *     ProtectedResourceArns: [ // stringList
 *       "STRING_VALUE",
 *     ],
 *     ProtectedResourceConditions: { // ProtectedResourceConditions
 *       StringEquals: [ // KeyValueList
 *         { // KeyValue
 *           Key: "STRING_VALUE", // required
 *           Value: "STRING_VALUE", // required
 *         },
 *       ],
 *       StringNotEquals: [
 *         {
 *           Key: "STRING_VALUE", // required
 *           Value: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *     RestoreMetadataOverrides: { // SensitiveStringMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *     ValidationWindowHours: Number("int"),
 *   },
 *   RestoreTestingSelectionName: "STRING_VALUE", // required
 * };
 * const command = new UpdateRestoreTestingSelectionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRestoreTestingSelectionOutput
 * //   CreationTime: new Date("TIMESTAMP"), // required
 * //   RestoreTestingPlanArn: "STRING_VALUE", // required
 * //   RestoreTestingPlanName: "STRING_VALUE", // required
 * //   RestoreTestingSelectionName: "STRING_VALUE", // required
 * //   UpdateTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param UpdateRestoreTestingSelectionCommandInput - {@link UpdateRestoreTestingSelectionCommandInput}
 * @returns {@link UpdateRestoreTestingSelectionCommandOutput}
 * @see {@link UpdateRestoreTestingSelectionCommandInput} for command's `input` shape.
 * @see {@link UpdateRestoreTestingSelectionCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Backup can't perform the action that you requested until it finishes
 *          performing a previous action. Try again later.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *  <p>Indicates that a required parameter is missing.</p>
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
export class UpdateRestoreTestingSelectionCommand extends $Command<
  UpdateRestoreTestingSelectionCommandInput,
  UpdateRestoreTestingSelectionCommandOutput,
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
  constructor(readonly input: UpdateRestoreTestingSelectionCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateRestoreTestingSelectionCommandInput, UpdateRestoreTestingSelectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateRestoreTestingSelectionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "UpdateRestoreTestingSelectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateRestoreTestingSelectionInputFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CryoControllerUserManager",
        operation: "UpdateRestoreTestingSelection",
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
  private serialize(input: UpdateRestoreTestingSelectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateRestoreTestingSelectionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateRestoreTestingSelectionCommandOutput> {
    return de_UpdateRestoreTestingSelectionCommand(output, context);
  }
}
