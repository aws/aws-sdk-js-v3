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

import { CloneStackRequest, CloneStackResult } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { de_CloneStackCommand, se_CloneStackCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CloneStackCommand}.
 */
export interface CloneStackCommandInput extends CloneStackRequest {}
/**
 * @public
 *
 * The output of {@link CloneStackCommand}.
 */
export interface CloneStackCommandOutput extends CloneStackResult, __MetadataBearer {}

/**
 * @public
 * <p>Creates a clone of a specified stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-cloning.html">Clone a
 *         Stack</a>. By default, all parameters are set to the values used by the parent stack.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy
 *       that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, CloneStackCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, CloneStackCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const input = { // CloneStackRequest
 *   SourceStackId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Region: "STRING_VALUE",
 *   VpcId: "STRING_VALUE",
 *   Attributes: { // StackAttributes
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ServiceRoleArn: "STRING_VALUE", // required
 *   DefaultInstanceProfileArn: "STRING_VALUE",
 *   DefaultOs: "STRING_VALUE",
 *   HostnameTheme: "STRING_VALUE",
 *   DefaultAvailabilityZone: "STRING_VALUE",
 *   DefaultSubnetId: "STRING_VALUE",
 *   CustomJson: "STRING_VALUE",
 *   ConfigurationManager: { // StackConfigurationManager
 *     Name: "STRING_VALUE",
 *     Version: "STRING_VALUE",
 *   },
 *   ChefConfiguration: { // ChefConfiguration
 *     ManageBerkshelf: true || false,
 *     BerkshelfVersion: "STRING_VALUE",
 *   },
 *   UseCustomCookbooks: true || false,
 *   UseOpsworksSecurityGroups: true || false,
 *   CustomCookbooksSource: { // Source
 *     Type: "git" || "svn" || "archive" || "s3",
 *     Url: "STRING_VALUE",
 *     Username: "STRING_VALUE",
 *     Password: "STRING_VALUE",
 *     SshKey: "STRING_VALUE",
 *     Revision: "STRING_VALUE",
 *   },
 *   DefaultSshKeyName: "STRING_VALUE",
 *   ClonePermissions: true || false,
 *   CloneAppIds: [ // Strings
 *     "STRING_VALUE",
 *   ],
 *   DefaultRootDeviceType: "ebs" || "instance-store",
 *   AgentVersion: "STRING_VALUE",
 * };
 * const command = new CloneStackCommand(input);
 * const response = await client.send(command);
 * // { // CloneStackResult
 * //   StackId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CloneStackCommandInput - {@link CloneStackCommandInput}
 * @returns {@link CloneStackCommandOutput}
 * @see {@link CloneStackCommandInput} for command's `input` shape.
 * @see {@link CloneStackCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for OpsWorksClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Indicates that a resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Indicates that a request was not valid.</p>
 *
 * @throws {@link OpsWorksServiceException}
 * <p>Base exception class for all service exceptions from OpsWorks service.</p>
 *
 */
export class CloneStackCommand extends $Command<
  CloneStackCommandInput,
  CloneStackCommandOutput,
  OpsWorksClientResolvedConfig
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
  constructor(readonly input: CloneStackCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpsWorksClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CloneStackCommandInput, CloneStackCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CloneStackCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpsWorksClient";
    const commandName = "CloneStackCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "OpsWorks_20130218",
        operation: "CloneStack",
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
  private serialize(input: CloneStackCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CloneStackCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CloneStackCommandOutput> {
    return de_CloneStackCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
