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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  DescribeNetworkInsightsAccessScopeAnalysesRequest,
  DescribeNetworkInsightsAccessScopeAnalysesResult,
} from "../models/models_4";
import {
  de_DescribeNetworkInsightsAccessScopeAnalysesCommand,
  se_DescribeNetworkInsightsAccessScopeAnalysesCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeNetworkInsightsAccessScopeAnalysesCommand}.
 */
export interface DescribeNetworkInsightsAccessScopeAnalysesCommandInput
  extends DescribeNetworkInsightsAccessScopeAnalysesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeNetworkInsightsAccessScopeAnalysesCommand}.
 */
export interface DescribeNetworkInsightsAccessScopeAnalysesCommandOutput
  extends DescribeNetworkInsightsAccessScopeAnalysesResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes the specified Network Access Scope analyses.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeNetworkInsightsAccessScopeAnalysesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeNetworkInsightsAccessScopeAnalysesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeNetworkInsightsAccessScopeAnalysesRequest
 *   NetworkInsightsAccessScopeAnalysisIds: [ // NetworkInsightsAccessScopeAnalysisIdList
 *     "STRING_VALUE",
 *   ],
 *   NetworkInsightsAccessScopeId: "STRING_VALUE",
 *   AnalysisStartTimeBegin: new Date("TIMESTAMP"),
 *   AnalysisStartTimeEnd: new Date("TIMESTAMP"),
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   DryRun: true || false,
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeNetworkInsightsAccessScopeAnalysesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeNetworkInsightsAccessScopeAnalysesResult
 * //   NetworkInsightsAccessScopeAnalyses: [ // NetworkInsightsAccessScopeAnalysisList
 * //     { // NetworkInsightsAccessScopeAnalysis
 * //       NetworkInsightsAccessScopeAnalysisId: "STRING_VALUE",
 * //       NetworkInsightsAccessScopeAnalysisArn: "STRING_VALUE",
 * //       NetworkInsightsAccessScopeId: "STRING_VALUE",
 * //       Status: "running" || "succeeded" || "failed",
 * //       StatusMessage: "STRING_VALUE",
 * //       WarningMessage: "STRING_VALUE",
 * //       StartDate: new Date("TIMESTAMP"),
 * //       EndDate: new Date("TIMESTAMP"),
 * //       FindingsFound: "true" || "false" || "unknown",
 * //       AnalyzedEniCount: Number("int"),
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeNetworkInsightsAccessScopeAnalysesCommandInput - {@link DescribeNetworkInsightsAccessScopeAnalysesCommandInput}
 * @returns {@link DescribeNetworkInsightsAccessScopeAnalysesCommandOutput}
 * @see {@link DescribeNetworkInsightsAccessScopeAnalysesCommandInput} for command's `input` shape.
 * @see {@link DescribeNetworkInsightsAccessScopeAnalysesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeNetworkInsightsAccessScopeAnalysesCommand extends $Command<
  DescribeNetworkInsightsAccessScopeAnalysesCommandInput,
  DescribeNetworkInsightsAccessScopeAnalysesCommandOutput,
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
  constructor(readonly input: DescribeNetworkInsightsAccessScopeAnalysesCommandInput) {
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
  ): Handler<
    DescribeNetworkInsightsAccessScopeAnalysesCommandInput,
    DescribeNetworkInsightsAccessScopeAnalysesCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DescribeNetworkInsightsAccessScopeAnalysesCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeNetworkInsightsAccessScopeAnalysesCommand";
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
    input: DescribeNetworkInsightsAccessScopeAnalysesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeNetworkInsightsAccessScopeAnalysesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeNetworkInsightsAccessScopeAnalysesCommandOutput> {
    return de_DescribeNetworkInsightsAccessScopeAnalysesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
