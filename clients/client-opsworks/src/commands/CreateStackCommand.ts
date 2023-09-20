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

import { CreateStackRequest, CreateStackResult } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { de_CreateStackCommand, se_CreateStackCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateStackCommand}.
 */
export interface CreateStackCommandInput extends CreateStackRequest {}
/**
 * @public
 *
 * The output of {@link CreateStackCommand}.
 */
export interface CreateStackCommandOutput extends CreateStackResult, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-edit.html">Create a New
 *         Stack</a>.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy
 *       that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, CreateStackCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, CreateStackCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const input = { // CreateStackRequest
 *   Name: "STRING_VALUE", // required
 *   Region: "STRING_VALUE", // required
 *   VpcId: "STRING_VALUE",
 *   Attributes: { // StackAttributes
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ServiceRoleArn: "STRING_VALUE", // required
 *   DefaultInstanceProfileArn: "STRING_VALUE", // required
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
 *   DefaultRootDeviceType: "ebs" || "instance-store",
 *   AgentVersion: "STRING_VALUE",
 * };
 * const command = new CreateStackCommand(input);
 * const response = await client.send(command);
 * // { // CreateStackResult
 * //   StackId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateStackCommandInput - {@link CreateStackCommandInput}
 * @returns {@link CreateStackCommandOutput}
 * @see {@link CreateStackCommandInput} for command's `input` shape.
 * @see {@link CreateStackCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for OpsWorksClient's `config` shape.
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Indicates that a request was not valid.</p>
 *
 * @throws {@link OpsWorksServiceException}
 * <p>Base exception class for all service exceptions from OpsWorks service.</p>
 *
 */
export class CreateStackCommand extends $Command<
  CreateStackCommandInput,
  CreateStackCommandOutput,
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
  constructor(readonly input: CreateStackCommandInput) {
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
  ): Handler<CreateStackCommandInput, CreateStackCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateStackCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpsWorksClient";
    const commandName = "CreateStackCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "OpsWorks_20130218",
        operation: "CreateStack",
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
  private serialize(input: CreateStackCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateStackCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateStackCommandOutput> {
    return de_CreateStackCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
