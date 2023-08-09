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

import { DescribeDeploymentsRequest, DescribeDeploymentsResult } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { de_DescribeDeploymentsCommand, se_DescribeDeploymentsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeDeploymentsCommand}.
 */
export interface DescribeDeploymentsCommandInput extends DescribeDeploymentsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDeploymentsCommand}.
 */
export interface DescribeDeploymentsCommandOutput extends DescribeDeploymentsResult, __MetadataBearer {}

/**
 * @public
 * <p>Requests a description of a specified set of deployments.</p>
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
 * import { OpsWorksClient, DescribeDeploymentsCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DescribeDeploymentsCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const input = { // DescribeDeploymentsRequest
 *   StackId: "STRING_VALUE",
 *   AppId: "STRING_VALUE",
 *   DeploymentIds: [ // Strings
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeDeploymentsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDeploymentsResult
 * //   Deployments: [ // Deployments
 * //     { // Deployment
 * //       DeploymentId: "STRING_VALUE",
 * //       StackId: "STRING_VALUE",
 * //       AppId: "STRING_VALUE",
 * //       CreatedAt: "STRING_VALUE",
 * //       CompletedAt: "STRING_VALUE",
 * //       Duration: Number("int"),
 * //       IamUserArn: "STRING_VALUE",
 * //       Comment: "STRING_VALUE",
 * //       Command: { // DeploymentCommand
 * //         Name: "STRING_VALUE", // required
 * //         Args: { // DeploymentCommandArgs
 * //           "<keys>": [ // Strings
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //       Status: "STRING_VALUE",
 * //       CustomJson: "STRING_VALUE",
 * //       InstanceIds: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeDeploymentsCommandInput - {@link DescribeDeploymentsCommandInput}
 * @returns {@link DescribeDeploymentsCommandOutput}
 * @see {@link DescribeDeploymentsCommandInput} for command's `input` shape.
 * @see {@link DescribeDeploymentsCommandOutput} for command's `response` shape.
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
export class DescribeDeploymentsCommand extends $Command<
  DescribeDeploymentsCommandInput,
  DescribeDeploymentsCommandOutput,
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
  constructor(readonly input: DescribeDeploymentsCommandInput) {
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
  ): Handler<DescribeDeploymentsCommandInput, DescribeDeploymentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDeploymentsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpsWorksClient";
    const commandName = "DescribeDeploymentsCommand";
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
  private serialize(input: DescribeDeploymentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeDeploymentsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDeploymentsCommandOutput> {
    return de_DescribeDeploymentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
