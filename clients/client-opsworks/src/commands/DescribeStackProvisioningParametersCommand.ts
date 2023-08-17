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

import {
  DescribeStackProvisioningParametersRequest,
  DescribeStackProvisioningParametersResult,
} from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import {
  de_DescribeStackProvisioningParametersCommand,
  se_DescribeStackProvisioningParametersCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeStackProvisioningParametersCommand}.
 */
export interface DescribeStackProvisioningParametersCommandInput extends DescribeStackProvisioningParametersRequest {}
/**
 * @public
 *
 * The output of {@link DescribeStackProvisioningParametersCommand}.
 */
export interface DescribeStackProvisioningParametersCommandOutput
  extends DescribeStackProvisioningParametersResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Requests a description of a stack's provisioning parameters.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or
 *       Manage permissions level for the stack or an attached policy that explicitly grants
 *       permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, DescribeStackProvisioningParametersCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DescribeStackProvisioningParametersCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const input = { // DescribeStackProvisioningParametersRequest
 *   StackId: "STRING_VALUE", // required
 * };
 * const command = new DescribeStackProvisioningParametersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeStackProvisioningParametersResult
 * //   AgentInstallerUrl: "STRING_VALUE",
 * //   Parameters: { // Parameters
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeStackProvisioningParametersCommandInput - {@link DescribeStackProvisioningParametersCommandInput}
 * @returns {@link DescribeStackProvisioningParametersCommandOutput}
 * @see {@link DescribeStackProvisioningParametersCommandInput} for command's `input` shape.
 * @see {@link DescribeStackProvisioningParametersCommandOutput} for command's `response` shape.
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
export class DescribeStackProvisioningParametersCommand extends $Command<
  DescribeStackProvisioningParametersCommandInput,
  DescribeStackProvisioningParametersCommandOutput,
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
  constructor(readonly input: DescribeStackProvisioningParametersCommandInput) {
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
  ): Handler<DescribeStackProvisioningParametersCommandInput, DescribeStackProvisioningParametersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeStackProvisioningParametersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpsWorksClient";
    const commandName = "DescribeStackProvisioningParametersCommand";
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
  private serialize(
    input: DescribeStackProvisioningParametersCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeStackProvisioningParametersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeStackProvisioningParametersCommandOutput> {
    return de_DescribeStackProvisioningParametersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
