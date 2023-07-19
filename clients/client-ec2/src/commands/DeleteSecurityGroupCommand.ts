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
import { DeleteSecurityGroupRequest } from "../models/models_3";
import { de_DeleteSecurityGroupCommand, se_DeleteSecurityGroupCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteSecurityGroupCommand}.
 */
export interface DeleteSecurityGroupCommandInput extends DeleteSecurityGroupRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSecurityGroupCommand}.
 */
export interface DeleteSecurityGroupCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Deletes a security group.</p>
 *          <p>If you attempt to delete a security group that is associated with an instance or network interface or is
 * 			  referenced by another security group, the operation fails with
 * 				<code>DependencyViolation</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteSecurityGroupCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteSecurityGroupCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteSecurityGroupRequest
 *   GroupId: "STRING_VALUE",
 *   GroupName: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new DeleteSecurityGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSecurityGroupCommandInput - {@link DeleteSecurityGroupCommandInput}
 * @returns {@link DeleteSecurityGroupCommandOutput}
 * @see {@link DeleteSecurityGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteSecurityGroupCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To delete a security group
 * ```javascript
 * // This example deletes the specified security group.
 * const input = {
 *   "GroupId": "sg-903004f8"
 * };
 * const command = new DeleteSecurityGroupCommand(input);
 * await client.send(command);
 * // example id: to-delete-a-security-group-1529024952972
 * ```
 *
 */
export class DeleteSecurityGroupCommand extends $Command<
  DeleteSecurityGroupCommandInput,
  DeleteSecurityGroupCommandOutput,
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
  constructor(readonly input: DeleteSecurityGroupCommandInput) {
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
  ): Handler<DeleteSecurityGroupCommandInput, DeleteSecurityGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteSecurityGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteSecurityGroupCommand";
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
  private serialize(input: DeleteSecurityGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteSecurityGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteSecurityGroupCommandOutput> {
    return de_DeleteSecurityGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
