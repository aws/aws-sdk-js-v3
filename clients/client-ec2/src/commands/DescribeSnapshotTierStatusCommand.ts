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
import { DescribeSnapshotTierStatusRequest, DescribeSnapshotTierStatusResult } from "../models/models_4";
import { de_DescribeSnapshotTierStatusCommand, se_DescribeSnapshotTierStatusCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeSnapshotTierStatusCommand}.
 */
export interface DescribeSnapshotTierStatusCommandInput extends DescribeSnapshotTierStatusRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSnapshotTierStatusCommand}.
 */
export interface DescribeSnapshotTierStatusCommandOutput extends DescribeSnapshotTierStatusResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes the storage tier status of one or more Amazon EBS snapshots.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeSnapshotTierStatusCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeSnapshotTierStatusCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeSnapshotTierStatusRequest
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   DryRun: true || false,
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeSnapshotTierStatusCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSnapshotTierStatusResult
 * //   SnapshotTierStatuses: [ // snapshotTierStatusSet
 * //     { // SnapshotTierStatus
 * //       SnapshotId: "STRING_VALUE",
 * //       VolumeId: "STRING_VALUE",
 * //       Status: "pending" || "completed" || "error" || "recoverable" || "recovering",
 * //       OwnerId: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       StorageTier: "archive" || "standard",
 * //       LastTieringStartTime: new Date("TIMESTAMP"),
 * //       LastTieringProgress: Number("int"),
 * //       LastTieringOperationStatus: "archival-in-progress" || "archival-completed" || "archival-failed" || "temporary-restore-in-progress" || "temporary-restore-completed" || "temporary-restore-failed" || "permanent-restore-in-progress" || "permanent-restore-completed" || "permanent-restore-failed",
 * //       LastTieringOperationStatusDetail: "STRING_VALUE",
 * //       ArchivalCompleteTime: new Date("TIMESTAMP"),
 * //       RestoreExpiryTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeSnapshotTierStatusCommandInput - {@link DescribeSnapshotTierStatusCommandInput}
 * @returns {@link DescribeSnapshotTierStatusCommandOutput}
 * @see {@link DescribeSnapshotTierStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeSnapshotTierStatusCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeSnapshotTierStatusCommand extends $Command<
  DescribeSnapshotTierStatusCommandInput,
  DescribeSnapshotTierStatusCommandOutput,
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
  constructor(readonly input: DescribeSnapshotTierStatusCommandInput) {
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
  ): Handler<DescribeSnapshotTierStatusCommandInput, DescribeSnapshotTierStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeSnapshotTierStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeSnapshotTierStatusCommand";
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
  private serialize(input: DescribeSnapshotTierStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeSnapshotTierStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeSnapshotTierStatusCommandOutput> {
    return de_DescribeSnapshotTierStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
