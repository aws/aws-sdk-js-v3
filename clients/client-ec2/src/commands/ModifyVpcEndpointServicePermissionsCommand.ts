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
import {
  ModifyVpcEndpointServicePermissionsRequest,
  ModifyVpcEndpointServicePermissionsResult,
} from "../models/models_6";
import {
  de_ModifyVpcEndpointServicePermissionsCommand,
  se_ModifyVpcEndpointServicePermissionsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyVpcEndpointServicePermissionsCommand}.
 */
export interface ModifyVpcEndpointServicePermissionsCommandInput extends ModifyVpcEndpointServicePermissionsRequest {}
/**
 * @public
 *
 * The output of {@link ModifyVpcEndpointServicePermissionsCommand}.
 */
export interface ModifyVpcEndpointServicePermissionsCommandOutput
  extends ModifyVpcEndpointServicePermissionsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Modifies the permissions for your VPC endpoint service. You can add or remove permissions
 *             for service consumers (Amazon Web Services accounts, users, and IAM roles) to connect to
 *             your endpoint service.</p>
 *          <p>If you grant permissions to all principals, the service is public. Any users who know the name of a
 * 	        public service can send a request to attach an endpoint. If the service does not require manual approval,
 * 	        attachments are automatically approved.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyVpcEndpointServicePermissionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyVpcEndpointServicePermissionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ModifyVpcEndpointServicePermissionsRequest
 *   DryRun: true || false,
 *   ServiceId: "STRING_VALUE", // required
 *   AddAllowedPrincipals: [ // ValueStringList
 *     "STRING_VALUE",
 *   ],
 *   RemoveAllowedPrincipals: [
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ModifyVpcEndpointServicePermissionsCommand(input);
 * const response = await client.send(command);
 * // { // ModifyVpcEndpointServicePermissionsResult
 * //   AddedPrincipals: [ // AddedPrincipalSet
 * //     { // AddedPrincipal
 * //       PrincipalType: "All" || "Service" || "OrganizationUnit" || "Account" || "User" || "Role",
 * //       Principal: "STRING_VALUE",
 * //       ServicePermissionId: "STRING_VALUE",
 * //       ServiceId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   ReturnValue: true || false,
 * // };
 *
 * ```
 *
 * @param ModifyVpcEndpointServicePermissionsCommandInput - {@link ModifyVpcEndpointServicePermissionsCommandInput}
 * @returns {@link ModifyVpcEndpointServicePermissionsCommandOutput}
 * @see {@link ModifyVpcEndpointServicePermissionsCommandInput} for command's `input` shape.
 * @see {@link ModifyVpcEndpointServicePermissionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class ModifyVpcEndpointServicePermissionsCommand extends $Command<
  ModifyVpcEndpointServicePermissionsCommandInput,
  ModifyVpcEndpointServicePermissionsCommandOutput,
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
  constructor(readonly input: ModifyVpcEndpointServicePermissionsCommandInput) {
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
  ): Handler<ModifyVpcEndpointServicePermissionsCommandInput, ModifyVpcEndpointServicePermissionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyVpcEndpointServicePermissionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyVpcEndpointServicePermissionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "ModifyVpcEndpointServicePermissions",
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
  private serialize(
    input: ModifyVpcEndpointServicePermissionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ModifyVpcEndpointServicePermissionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyVpcEndpointServicePermissionsCommandOutput> {
    return de_ModifyVpcEndpointServicePermissionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
