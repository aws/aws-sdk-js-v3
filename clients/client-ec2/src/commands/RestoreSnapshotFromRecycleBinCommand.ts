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
import { RestoreSnapshotFromRecycleBinRequest, RestoreSnapshotFromRecycleBinResult } from "../models/models_6";
import { de_RestoreSnapshotFromRecycleBinCommand, se_RestoreSnapshotFromRecycleBinCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RestoreSnapshotFromRecycleBinCommand}.
 */
export interface RestoreSnapshotFromRecycleBinCommandInput extends RestoreSnapshotFromRecycleBinRequest {}
/**
 * @public
 *
 * The output of {@link RestoreSnapshotFromRecycleBinCommand}.
 */
export interface RestoreSnapshotFromRecycleBinCommandOutput
  extends RestoreSnapshotFromRecycleBinResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Restores a snapshot from the Recycle Bin. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-working-with-snaps.html#recycle-bin-restore-snaps">Restore
 *       snapshots from the Recycle Bin</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RestoreSnapshotFromRecycleBinCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RestoreSnapshotFromRecycleBinCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // RestoreSnapshotFromRecycleBinRequest
 *   SnapshotId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new RestoreSnapshotFromRecycleBinCommand(input);
 * const response = await client.send(command);
 * // { // RestoreSnapshotFromRecycleBinResult
 * //   SnapshotId: "STRING_VALUE",
 * //   OutpostArn: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   Encrypted: true || false,
 * //   OwnerId: "STRING_VALUE",
 * //   Progress: "STRING_VALUE",
 * //   StartTime: new Date("TIMESTAMP"),
 * //   State: "pending" || "completed" || "error" || "recoverable" || "recovering",
 * //   VolumeId: "STRING_VALUE",
 * //   VolumeSize: Number("int"),
 * // };
 *
 * ```
 *
 * @param RestoreSnapshotFromRecycleBinCommandInput - {@link RestoreSnapshotFromRecycleBinCommandInput}
 * @returns {@link RestoreSnapshotFromRecycleBinCommandOutput}
 * @see {@link RestoreSnapshotFromRecycleBinCommandInput} for command's `input` shape.
 * @see {@link RestoreSnapshotFromRecycleBinCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class RestoreSnapshotFromRecycleBinCommand extends $Command<
  RestoreSnapshotFromRecycleBinCommandInput,
  RestoreSnapshotFromRecycleBinCommandOutput,
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
  constructor(readonly input: RestoreSnapshotFromRecycleBinCommandInput) {
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
  ): Handler<RestoreSnapshotFromRecycleBinCommandInput, RestoreSnapshotFromRecycleBinCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RestoreSnapshotFromRecycleBinCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "RestoreSnapshotFromRecycleBinCommand";
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
  private serialize(input: RestoreSnapshotFromRecycleBinCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RestoreSnapshotFromRecycleBinCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RestoreSnapshotFromRecycleBinCommandOutput> {
    return de_RestoreSnapshotFromRecycleBinCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
