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
import { DescribeCopyJobInput, DescribeCopyJobOutput } from "../models/models_0";
import { de_DescribeCopyJobCommand, se_DescribeCopyJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeCopyJobCommand}.
 */
export interface DescribeCopyJobCommandInput extends DescribeCopyJobInput {}
/**
 * @public
 *
 * The output of {@link DescribeCopyJobCommand}.
 */
export interface DescribeCopyJobCommandOutput extends DescribeCopyJobOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns metadata associated with creating a copy of a resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DescribeCopyJobCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DescribeCopyJobCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // DescribeCopyJobInput
 *   CopyJobId: "STRING_VALUE", // required
 * };
 * const command = new DescribeCopyJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCopyJobOutput
 * //   CopyJob: { // CopyJob
 * //     AccountId: "STRING_VALUE",
 * //     CopyJobId: "STRING_VALUE",
 * //     SourceBackupVaultArn: "STRING_VALUE",
 * //     SourceRecoveryPointArn: "STRING_VALUE",
 * //     DestinationBackupVaultArn: "STRING_VALUE",
 * //     DestinationRecoveryPointArn: "STRING_VALUE",
 * //     ResourceArn: "STRING_VALUE",
 * //     CreationDate: new Date("TIMESTAMP"),
 * //     CompletionDate: new Date("TIMESTAMP"),
 * //     State: "CREATED" || "RUNNING" || "COMPLETED" || "FAILED" || "PARTIAL",
 * //     StatusMessage: "STRING_VALUE",
 * //     BackupSizeInBytes: Number("long"),
 * //     IamRoleArn: "STRING_VALUE",
 * //     CreatedBy: { // RecoveryPointCreator
 * //       BackupPlanId: "STRING_VALUE",
 * //       BackupPlanArn: "STRING_VALUE",
 * //       BackupPlanVersion: "STRING_VALUE",
 * //       BackupRuleId: "STRING_VALUE",
 * //     },
 * //     ResourceType: "STRING_VALUE",
 * //     ParentJobId: "STRING_VALUE",
 * //     IsParent: true || false,
 * //     CompositeMemberIdentifier: "STRING_VALUE",
 * //     NumberOfChildJobs: Number("long"),
 * //     ChildJobsInState: { // CopyJobChildJobsInState
 * //       "<keys>": Number("long"),
 * //     },
 * //     ResourceName: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeCopyJobCommandInput - {@link DescribeCopyJobCommandInput}
 * @returns {@link DescribeCopyJobCommandOutput}
 * @see {@link DescribeCopyJobCommandInput} for command's `input` shape.
 * @see {@link DescribeCopyJobCommandOutput} for command's `response` shape.
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
export class DescribeCopyJobCommand extends $Command<
  DescribeCopyJobCommandInput,
  DescribeCopyJobCommandOutput,
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
  constructor(readonly input: DescribeCopyJobCommandInput) {
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
  ): Handler<DescribeCopyJobCommandInput, DescribeCopyJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeCopyJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "DescribeCopyJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CryoControllerUserManager",
        operation: "DescribeCopyJob",
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
  private serialize(input: DescribeCopyJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeCopyJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeCopyJobCommandOutput> {
    return de_DescribeCopyJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
