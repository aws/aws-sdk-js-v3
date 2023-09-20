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
import { ModifySnapshotAttributeRequest } from "../models/models_6";
import { de_ModifySnapshotAttributeCommand, se_ModifySnapshotAttributeCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifySnapshotAttributeCommand}.
 */
export interface ModifySnapshotAttributeCommandInput extends ModifySnapshotAttributeRequest {}
/**
 * @public
 *
 * The output of {@link ModifySnapshotAttributeCommand}.
 */
export interface ModifySnapshotAttributeCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Adds or removes permission settings for the specified snapshot. You may add or remove
 *       specified Amazon Web Services account IDs from a snapshot's list of create volume permissions, but you cannot
 *       do both in a single operation. If you need to both add and remove account IDs for a snapshot,
 *       you must use multiple operations. You can make up to 500 modifications to a snapshot in a single operation.</p>
 *          <p>Encrypted snapshots and snapshots with Amazon Web Services Marketplace product codes cannot be made
 *       public. Snapshots encrypted with your default KMS key cannot be shared with other accounts.</p>
 *          <p>For more information about modifying snapshot permissions, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-modifying-snapshot-permissions.html">Share a snapshot</a> in the
 *         <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifySnapshotAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifySnapshotAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ModifySnapshotAttributeRequest
 *   Attribute: "productCodes" || "createVolumePermission",
 *   CreateVolumePermission: { // CreateVolumePermissionModifications
 *     Add: [ // CreateVolumePermissionList
 *       { // CreateVolumePermission
 *         Group: "all",
 *         UserId: "STRING_VALUE",
 *       },
 *     ],
 *     Remove: [
 *       {
 *         Group: "all",
 *         UserId: "STRING_VALUE",
 *       },
 *     ],
 *   },
 *   GroupNames: [ // GroupNameStringList
 *     "STRING_VALUE",
 *   ],
 *   OperationType: "add" || "remove",
 *   SnapshotId: "STRING_VALUE", // required
 *   UserIds: [ // UserIdStringList
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new ModifySnapshotAttributeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ModifySnapshotAttributeCommandInput - {@link ModifySnapshotAttributeCommandInput}
 * @returns {@link ModifySnapshotAttributeCommandOutput}
 * @see {@link ModifySnapshotAttributeCommandInput} for command's `input` shape.
 * @see {@link ModifySnapshotAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To modify a snapshot attribute
 * ```javascript
 * // This example modifies snapshot ``snap-1234567890abcdef0`` to remove the create volume permission for a user with the account ID ``123456789012``. If the command succeeds, no output is returned.
 * const input = {
 *   "Attribute": "createVolumePermission",
 *   "OperationType": "remove",
 *   "SnapshotId": "snap-1234567890abcdef0",
 *   "UserIds": [
 *     "123456789012"
 *   ]
 * };
 * const command = new ModifySnapshotAttributeCommand(input);
 * await client.send(command);
 * // example id: to-modify-a-snapshot-attribute-1472508385907
 * ```
 *
 * @example To make a snapshot public
 * ```javascript
 * // This example makes the snapshot ``snap-1234567890abcdef0`` public.
 * const input = {
 *   "Attribute": "createVolumePermission",
 *   "GroupNames": [
 *     "all"
 *   ],
 *   "OperationType": "add",
 *   "SnapshotId": "snap-1234567890abcdef0"
 * };
 * const command = new ModifySnapshotAttributeCommand(input);
 * await client.send(command);
 * // example id: to-make-a-snapshot-public-1472508470529
 * ```
 *
 */
export class ModifySnapshotAttributeCommand extends $Command<
  ModifySnapshotAttributeCommandInput,
  ModifySnapshotAttributeCommandOutput,
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
  constructor(readonly input: ModifySnapshotAttributeCommandInput) {
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
  ): Handler<ModifySnapshotAttributeCommandInput, ModifySnapshotAttributeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifySnapshotAttributeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifySnapshotAttributeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "ModifySnapshotAttribute",
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
  private serialize(input: ModifySnapshotAttributeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifySnapshotAttributeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifySnapshotAttributeCommandOutput> {
    return de_ModifySnapshotAttributeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
