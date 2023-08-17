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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { RestoreSnapshotTierRequest, RestoreSnapshotTierResult } from "../models/models_6";
import { de_RestoreSnapshotTierCommand, se_RestoreSnapshotTierCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RestoreSnapshotTierCommand}.
 */
export interface RestoreSnapshotTierCommandInput extends RestoreSnapshotTierRequest {}
/**
 * @public
 *
 * The output of {@link RestoreSnapshotTierCommand}.
 */
export interface RestoreSnapshotTierCommandOutput extends RestoreSnapshotTierResult, __MetadataBearer {}

/**
 * @public
 * <p>Restores an archived Amazon EBS snapshot for use temporarily or permanently, or modifies the restore
 *       period or restore type for a snapshot that was previously temporarily restored.</p>
 *          <p>For more information see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-snapshot-archiving.html#restore-archived-snapshot">
 *       Restore an archived snapshot</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-snapshot-archiving.html#modify-temp-restore-period">
 *         modify the restore period or restore type for a temporarily restored snapshot</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RestoreSnapshotTierCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RestoreSnapshotTierCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // RestoreSnapshotTierRequest
 *   SnapshotId: "STRING_VALUE", // required
 *   TemporaryRestoreDays: Number("int"),
 *   PermanentRestore: true || false,
 *   DryRun: true || false,
 * };
 * const command = new RestoreSnapshotTierCommand(input);
 * const response = await client.send(command);
 * // { // RestoreSnapshotTierResult
 * //   SnapshotId: "STRING_VALUE",
 * //   RestoreStartTime: new Date("TIMESTAMP"),
 * //   RestoreDuration: Number("int"),
 * //   IsPermanentRestore: true || false,
 * // };
 *
 * ```
 *
 * @param RestoreSnapshotTierCommandInput - {@link RestoreSnapshotTierCommandInput}
 * @returns {@link RestoreSnapshotTierCommandOutput}
 * @see {@link RestoreSnapshotTierCommandInput} for command's `input` shape.
 * @see {@link RestoreSnapshotTierCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class RestoreSnapshotTierCommand extends $Command<
  RestoreSnapshotTierCommandInput,
  RestoreSnapshotTierCommandOutput,
  EC2ClientResolvedConfig
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
  constructor(readonly input: RestoreSnapshotTierCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RestoreSnapshotTierCommandInput, RestoreSnapshotTierCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RestoreSnapshotTierCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "RestoreSnapshotTierCommand";
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
  private serialize(input: RestoreSnapshotTierCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RestoreSnapshotTierCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RestoreSnapshotTierCommandOutput> {
    return de_RestoreSnapshotTierCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
