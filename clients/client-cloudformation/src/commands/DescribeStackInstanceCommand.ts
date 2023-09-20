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

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { DescribeStackInstanceInput, DescribeStackInstanceOutput } from "../models/models_0";
import { de_DescribeStackInstanceCommand, se_DescribeStackInstanceCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeStackInstanceCommand}.
 */
export interface DescribeStackInstanceCommandInput extends DescribeStackInstanceInput {}
/**
 * @public
 *
 * The output of {@link DescribeStackInstanceCommand}.
 */
export interface DescribeStackInstanceCommandOutput extends DescribeStackInstanceOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns the stack instance that's associated with the specified StackSet, Amazon Web Services account, and
 *     Amazon Web Services Region.</p>
 *          <p>For a list of stack instances that are associated with a specific StackSet, use <a>ListStackInstances</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeStackInstanceCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribeStackInstanceCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const input = { // DescribeStackInstanceInput
 *   StackSetName: "STRING_VALUE", // required
 *   StackInstanceAccount: "STRING_VALUE", // required
 *   StackInstanceRegion: "STRING_VALUE", // required
 *   CallAs: "SELF" || "DELEGATED_ADMIN",
 * };
 * const command = new DescribeStackInstanceCommand(input);
 * const response = await client.send(command);
 * // { // DescribeStackInstanceOutput
 * //   StackInstance: { // StackInstance
 * //     StackSetId: "STRING_VALUE",
 * //     Region: "STRING_VALUE",
 * //     Account: "STRING_VALUE",
 * //     StackId: "STRING_VALUE",
 * //     ParameterOverrides: [ // Parameters
 * //       { // Parameter
 * //         ParameterKey: "STRING_VALUE",
 * //         ParameterValue: "STRING_VALUE",
 * //         UsePreviousValue: true || false,
 * //         ResolvedValue: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Status: "CURRENT" || "OUTDATED" || "INOPERABLE",
 * //     StackInstanceStatus: { // StackInstanceComprehensiveStatus
 * //       DetailedStatus: "PENDING" || "RUNNING" || "SUCCEEDED" || "FAILED" || "CANCELLED" || "INOPERABLE" || "SKIPPED_SUSPENDED_ACCOUNT",
 * //     },
 * //     StatusReason: "STRING_VALUE",
 * //     OrganizationalUnitId: "STRING_VALUE",
 * //     DriftStatus: "DRIFTED" || "IN_SYNC" || "UNKNOWN" || "NOT_CHECKED",
 * //     LastDriftCheckTimestamp: new Date("TIMESTAMP"),
 * //     LastOperationId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeStackInstanceCommandInput - {@link DescribeStackInstanceCommandInput}
 * @returns {@link DescribeStackInstanceCommandOutput}
 * @see {@link DescribeStackInstanceCommandInput} for command's `input` shape.
 * @see {@link DescribeStackInstanceCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link StackInstanceNotFoundException} (client fault)
 *  <p>The specified stack instance doesn't exist.</p>
 *
 * @throws {@link StackSetNotFoundException} (client fault)
 *  <p>The specified stack set doesn't exist.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 */
export class DescribeStackInstanceCommand extends $Command<
  DescribeStackInstanceCommandInput,
  DescribeStackInstanceCommandOutput,
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
  constructor(readonly input: DescribeStackInstanceCommandInput) {
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
  ): Handler<DescribeStackInstanceCommandInput, DescribeStackInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeStackInstanceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "DescribeStackInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CloudFormation",
        operation: "DescribeStackInstance",
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
  private serialize(input: DescribeStackInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeStackInstanceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeStackInstanceCommandOutput> {
    return de_DescribeStackInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
