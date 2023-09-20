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
import { DisableFastSnapshotRestoresRequest, DisableFastSnapshotRestoresResult } from "../models/models_5";
import { de_DisableFastSnapshotRestoresCommand, se_DisableFastSnapshotRestoresCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DisableFastSnapshotRestoresCommand}.
 */
export interface DisableFastSnapshotRestoresCommandInput extends DisableFastSnapshotRestoresRequest {}
/**
 * @public
 *
 * The output of {@link DisableFastSnapshotRestoresCommand}.
 */
export interface DisableFastSnapshotRestoresCommandOutput extends DisableFastSnapshotRestoresResult, __MetadataBearer {}

/**
 * @public
 * <p>Disables fast snapshot restores for the specified snapshots in the specified Availability Zones.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisableFastSnapshotRestoresCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisableFastSnapshotRestoresCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DisableFastSnapshotRestoresRequest
 *   AvailabilityZones: [ // AvailabilityZoneStringList // required
 *     "STRING_VALUE",
 *   ],
 *   SourceSnapshotIds: [ // SnapshotIdStringList // required
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new DisableFastSnapshotRestoresCommand(input);
 * const response = await client.send(command);
 * // { // DisableFastSnapshotRestoresResult
 * //   Successful: [ // DisableFastSnapshotRestoreSuccessSet
 * //     { // DisableFastSnapshotRestoreSuccessItem
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
 * //   Unsuccessful: [ // DisableFastSnapshotRestoreErrorSet
 * //     { // DisableFastSnapshotRestoreErrorItem
 * //       SnapshotId: "STRING_VALUE",
 * //       FastSnapshotRestoreStateErrors: [ // DisableFastSnapshotRestoreStateErrorSet
 * //         { // DisableFastSnapshotRestoreStateErrorItem
 * //           AvailabilityZone: "STRING_VALUE",
 * //           Error: { // DisableFastSnapshotRestoreStateError
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
 * @param DisableFastSnapshotRestoresCommandInput - {@link DisableFastSnapshotRestoresCommandInput}
 * @returns {@link DisableFastSnapshotRestoresCommandOutput}
 * @see {@link DisableFastSnapshotRestoresCommandInput} for command's `input` shape.
 * @see {@link DisableFastSnapshotRestoresCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DisableFastSnapshotRestoresCommand extends $Command<
  DisableFastSnapshotRestoresCommandInput,
  DisableFastSnapshotRestoresCommandOutput,
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
  constructor(readonly input: DisableFastSnapshotRestoresCommandInput) {
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
  ): Handler<DisableFastSnapshotRestoresCommandInput, DisableFastSnapshotRestoresCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisableFastSnapshotRestoresCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DisableFastSnapshotRestoresCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DisableFastSnapshotRestores",
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
  private serialize(input: DisableFastSnapshotRestoresCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DisableFastSnapshotRestoresCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisableFastSnapshotRestoresCommandOutput> {
    return de_DisableFastSnapshotRestoresCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
