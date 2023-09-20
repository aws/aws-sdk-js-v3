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
import { ModifyImageAttributeRequest } from "../models/models_6";
import { de_ModifyImageAttributeCommand, se_ModifyImageAttributeCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyImageAttributeCommand}.
 */
export interface ModifyImageAttributeCommandInput extends ModifyImageAttributeRequest {}
/**
 * @public
 *
 * The output of {@link ModifyImageAttributeCommand}.
 */
export interface ModifyImageAttributeCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Modifies the specified attribute of the specified AMI. You can specify only one attribute at a time.</p>
 *          <p>To specify the attribute, you can use the <code>Attribute</code> parameter, or one of the following parameters:
 *        <code>Description</code>, <code>ImdsSupport</code>, or <code>LaunchPermission</code>.</p>
 *          <p>Images with an Amazon Web Services Marketplace product code cannot be made public.</p>
 *          <p>To enable the SriovNetSupport enhanced networking attribute of an image, enable SriovNetSupport on an instance
 *        and create an AMI from the instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyImageAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyImageAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ModifyImageAttributeRequest
 *   Attribute: "STRING_VALUE",
 *   Description: { // AttributeValue
 *     Value: "STRING_VALUE",
 *   },
 *   ImageId: "STRING_VALUE", // required
 *   LaunchPermission: { // LaunchPermissionModifications
 *     Add: [ // LaunchPermissionList
 *       { // LaunchPermission
 *         Group: "all",
 *         UserId: "STRING_VALUE",
 *         OrganizationArn: "STRING_VALUE",
 *         OrganizationalUnitArn: "STRING_VALUE",
 *       },
 *     ],
 *     Remove: [
 *       {
 *         Group: "all",
 *         UserId: "STRING_VALUE",
 *         OrganizationArn: "STRING_VALUE",
 *         OrganizationalUnitArn: "STRING_VALUE",
 *       },
 *     ],
 *   },
 *   OperationType: "add" || "remove",
 *   ProductCodes: [ // ProductCodeStringList
 *     "STRING_VALUE",
 *   ],
 *   UserGroups: [ // UserGroupStringList
 *     "STRING_VALUE",
 *   ],
 *   UserIds: [ // UserIdStringList
 *     "STRING_VALUE",
 *   ],
 *   Value: "STRING_VALUE",
 *   DryRun: true || false,
 *   OrganizationArns: [ // OrganizationArnStringList
 *     "STRING_VALUE",
 *   ],
 *   OrganizationalUnitArns: [ // OrganizationalUnitArnStringList
 *     "STRING_VALUE",
 *   ],
 *   ImdsSupport: {
 *     Value: "STRING_VALUE",
 *   },
 * };
 * const command = new ModifyImageAttributeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ModifyImageAttributeCommandInput - {@link ModifyImageAttributeCommandInput}
 * @returns {@link ModifyImageAttributeCommandOutput}
 * @see {@link ModifyImageAttributeCommandInput} for command's `input` shape.
 * @see {@link ModifyImageAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To make an AMI public
 * ```javascript
 * // This example makes the specified AMI public.
 * const input = {
 *   "ImageId": "ami-5731123e",
 *   "LaunchPermission": {
 *     "Add": [
 *       {
 *         "Group": "all"
 *       }
 *     ]
 *   }
 * };
 * const command = new ModifyImageAttributeCommand(input);
 * await client.send(command);
 * // example id: to-make-an-ami-public-1529357395278
 * ```
 *
 * @example To grant launch permissions
 * ```javascript
 * // This example grants launch permissions for the specified AMI to the specified AWS account.
 * const input = {
 *   "ImageId": "ami-5731123e",
 *   "LaunchPermission": {
 *     "Add": [
 *       {
 *         "UserId": "123456789012"
 *       }
 *     ]
 *   }
 * };
 * const command = new ModifyImageAttributeCommand(input);
 * await client.send(command);
 * // example id: to-grant-launch-permissions-1529357727906
 * ```
 *
 */
export class ModifyImageAttributeCommand extends $Command<
  ModifyImageAttributeCommandInput,
  ModifyImageAttributeCommandOutput,
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
  constructor(readonly input: ModifyImageAttributeCommandInput) {
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
  ): Handler<ModifyImageAttributeCommandInput, ModifyImageAttributeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyImageAttributeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyImageAttributeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "ModifyImageAttribute",
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
  private serialize(input: ModifyImageAttributeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifyImageAttributeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyImageAttributeCommandOutput> {
    return de_ModifyImageAttributeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
