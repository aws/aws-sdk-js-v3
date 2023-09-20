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
import { EnableFastSnapshotRestoresRequest, EnableFastSnapshotRestoresResult } from "../models/models_5";
import { de_EnableFastSnapshotRestoresCommand, se_EnableFastSnapshotRestoresCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link EnableFastSnapshotRestoresCommand}.
 */
export interface EnableFastSnapshotRestoresCommandInput extends EnableFastSnapshotRestoresRequest {}
/**
 * @public
 *
 * The output of {@link EnableFastSnapshotRestoresCommand}.
 */
export interface EnableFastSnapshotRestoresCommandOutput extends EnableFastSnapshotRestoresResult, __MetadataBearer {}

/**
 * @public
 * <p>Enables fast snapshot restores for the specified snapshots in the specified Availability Zones.</p>
 *          <p>You get the full benefit of fast snapshot restores after they enter the <code>enabled</code> state.
 *       To get the current state of fast snapshot restores, use <a>DescribeFastSnapshotRestores</a>.
 *       To disable fast snapshot restores, use <a>DisableFastSnapshotRestores</a>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-fast-snapshot-restore.html">Amazon EBS fast snapshot
 *       restore</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, EnableFastSnapshotRestoresCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, EnableFastSnapshotRestoresCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // EnableFastSnapshotRestoresRequest
 *   AvailabilityZones: [ // AvailabilityZoneStringList // required
 *     "STRING_VALUE",
 *   ],
 *   SourceSnapshotIds: [ // SnapshotIdStringList // required
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new EnableFastSnapshotRestoresCommand(input);
 * const response = await client.send(command);
 * // { // EnableFastSnapshotRestoresResult
 * //   Successful: [ // EnableFastSnapshotRestoreSuccessSet
 * //     { // EnableFastSnapshotRestoreSuccessItem
 * //       SnapshotId: "STRING_VALUE",
 * //       AvailabilityZone: "STRING_VALUE",
 * //       State: "enabling" || "optimizing" || "enabled" || "disabling" || "disabled",
 * //       StateTransitionReason: "STRING_VALUE",
 * //       OwnerId: "STRING_VALUE",
 * //       OwnerAlias: "STRING_VALUE",
 * //       EnablingTime: new Date("TIMESTAMP"),
 * //       OptimizingTime: new Date("TIMESTAMP"),
 * //       EnabledTime: new Date("TIMESTAMP"),
 * //       DisablingTime: new Date("TIMESTAMP"),
 * //       DisabledTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   Unsuccessful: [ // EnableFastSnapshotRestoreErrorSet
 * //     { // EnableFastSnapshotRestoreErrorItem
 * //       SnapshotId: "STRING_VALUE",
 * //       FastSnapshotRestoreStateErrors: [ // EnableFastSnapshotRestoreStateErrorSet
 * //         { // EnableFastSnapshotRestoreStateErrorItem
 * //           AvailabilityZone: "STRING_VALUE",
 * //           Error: { // EnableFastSnapshotRestoreStateError
 * //             Code: "STRING_VALUE",
 * //             Message: "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param EnableFastSnapshotRestoresCommandInput - {@link EnableFastSnapshotRestoresCommandInput}
 * @returns {@link EnableFastSnapshotRestoresCommandOutput}
 * @see {@link EnableFastSnapshotRestoresCommandInput} for command's `input` shape.
 * @see {@link EnableFastSnapshotRestoresCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class EnableFastSnapshotRestoresCommand extends $Command<
  EnableFastSnapshotRestoresCommandInput,
  EnableFastSnapshotRestoresCommandOutput,
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
  constructor(readonly input: EnableFastSnapshotRestoresCommandInput) {
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
  ): Handler<EnableFastSnapshotRestoresCommandInput, EnableFastSnapshotRestoresCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, EnableFastSnapshotRestoresCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "EnableFastSnapshotRestoresCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "EnableFastSnapshotRestores",
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
  private serialize(input: EnableFastSnapshotRestoresCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_EnableFastSnapshotRestoresCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<EnableFastSnapshotRestoresCommandOutput> {
    return de_EnableFastSnapshotRestoresCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
