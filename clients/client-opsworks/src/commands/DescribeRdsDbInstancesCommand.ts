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

import { DescribeRdsDbInstancesRequest, DescribeRdsDbInstancesResult } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { de_DescribeRdsDbInstancesCommand, se_DescribeRdsDbInstancesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeRdsDbInstancesCommand}.
 */
export interface DescribeRdsDbInstancesCommandInput extends DescribeRdsDbInstancesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRdsDbInstancesCommand}.
 */
export interface DescribeRdsDbInstancesCommandOutput extends DescribeRdsDbInstancesResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes Amazon RDS instances.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or
 *       Manage permissions level for the stack, or an attached policy that explicitly grants
 *       permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 *          <p>This call accepts only one resource-identifying parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, DescribeRdsDbInstancesCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DescribeRdsDbInstancesCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const input = { // DescribeRdsDbInstancesRequest
 *   StackId: "STRING_VALUE", // required
 *   RdsDbInstanceArns: [ // Strings
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeRdsDbInstancesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRdsDbInstancesResult
 * //   RdsDbInstances: [ // RdsDbInstances
 * //     { // RdsDbInstance
 * //       RdsDbInstanceArn: "STRING_VALUE",
 * //       DbInstanceIdentifier: "STRING_VALUE",
 * //       DbUser: "STRING_VALUE",
 * //       DbPassword: "STRING_VALUE",
 * //       Region: "STRING_VALUE",
 * //       Address: "STRING_VALUE",
 * //       Engine: "STRING_VALUE",
 * //       StackId: "STRING_VALUE",
 * //       MissingOnRds: true || false,
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeRdsDbInstancesCommandInput - {@link DescribeRdsDbInstancesCommandInput}
 * @returns {@link DescribeRdsDbInstancesCommandOutput}
 * @see {@link DescribeRdsDbInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeRdsDbInstancesCommandOutput} for command's `response` shape.
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
export class DescribeRdsDbInstancesCommand extends $Command<
  DescribeRdsDbInstancesCommandInput,
  DescribeRdsDbInstancesCommandOutput,
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
  constructor(readonly input: DescribeRdsDbInstancesCommandInput) {
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
  ): Handler<DescribeRdsDbInstancesCommandInput, DescribeRdsDbInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeRdsDbInstancesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpsWorksClient";
    const commandName = "DescribeRdsDbInstancesCommand";
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
  private serialize(input: DescribeRdsDbInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeRdsDbInstancesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeRdsDbInstancesCommandOutput> {
    return de_DescribeRdsDbInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
