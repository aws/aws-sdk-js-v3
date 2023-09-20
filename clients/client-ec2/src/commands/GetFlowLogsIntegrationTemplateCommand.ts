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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { GetFlowLogsIntegrationTemplateRequest, GetFlowLogsIntegrationTemplateResult } from "../models/models_5";
import {
  de_GetFlowLogsIntegrationTemplateCommand,
  se_GetFlowLogsIntegrationTemplateCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetFlowLogsIntegrationTemplateCommand}.
 */
export interface GetFlowLogsIntegrationTemplateCommandInput extends GetFlowLogsIntegrationTemplateRequest {}
/**
 * @public
 *
 * The output of {@link GetFlowLogsIntegrationTemplateCommand}.
 */
export interface GetFlowLogsIntegrationTemplateCommandOutput
  extends GetFlowLogsIntegrationTemplateResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Generates a CloudFormation template that streamlines and automates the integration of VPC flow logs
 *             with Amazon Athena. This make it easier for you to query and gain insights from VPC flow logs data.
 *             Based on the information that you provide, we configure resources in the template to do the following:</p>
 *          <ul>
 *             <li>
 *                <p>Create a table in Athena that maps fields to a custom log format</p>
 *             </li>
 *             <li>
 *                <p>Create a Lambda function that updates the table with new partitions on a daily, weekly, or
 *                     monthly basis</p>
 *             </li>
 *             <li>
 *                <p>Create a table partitioned between two timestamps in the past</p>
 *             </li>
 *             <li>
 *                <p>Create a set of named queries in Athena that you can use to get started quickly</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>
 *                <code>GetFlowLogsIntegrationTemplate</code> does not support integration between
 *                     Amazon Web Services Transit Gateway Flow Logs and Amazon Athena.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetFlowLogsIntegrationTemplateCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetFlowLogsIntegrationTemplateCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // GetFlowLogsIntegrationTemplateRequest
 *   DryRun: true || false,
 *   FlowLogId: "STRING_VALUE", // required
 *   ConfigDeliveryS3DestinationArn: "STRING_VALUE", // required
 *   IntegrateServices: { // IntegrateServices
 *     AthenaIntegrations: [ // AthenaIntegrationsSet
 *       { // AthenaIntegration
 *         IntegrationResultS3DestinationArn: "STRING_VALUE", // required
 *         PartitionLoadFrequency: "none" || "daily" || "weekly" || "monthly", // required
 *         PartitionStartDate: new Date("TIMESTAMP"),
 *         PartitionEndDate: new Date("TIMESTAMP"),
 *       },
 *     ],
 *   },
 * };
 * const command = new GetFlowLogsIntegrationTemplateCommand(input);
 * const response = await client.send(command);
 * // { // GetFlowLogsIntegrationTemplateResult
 * //   Result: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetFlowLogsIntegrationTemplateCommandInput - {@link GetFlowLogsIntegrationTemplateCommandInput}
 * @returns {@link GetFlowLogsIntegrationTemplateCommandOutput}
 * @see {@link GetFlowLogsIntegrationTemplateCommandInput} for command's `input` shape.
 * @see {@link GetFlowLogsIntegrationTemplateCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class GetFlowLogsIntegrationTemplateCommand extends $Command<
  GetFlowLogsIntegrationTemplateCommandInput,
  GetFlowLogsIntegrationTemplateCommandOutput,
  EC2ClientResolvedConfig
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
  constructor(readonly input: GetFlowLogsIntegrationTemplateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetFlowLogsIntegrationTemplateCommandInput, GetFlowLogsIntegrationTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetFlowLogsIntegrationTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetFlowLogsIntegrationTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "GetFlowLogsIntegrationTemplate",
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
  private serialize(
    input: GetFlowLogsIntegrationTemplateCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetFlowLogsIntegrationTemplateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetFlowLogsIntegrationTemplateCommandOutput> {
    return de_GetFlowLogsIntegrationTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
