// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeNetworkInsightsAnalysesRequest, DescribeNetworkInsightsAnalysesResult } from "../models/models_4";
import {
  de_DescribeNetworkInsightsAnalysesCommand,
  se_DescribeNetworkInsightsAnalysesCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 *
 * The input for {@link DescribeNetworkInsightsAnalysesCommand}.
 */
export interface DescribeNetworkInsightsAnalysesCommandInput extends DescribeNetworkInsightsAnalysesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeNetworkInsightsAnalysesCommand}.
 */
export interface DescribeNetworkInsightsAnalysesCommandOutput
  extends DescribeNetworkInsightsAnalysesResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes one or more of your network insights analyses.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeNetworkInsightsAnalysesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeNetworkInsightsAnalysesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeNetworkInsightsAnalysesRequest
 *   NetworkInsightsAnalysisIds: [ // NetworkInsightsAnalysisIdList
 *     "STRING_VALUE",
 *   ],
 *   NetworkInsightsPathId: "STRING_VALUE",
 *   AnalysisStartTime: new Date("TIMESTAMP"),
 *   AnalysisEndTime: new Date("TIMESTAMP"),
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
 * const command = new DescribeNetworkInsightsAnalysesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeNetworkInsightsAnalysesCommandInput - {@link DescribeNetworkInsightsAnalysesCommandInput}
 * @returns {@link DescribeNetworkInsightsAnalysesCommandOutput}
 * @see {@link DescribeNetworkInsightsAnalysesCommandInput} for command's `input` shape.
 * @see {@link DescribeNetworkInsightsAnalysesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 *
 */
export class DescribeNetworkInsightsAnalysesCommand extends $Command<
  DescribeNetworkInsightsAnalysesCommandInput,
  DescribeNetworkInsightsAnalysesCommandOutput,
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
  constructor(readonly input: DescribeNetworkInsightsAnalysesCommandInput) {
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
  ): Handler<DescribeNetworkInsightsAnalysesCommandInput, DescribeNetworkInsightsAnalysesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeNetworkInsightsAnalysesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeNetworkInsightsAnalysesCommand";
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
    input: DescribeNetworkInsightsAnalysesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeNetworkInsightsAnalysesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeNetworkInsightsAnalysesCommandOutput> {
    return de_DescribeNetworkInsightsAnalysesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
