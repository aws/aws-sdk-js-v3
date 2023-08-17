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
import { DescribeRestoreJobInput, DescribeRestoreJobOutput } from "../models/models_0";
import { de_DescribeRestoreJobCommand, se_DescribeRestoreJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeRestoreJobCommand}.
 */
export interface DescribeRestoreJobCommandInput extends DescribeRestoreJobInput {}
/**
 * @public
 *
 * The output of {@link DescribeRestoreJobCommand}.
 */
export interface DescribeRestoreJobCommandOutput extends DescribeRestoreJobOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns metadata associated with a restore job that is specified by a job ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DescribeRestoreJobCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DescribeRestoreJobCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // DescribeRestoreJobInput
 *   RestoreJobId: "STRING_VALUE", // required
 * };
 * const command = new DescribeRestoreJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRestoreJobOutput
 * //   AccountId: "STRING_VALUE",
 * //   RestoreJobId: "STRING_VALUE",
 * //   RecoveryPointArn: "STRING_VALUE",
 * //   CreationDate: new Date("TIMESTAMP"),
 * //   CompletionDate: new Date("TIMESTAMP"),
 * //   Status: "PENDING" || "RUNNING" || "COMPLETED" || "ABORTED" || "FAILED",
 * //   StatusMessage: "STRING_VALUE",
 * //   PercentDone: "STRING_VALUE",
 * //   BackupSizeInBytes: Number("long"),
 * //   IamRoleArn: "STRING_VALUE",
 * //   ExpectedCompletionTimeMinutes: Number("long"),
 * //   CreatedResourceArn: "STRING_VALUE",
 * //   ResourceType: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeRestoreJobCommandInput - {@link DescribeRestoreJobCommandInput}
 * @returns {@link DescribeRestoreJobCommandOutput}
 * @see {@link DescribeRestoreJobCommandInput} for command's `input` shape.
 * @see {@link DescribeRestoreJobCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link DependencyFailureException} (server fault)
 *  <p>A dependent Amazon Web Services service or resource returned an error to the Backup service, and the action cannot be completed.</p>
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
export class DescribeRestoreJobCommand extends $Command<
  DescribeRestoreJobCommandInput,
  DescribeRestoreJobCommandOutput,
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
  constructor(readonly input: DescribeRestoreJobCommandInput) {
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
  ): Handler<DescribeRestoreJobCommandInput, DescribeRestoreJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeRestoreJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "DescribeRestoreJobCommand";
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
  private serialize(input: DescribeRestoreJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeRestoreJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeRestoreJobCommandOutput> {
    return de_DescribeRestoreJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
