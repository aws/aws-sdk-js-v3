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
import { DescribeElasticGpusRequest, DescribeElasticGpusResult } from "../models/models_3";
import { de_DescribeElasticGpusCommand, se_DescribeElasticGpusCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeElasticGpusCommand}.
 */
export interface DescribeElasticGpusCommandInput extends DescribeElasticGpusRequest {}
/**
 * @public
 *
 * The output of {@link DescribeElasticGpusCommand}.
 */
export interface DescribeElasticGpusCommandOutput extends DescribeElasticGpusResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes the Elastic Graphics accelerator associated with your instances. For more information
 *             about Elastic Graphics, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/elastic-graphics.html">Amazon Elastic Graphics</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeElasticGpusCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeElasticGpusCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeElasticGpusRequest
 *   ElasticGpuIds: [ // ElasticGpuIdSet
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeElasticGpusCommand(input);
 * const response = await client.send(command);
 * // { // DescribeElasticGpusResult
 * //   ElasticGpuSet: [ // ElasticGpuSet
 * //     { // ElasticGpus
 * //       ElasticGpuId: "STRING_VALUE",
 * //       AvailabilityZone: "STRING_VALUE",
 * //       ElasticGpuType: "STRING_VALUE",
 * //       ElasticGpuHealth: { // ElasticGpuHealth
 * //         Status: "OK" || "IMPAIRED",
 * //       },
 * //       ElasticGpuState: "ATTACHED",
 * //       InstanceId: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   MaxResults: Number("int"),
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeElasticGpusCommandInput - {@link DescribeElasticGpusCommandInput}
 * @returns {@link DescribeElasticGpusCommandOutput}
 * @see {@link DescribeElasticGpusCommandInput} for command's `input` shape.
 * @see {@link DescribeElasticGpusCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeElasticGpusCommand extends $Command<
  DescribeElasticGpusCommandInput,
  DescribeElasticGpusCommandOutput,
  EC2ClientResolvedConfig
> {
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
  constructor(readonly input: DescribeElasticGpusCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeElasticGpusCommandInput, DescribeElasticGpusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeElasticGpusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeElasticGpusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DescribeElasticGpus",
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
  private serialize(input: DescribeElasticGpusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeElasticGpusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeElasticGpusCommandOutput> {
    return de_DescribeElasticGpusCommand(output, context);
  }
}
