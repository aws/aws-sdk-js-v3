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

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { DescribeRecoveryPointInput, DescribeRecoveryPointOutput } from "../models/models_0";
import { de_DescribeRecoveryPointCommand, se_DescribeRecoveryPointCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeRecoveryPointCommand}.
 */
export interface DescribeRecoveryPointCommandInput extends DescribeRecoveryPointInput {}
/**
 * @public
 *
 * The output of {@link DescribeRecoveryPointCommand}.
 */
export interface DescribeRecoveryPointCommandOutput extends DescribeRecoveryPointOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns metadata associated with a recovery point, including ID, status, encryption, and
 *          lifecycle.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DescribeRecoveryPointCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DescribeRecoveryPointCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // DescribeRecoveryPointInput
 *   BackupVaultName: "STRING_VALUE", // required
 *   RecoveryPointArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeRecoveryPointCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRecoveryPointOutput
 * //   RecoveryPointArn: "STRING_VALUE",
 * //   BackupVaultName: "STRING_VALUE",
 * //   BackupVaultArn: "STRING_VALUE",
 * //   SourceBackupVaultArn: "STRING_VALUE",
 * //   ResourceArn: "STRING_VALUE",
 * //   ResourceType: "STRING_VALUE",
 * //   CreatedBy: { // RecoveryPointCreator
 * //     BackupPlanId: "STRING_VALUE",
 * //     BackupPlanArn: "STRING_VALUE",
 * //     BackupPlanVersion: "STRING_VALUE",
 * //     BackupRuleId: "STRING_VALUE",
 * //   },
 * //   IamRoleArn: "STRING_VALUE",
 * //   Status: "COMPLETED" || "PARTIAL" || "DELETING" || "EXPIRED",
 * //   StatusMessage: "STRING_VALUE",
 * //   CreationDate: new Date("TIMESTAMP"),
 * //   CompletionDate: new Date("TIMESTAMP"),
 * //   BackupSizeInBytes: Number("long"),
 * //   CalculatedLifecycle: { // CalculatedLifecycle
 * //     MoveToColdStorageAt: new Date("TIMESTAMP"),
 * //     DeleteAt: new Date("TIMESTAMP"),
 * //   },
 * //   Lifecycle: { // Lifecycle
 * //     MoveToColdStorageAfterDays: Number("long"),
 * //     DeleteAfterDays: Number("long"),
 * //   },
 * //   EncryptionKeyArn: "STRING_VALUE",
 * //   IsEncrypted: true || false,
 * //   StorageClass: "WARM" || "COLD" || "DELETED",
 * //   LastRestoreTime: new Date("TIMESTAMP"),
 * //   ParentRecoveryPointArn: "STRING_VALUE",
 * //   CompositeMemberIdentifier: "STRING_VALUE",
 * //   IsParent: true || false,
 * //   ResourceName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeRecoveryPointCommandInput - {@link DescribeRecoveryPointCommandInput}
 * @returns {@link DescribeRecoveryPointCommandOutput}
 * @see {@link DescribeRecoveryPointCommandInput} for command's `input` shape.
 * @see {@link DescribeRecoveryPointCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
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
export class DescribeRecoveryPointCommand extends $Command<
  DescribeRecoveryPointCommandInput,
  DescribeRecoveryPointCommandOutput,
  BackupClientResolvedConfig
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
  constructor(readonly input: DescribeRecoveryPointCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeRecoveryPointCommandInput, DescribeRecoveryPointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeRecoveryPointCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "DescribeRecoveryPointCommand";
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
  private serialize(input: DescribeRecoveryPointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeRecoveryPointCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeRecoveryPointCommandOutput> {
    return de_DescribeRecoveryPointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
