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
import { DescribeSnapshotAttributeRequest, DescribeSnapshotAttributeResult } from "../models/models_4";
import { de_DescribeSnapshotAttributeCommand, se_DescribeSnapshotAttributeCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeSnapshotAttributeCommand}.
 */
export interface DescribeSnapshotAttributeCommandInput extends DescribeSnapshotAttributeRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSnapshotAttributeCommand}.
 */
export interface DescribeSnapshotAttributeCommandOutput extends DescribeSnapshotAttributeResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes the specified attribute of the specified snapshot. You can specify only one
 *       attribute at a time.</p>
 *          <p>For more information about EBS snapshots, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSSnapshots.html">Amazon EBS snapshots</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeSnapshotAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeSnapshotAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeSnapshotAttributeRequest
 *   Attribute: "productCodes" || "createVolumePermission", // required
 *   SnapshotId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DescribeSnapshotAttributeCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSnapshotAttributeResult
 * //   CreateVolumePermissions: [ // CreateVolumePermissionList
 * //     { // CreateVolumePermission
 * //       Group: "all",
 * //       UserId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   ProductCodes: [ // ProductCodeList
 * //     { // ProductCode
 * //       ProductCodeId: "STRING_VALUE",
 * //       ProductCodeType: "devpay" || "marketplace",
 * //     },
 * //   ],
 * //   SnapshotId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeSnapshotAttributeCommandInput - {@link DescribeSnapshotAttributeCommandInput}
 * @returns {@link DescribeSnapshotAttributeCommandOutput}
 * @see {@link DescribeSnapshotAttributeCommandInput} for command's `input` shape.
 * @see {@link DescribeSnapshotAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To describe snapshot attributes
 * ```javascript
 * // This example describes the ``createVolumePermission`` attribute on a snapshot with the snapshot ID of ``snap-066877671789bd71b``.
 * const input = {
 *   "Attribute": "createVolumePermission",
 *   "SnapshotId": "snap-066877671789bd71b"
 * };
 * const command = new DescribeSnapshotAttributeCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "CreateVolumePermissions": [],
 *   "SnapshotId": "snap-066877671789bd71b"
 * }
 * *\/
 * // example id: to-describe-snapshot-attributes-1472503199736
 * ```
 *
 */
export class DescribeSnapshotAttributeCommand extends $Command<
  DescribeSnapshotAttributeCommandInput,
  DescribeSnapshotAttributeCommandOutput,
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
  constructor(readonly input: DescribeSnapshotAttributeCommandInput) {
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
  ): Handler<DescribeSnapshotAttributeCommandInput, DescribeSnapshotAttributeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeSnapshotAttributeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeSnapshotAttributeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DescribeSnapshotAttribute",
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
  private serialize(input: DescribeSnapshotAttributeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeSnapshotAttributeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeSnapshotAttributeCommandOutput> {
    return de_DescribeSnapshotAttributeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
