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
import { DescribeLockedSnapshotsRequest, DescribeLockedSnapshotsResult } from "../models/models_4";
import { de_DescribeLockedSnapshotsCommand, se_DescribeLockedSnapshotsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeLockedSnapshotsCommand}.
 */
export interface DescribeLockedSnapshotsCommandInput extends DescribeLockedSnapshotsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeLockedSnapshotsCommand}.
 */
export interface DescribeLockedSnapshotsCommandOutput extends DescribeLockedSnapshotsResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes the lock status for a snapshot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeLockedSnapshotsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeLockedSnapshotsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeLockedSnapshotsRequest
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   SnapshotIds: [ // SnapshotIdStringList
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new DescribeLockedSnapshotsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLockedSnapshotsResult
 * //   Snapshots: [ // LockedSnapshotsInfoList
 * //     { // LockedSnapshotsInfo
 * //       OwnerId: "STRING_VALUE",
 * //       SnapshotId: "STRING_VALUE",
 * //       LockState: "compliance" || "governance" || "compliance-cooloff" || "expired",
 * //       LockDuration: Number("int"),
 * //       CoolOffPeriod: Number("int"),
 * //       CoolOffPeriodExpiresOn: new Date("TIMESTAMP"),
 * //       LockCreatedOn: new Date("TIMESTAMP"),
 * //       LockDurationStartTime: new Date("TIMESTAMP"),
 * //       LockExpiresOn: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeLockedSnapshotsCommandInput - {@link DescribeLockedSnapshotsCommandInput}
 * @returns {@link DescribeLockedSnapshotsCommandOutput}
 * @see {@link DescribeLockedSnapshotsCommandInput} for command's `input` shape.
 * @see {@link DescribeLockedSnapshotsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeLockedSnapshotsCommand extends $Command<
  DescribeLockedSnapshotsCommandInput,
  DescribeLockedSnapshotsCommandOutput,
  EC2ClientResolvedConfig
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
  constructor(readonly input: DescribeLockedSnapshotsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeLockedSnapshotsCommandInput, DescribeLockedSnapshotsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeLockedSnapshotsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeLockedSnapshotsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DescribeLockedSnapshots",
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
  private serialize(input: DescribeLockedSnapshotsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeLockedSnapshotsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeLockedSnapshotsCommandOutput> {
    return de_DescribeLockedSnapshotsCommand(output, context);
  }
}
