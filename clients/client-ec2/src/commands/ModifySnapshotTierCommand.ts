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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifySnapshotTierRequest, ModifySnapshotTierResult } from "../models/models_6";
import { de_ModifySnapshotTierCommand, se_ModifySnapshotTierCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifySnapshotTierCommand}.
 */
export interface ModifySnapshotTierCommandInput extends ModifySnapshotTierRequest {}
/**
 * @public
 *
 * The output of {@link ModifySnapshotTierCommand}.
 */
export interface ModifySnapshotTierCommandOutput extends ModifySnapshotTierResult, __MetadataBearer {}

/**
 * @public
 * <p>Archives an Amazon EBS snapshot. When you archive a snapshot, it is converted to a full
 *       snapshot that includes all of the blocks of data that were written to the volume at the
 *       time the snapshot was created, and moved from the standard tier to the archive
 *       tier. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-archive.html">Archive Amazon EBS snapshots</a>
 *       in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifySnapshotTierCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifySnapshotTierCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ModifySnapshotTierRequest
 *   SnapshotId: "STRING_VALUE", // required
 *   StorageTier: "archive",
 *   DryRun: true || false,
 * };
 * const command = new ModifySnapshotTierCommand(input);
 * const response = await client.send(command);
 * // { // ModifySnapshotTierResult
 * //   SnapshotId: "STRING_VALUE",
 * //   TieringStartTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param ModifySnapshotTierCommandInput - {@link ModifySnapshotTierCommandInput}
 * @returns {@link ModifySnapshotTierCommandOutput}
 * @see {@link ModifySnapshotTierCommandInput} for command's `input` shape.
 * @see {@link ModifySnapshotTierCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class ModifySnapshotTierCommand extends $Command<
  ModifySnapshotTierCommandInput,
  ModifySnapshotTierCommandOutput,
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
  constructor(readonly input: ModifySnapshotTierCommandInput) {
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
  ): Handler<ModifySnapshotTierCommandInput, ModifySnapshotTierCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifySnapshotTierCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifySnapshotTierCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "ModifySnapshotTier",
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
  private serialize(input: ModifySnapshotTierCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifySnapshotTierCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifySnapshotTierCommandOutput> {
    return de_ModifySnapshotTierCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
