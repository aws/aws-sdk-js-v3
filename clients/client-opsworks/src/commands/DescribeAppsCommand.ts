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

import { DescribeAppsRequest, DescribeAppsResult } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { de_DescribeAppsCommand, se_DescribeAppsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAppsCommand}.
 */
export interface DescribeAppsCommandInput extends DescribeAppsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAppsCommand}.
 */
export interface DescribeAppsCommandOutput extends DescribeAppsResult, __MetadataBearer {}

/**
 * @public
 * <p>Requests a description of a specified set of apps.</p>
 *          <note>
 *             <p>This call accepts only one resource-identifying parameter.</p>
 *          </note>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or
 *       Manage permissions level for the stack, or an attached policy that explicitly grants
 *       permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, DescribeAppsCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DescribeAppsCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const input = { // DescribeAppsRequest
 *   StackId: "STRING_VALUE",
 *   AppIds: [ // Strings
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeAppsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAppsResult
 * //   Apps: [ // Apps
 * //     { // App
 * //       AppId: "STRING_VALUE",
 * //       StackId: "STRING_VALUE",
 * //       Shortname: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       DataSources: [ // DataSources
 * //         { // DataSource
 * //           Type: "STRING_VALUE",
 * //           Arn: "STRING_VALUE",
 * //           DatabaseName: "STRING_VALUE",
 * //         },
 * //       ],
 * //       Type: "STRING_VALUE",
 * //       AppSource: { // Source
 * //         Type: "STRING_VALUE",
 * //         Url: "STRING_VALUE",
 * //         Username: "STRING_VALUE",
 * //         Password: "STRING_VALUE",
 * //         SshKey: "STRING_VALUE",
 * //         Revision: "STRING_VALUE",
 * //       },
 * //       Domains: [ // Strings
 * //         "STRING_VALUE",
 * //       ],
 * //       EnableSsl: true || false,
 * //       SslConfiguration: { // SslConfiguration
 * //         Certificate: "STRING_VALUE", // required
 * //         PrivateKey: "STRING_VALUE", // required
 * //         Chain: "STRING_VALUE",
 * //       },
 * //       Attributes: { // AppAttributes
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       CreatedAt: "STRING_VALUE",
 * //       Environment: [ // EnvironmentVariables
 * //         { // EnvironmentVariable
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //           Secure: true || false,
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeAppsCommandInput - {@link DescribeAppsCommandInput}
 * @returns {@link DescribeAppsCommandOutput}
 * @see {@link DescribeAppsCommandInput} for command's `input` shape.
 * @see {@link DescribeAppsCommandOutput} for command's `response` shape.
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
export class DescribeAppsCommand extends $Command<
  DescribeAppsCommandInput,
  DescribeAppsCommandOutput,
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
  constructor(readonly input: DescribeAppsCommandInput) {
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
  ): Handler<DescribeAppsCommandInput, DescribeAppsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DescribeAppsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpsWorksClient";
    const commandName = "DescribeAppsCommand";
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
  private serialize(input: DescribeAppsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeAppsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAppsCommandOutput> {
    return de_DescribeAppsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
