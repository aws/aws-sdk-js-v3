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
import { LockSnapshotRequest, LockSnapshotResult } from "../models/models_6";
import { de_LockSnapshotCommand, se_LockSnapshotCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link LockSnapshotCommand}.
 */
export interface LockSnapshotCommandInput extends LockSnapshotRequest {}
/**
 * @public
 *
 * The output of {@link LockSnapshotCommand}.
 */
export interface LockSnapshotCommandOutput extends LockSnapshotResult, __MetadataBearer {}

/**
 * @public
 * <p>Locks an Amazon EBS snapshot in either <i>governance</i> or <i>compliance</i>
 *       mode to protect it against accidental or malicious deletions for a specific duration. A locked snapshot
 *       can't be deleted.</p>
 *          <p>You can also use this action to modify the lock settings for a snapshot that is already locked. The
 *       allowed modifications depend on the lock mode and lock state:</p>
 *          <ul>
 *             <li>
 *                <p>If the snapshot is locked in governance mode, you can modify the lock mode and the lock duration
 *             or lock expiration date.</p>
 *             </li>
 *             <li>
 *                <p>If the snapshot is locked in compliance mode and it is in the cooling-off period, you can modify
 *             the lock mode and the lock duration or lock expiration date.</p>
 *             </li>
 *             <li>
 *                <p>If the snapshot is locked in compliance mode and the cooling-off period has lapsed, you can
 *             only increase the lock duration or extend the lock expiration date.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, LockSnapshotCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, LockSnapshotCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // LockSnapshotRequest
 *   SnapshotId: "STRING_VALUE", // required
 *   DryRun: true || false,
 *   LockMode: "compliance" || "governance", // required
 *   CoolOffPeriod: Number("int"),
 *   LockDuration: Number("int"),
 *   ExpirationDate: new Date("TIMESTAMP"),
 * };
 * const command = new LockSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // LockSnapshotResult
 * //   SnapshotId: "STRING_VALUE",
 * //   LockState: "compliance" || "governance" || "compliance-cooloff" || "expired",
 * //   LockDuration: Number("int"),
 * //   CoolOffPeriod: Number("int"),
 * //   CoolOffPeriodExpiresOn: new Date("TIMESTAMP"),
 * //   LockCreatedOn: new Date("TIMESTAMP"),
 * //   LockExpiresOn: new Date("TIMESTAMP"),
 * //   LockDurationStartTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param LockSnapshotCommandInput - {@link LockSnapshotCommandInput}
 * @returns {@link LockSnapshotCommandOutput}
 * @see {@link LockSnapshotCommandInput} for command's `input` shape.
 * @see {@link LockSnapshotCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class LockSnapshotCommand extends $Command<
  LockSnapshotCommandInput,
  LockSnapshotCommandOutput,
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
  constructor(readonly input: LockSnapshotCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<LockSnapshotCommandInput, LockSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, LockSnapshotCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "LockSnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "LockSnapshot",
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
  private serialize(input: LockSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_LockSnapshotCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<LockSnapshotCommandOutput> {
    return de_LockSnapshotCommand(output, context);
  }
}
