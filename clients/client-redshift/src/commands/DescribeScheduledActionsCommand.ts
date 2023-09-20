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

import { DescribeScheduledActionsMessage, ScheduledActionsMessage } from "../models/models_1";
import { de_DescribeScheduledActionsCommand, se_DescribeScheduledActionsCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeScheduledActionsCommand}.
 */
export interface DescribeScheduledActionsCommandInput extends DescribeScheduledActionsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeScheduledActionsCommand}.
 */
export interface DescribeScheduledActionsCommandOutput extends ScheduledActionsMessage, __MetadataBearer {}

/**
 * @public
 * <p>Describes properties of scheduled actions.
 *              </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeScheduledActionsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeScheduledActionsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // DescribeScheduledActionsMessage
 *   ScheduledActionName: "STRING_VALUE",
 *   TargetActionType: "ResizeCluster" || "PauseCluster" || "ResumeCluster",
 *   StartTime: new Date("TIMESTAMP"),
 *   EndTime: new Date("TIMESTAMP"),
 *   Active: true || false,
 *   Filters: [ // ScheduledActionFilterList
 *     { // ScheduledActionFilter
 *       Name: "cluster-identifier" || "iam-role", // required
 *       Values: [ // ValueStringList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   Marker: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 * };
 * const command = new DescribeScheduledActionsCommand(input);
 * const response = await client.send(command);
 * // { // ScheduledActionsMessage
 * //   Marker: "STRING_VALUE",
 * //   ScheduledActions: [ // ScheduledActionList
 * //     { // ScheduledAction
 * //       ScheduledActionName: "STRING_VALUE",
 * //       TargetAction: { // ScheduledActionType
 * //         ResizeCluster: { // ResizeClusterMessage
 * //           ClusterIdentifier: "STRING_VALUE", // required
 * //           ClusterType: "STRING_VALUE",
 * //           NodeType: "STRING_VALUE",
 * //           NumberOfNodes: Number("int"),
 * //           Classic: true || false,
 * //           ReservedNodeId: "STRING_VALUE",
 * //           TargetReservedNodeOfferingId: "STRING_VALUE",
 * //         },
 * //         PauseCluster: { // PauseClusterMessage
 * //           ClusterIdentifier: "STRING_VALUE", // required
 * //         },
 * //         ResumeCluster: { // ResumeClusterMessage
 * //           ClusterIdentifier: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       Schedule: "STRING_VALUE",
 * //       IamRole: "STRING_VALUE",
 * //       ScheduledActionDescription: "STRING_VALUE",
 * //       State: "ACTIVE" || "DISABLED",
 * //       NextInvocations: [ // ScheduledActionTimeList
 * //         new Date("TIMESTAMP"),
 * //       ],
 * //       StartTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeScheduledActionsCommandInput - {@link DescribeScheduledActionsCommandInput}
 * @returns {@link DescribeScheduledActionsCommandOutput}
 * @see {@link DescribeScheduledActionsCommandInput} for command's `input` shape.
 * @see {@link DescribeScheduledActionsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ScheduledActionNotFoundFault} (client fault)
 *  <p>The scheduled action cannot be found. </p>
 *
 * @throws {@link UnauthorizedOperation} (client fault)
 *  <p>Your account is not authorized to perform the requested operation.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 */
export class DescribeScheduledActionsCommand extends $Command<
  DescribeScheduledActionsCommandInput,
  DescribeScheduledActionsCommandOutput,
  RedshiftClientResolvedConfig
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
  constructor(readonly input: DescribeScheduledActionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeScheduledActionsCommandInput, DescribeScheduledActionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeScheduledActionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DescribeScheduledActionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RedshiftServiceVersion20121201",
        operation: "DescribeScheduledActions",
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
  private serialize(input: DescribeScheduledActionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeScheduledActionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeScheduledActionsCommandOutput> {
    return de_DescribeScheduledActionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
