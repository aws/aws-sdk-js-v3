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
import { ResetSnapshotAttributeRequest } from "../models/models_6";
import { de_ResetSnapshotAttributeCommand, se_ResetSnapshotAttributeCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ResetSnapshotAttributeCommand}.
 */
export interface ResetSnapshotAttributeCommandInput extends ResetSnapshotAttributeRequest {}
/**
 * @public
 *
 * The output of {@link ResetSnapshotAttributeCommand}.
 */
export interface ResetSnapshotAttributeCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Resets permission settings for the specified snapshot.</p>
 *          <p>For more information about modifying snapshot permissions, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-modifying-snapshot-permissions.html">Share a snapshot</a> in the
 *         <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ResetSnapshotAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ResetSnapshotAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ResetSnapshotAttributeRequest
 *   Attribute: "productCodes" || "createVolumePermission", // required
 *   SnapshotId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new ResetSnapshotAttributeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ResetSnapshotAttributeCommandInput - {@link ResetSnapshotAttributeCommandInput}
 * @returns {@link ResetSnapshotAttributeCommandOutput}
 * @see {@link ResetSnapshotAttributeCommandInput} for command's `input` shape.
 * @see {@link ResetSnapshotAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To reset a snapshot attribute
 * ```javascript
 * // This example resets the create volume permissions for snapshot ``snap-1234567890abcdef0``. If the command succeeds, no output is returned.
 * const input = {
 *   "Attribute": "createVolumePermission",
 *   "SnapshotId": "snap-1234567890abcdef0"
 * };
 * const command = new ResetSnapshotAttributeCommand(input);
 * await client.send(command);
 * // example id: to-reset-a-snapshot-attribute-1472508825735
 * ```
 *
 */
export class ResetSnapshotAttributeCommand extends $Command<
  ResetSnapshotAttributeCommandInput,
  ResetSnapshotAttributeCommandOutput,
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
  constructor(readonly input: ResetSnapshotAttributeCommandInput) {
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
  ): Handler<ResetSnapshotAttributeCommandInput, ResetSnapshotAttributeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ResetSnapshotAttributeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ResetSnapshotAttributeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "ResetSnapshotAttribute",
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
  private serialize(input: ResetSnapshotAttributeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ResetSnapshotAttributeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ResetSnapshotAttributeCommandOutput> {
    return de_ResetSnapshotAttributeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
