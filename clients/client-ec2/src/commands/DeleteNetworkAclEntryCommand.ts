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
import { DeleteNetworkAclEntryRequest } from "../models/models_2";
import { de_DeleteNetworkAclEntryCommand, se_DeleteNetworkAclEntryCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteNetworkAclEntryCommand}.
 */
export interface DeleteNetworkAclEntryCommandInput extends DeleteNetworkAclEntryRequest {}
/**
 * @public
 *
 * The output of {@link DeleteNetworkAclEntryCommand}.
 */
export interface DeleteNetworkAclEntryCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Deletes the specified ingress or egress entry (rule) from the specified network ACL.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteNetworkAclEntryCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteNetworkAclEntryCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteNetworkAclEntryRequest
 *   DryRun: true || false,
 *   Egress: true || false, // required
 *   NetworkAclId: "STRING_VALUE", // required
 *   RuleNumber: Number("int"), // required
 * };
 * const command = new DeleteNetworkAclEntryCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteNetworkAclEntryCommandInput - {@link DeleteNetworkAclEntryCommandInput}
 * @returns {@link DeleteNetworkAclEntryCommandOutput}
 * @see {@link DeleteNetworkAclEntryCommandInput} for command's `input` shape.
 * @see {@link DeleteNetworkAclEntryCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To delete a network ACL entry
 * ```javascript
 * // This example deletes ingress rule number 100 from the specified network ACL.
 * const input = {
 *   "Egress": true,
 *   "NetworkAclId": "acl-5fb85d36",
 *   "RuleNumber": 100
 * };
 * const command = new DeleteNetworkAclEntryCommand(input);
 * await client.send(command);
 * // example id: ec2-delete-network-acl-entry-1
 * ```
 *
 */
export class DeleteNetworkAclEntryCommand extends $Command<
  DeleteNetworkAclEntryCommandInput,
  DeleteNetworkAclEntryCommandOutput,
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
  constructor(readonly input: DeleteNetworkAclEntryCommandInput) {
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
  ): Handler<DeleteNetworkAclEntryCommandInput, DeleteNetworkAclEntryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteNetworkAclEntryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteNetworkAclEntryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DeleteNetworkAclEntry",
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
  private serialize(input: DeleteNetworkAclEntryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteNetworkAclEntryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteNetworkAclEntryCommandOutput> {
    return de_DeleteNetworkAclEntryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
