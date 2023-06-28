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

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { DescribeStackResourceInput, DescribeStackResourceOutput } from "../models/models_0";
import { de_DescribeStackResourceCommand, se_DescribeStackResourceCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeStackResourceCommand}.
 */
export interface DescribeStackResourceCommandInput extends DescribeStackResourceInput {}
/**
 * @public
 *
 * The output of {@link DescribeStackResourceCommand}.
 */
export interface DescribeStackResourceCommandOutput extends DescribeStackResourceOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns a description of the specified resource in the specified stack.</p>
 *          <p>For deleted stacks, DescribeStackResource returns resource information for up to 90 days after the stack has
 *    been deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeStackResourceCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribeStackResourceCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const input = { // DescribeStackResourceInput
 *   StackName: "STRING_VALUE", // required
 *   LogicalResourceId: "STRING_VALUE", // required
 * };
 * const command = new DescribeStackResourceCommand(input);
 * const response = await client.send(command);
 * // { // DescribeStackResourceOutput
 * //   StackResourceDetail: { // StackResourceDetail
 * //     StackName: "STRING_VALUE",
 * //     StackId: "STRING_VALUE",
 * //     LogicalResourceId: "STRING_VALUE", // required
 * //     PhysicalResourceId: "STRING_VALUE",
 * //     ResourceType: "STRING_VALUE", // required
 * //     LastUpdatedTimestamp: new Date("TIMESTAMP"), // required
 * //     ResourceStatus: "CREATE_IN_PROGRESS" || "CREATE_FAILED" || "CREATE_COMPLETE" || "DELETE_IN_PROGRESS" || "DELETE_FAILED" || "DELETE_COMPLETE" || "DELETE_SKIPPED" || "UPDATE_IN_PROGRESS" || "UPDATE_FAILED" || "UPDATE_COMPLETE" || "IMPORT_FAILED" || "IMPORT_COMPLETE" || "IMPORT_IN_PROGRESS" || "IMPORT_ROLLBACK_IN_PROGRESS" || "IMPORT_ROLLBACK_FAILED" || "IMPORT_ROLLBACK_COMPLETE" || "UPDATE_ROLLBACK_IN_PROGRESS" || "UPDATE_ROLLBACK_COMPLETE" || "UPDATE_ROLLBACK_FAILED" || "ROLLBACK_IN_PROGRESS" || "ROLLBACK_COMPLETE" || "ROLLBACK_FAILED", // required
 * //     ResourceStatusReason: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Metadata: "STRING_VALUE",
 * //     DriftInformation: { // StackResourceDriftInformation
 * //       StackResourceDriftStatus: "IN_SYNC" || "MODIFIED" || "DELETED" || "NOT_CHECKED", // required
 * //       LastCheckTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //     ModuleInfo: { // ModuleInfo
 * //       TypeHierarchy: "STRING_VALUE",
 * //       LogicalIdHierarchy: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeStackResourceCommandInput - {@link DescribeStackResourceCommandInput}
 * @returns {@link DescribeStackResourceCommandOutput}
 * @see {@link DescribeStackResourceCommandInput} for command's `input` shape.
 * @see {@link DescribeStackResourceCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 */
export class DescribeStackResourceCommand extends $Command<
  DescribeStackResourceCommandInput,
  DescribeStackResourceCommandOutput,
  CloudFormationClientResolvedConfig
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
  constructor(readonly input: DescribeStackResourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeStackResourceCommandInput, DescribeStackResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeStackResourceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "DescribeStackResourceCommand";
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
  private serialize(input: DescribeStackResourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeStackResourceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeStackResourceCommandOutput> {
    return de_DescribeStackResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
