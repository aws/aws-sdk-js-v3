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
import { DescribeChangeSetHooksInput, DescribeChangeSetHooksOutput } from "../models/models_0";
import { de_DescribeChangeSetHooksCommand, se_DescribeChangeSetHooksCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeChangeSetHooksCommand}.
 */
export interface DescribeChangeSetHooksCommandInput extends DescribeChangeSetHooksInput {}
/**
 * @public
 *
 * The output of {@link DescribeChangeSetHooksCommand}.
 */
export interface DescribeChangeSetHooksCommandOutput extends DescribeChangeSetHooksOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns hook-related information for the change set and a list of changes that CloudFormation makes when you
 *    run the change set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeChangeSetHooksCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribeChangeSetHooksCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const input = { // DescribeChangeSetHooksInput
 *   ChangeSetName: "STRING_VALUE", // required
 *   StackName: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   LogicalResourceId: "STRING_VALUE",
 * };
 * const command = new DescribeChangeSetHooksCommand(input);
 * const response = await client.send(command);
 * // { // DescribeChangeSetHooksOutput
 * //   ChangeSetId: "STRING_VALUE",
 * //   ChangeSetName: "STRING_VALUE",
 * //   Hooks: [ // ChangeSetHooks
 * //     { // ChangeSetHook
 * //       InvocationPoint: "PRE_PROVISION",
 * //       FailureMode: "FAIL" || "WARN",
 * //       TypeName: "STRING_VALUE",
 * //       TypeVersionId: "STRING_VALUE",
 * //       TypeConfigurationVersionId: "STRING_VALUE",
 * //       TargetDetails: { // ChangeSetHookTargetDetails
 * //         TargetType: "RESOURCE",
 * //         ResourceTargetDetails: { // ChangeSetHookResourceTargetDetails
 * //           LogicalResourceId: "STRING_VALUE",
 * //           ResourceType: "STRING_VALUE",
 * //           ResourceAction: "Add" || "Modify" || "Remove" || "Import" || "Dynamic",
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   Status: "PLANNING" || "PLANNED" || "UNAVAILABLE",
 * //   NextToken: "STRING_VALUE",
 * //   StackId: "STRING_VALUE",
 * //   StackName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeChangeSetHooksCommandInput - {@link DescribeChangeSetHooksCommandInput}
 * @returns {@link DescribeChangeSetHooksCommandOutput}
 * @see {@link DescribeChangeSetHooksCommandInput} for command's `input` shape.
 * @see {@link DescribeChangeSetHooksCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link ChangeSetNotFoundException} (client fault)
 *  <p>The specified change set name or ID doesn't exit. To view valid change sets for a stack, use the
 *     <code>ListChangeSets</code> operation.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 */
export class DescribeChangeSetHooksCommand extends $Command<
  DescribeChangeSetHooksCommandInput,
  DescribeChangeSetHooksCommandOutput,
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
  constructor(readonly input: DescribeChangeSetHooksCommandInput) {
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
  ): Handler<DescribeChangeSetHooksCommandInput, DescribeChangeSetHooksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeChangeSetHooksCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "DescribeChangeSetHooksCommand";
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
  private serialize(input: DescribeChangeSetHooksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeChangeSetHooksCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeChangeSetHooksCommandOutput> {
    return de_DescribeChangeSetHooksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
