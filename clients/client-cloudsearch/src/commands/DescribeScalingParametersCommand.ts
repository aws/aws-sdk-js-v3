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

import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { DescribeScalingParametersRequest, DescribeScalingParametersResponse } from "../models/models_0";
import { de_DescribeScalingParametersCommand, se_DescribeScalingParametersCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeScalingParametersCommand}.
 */
export interface DescribeScalingParametersCommandInput extends DescribeScalingParametersRequest {}
/**
 * @public
 *
 * The output of {@link DescribeScalingParametersCommand}.
 */
export interface DescribeScalingParametersCommandOutput extends DescribeScalingParametersResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets the scaling parameters configured for a domain. A domain's scaling parameters specify the desired search instance type and replication count. For more information, see   <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-scaling-options.html" target="_blank">Configuring Scaling Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, DescribeScalingParametersCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, DescribeScalingParametersCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * const client = new CloudSearchClient(config);
 * const input = { // DescribeScalingParametersRequest
 *   DomainName: "STRING_VALUE", // required
 * };
 * const command = new DescribeScalingParametersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeScalingParametersResponse
 * //   ScalingParameters: { // ScalingParametersStatus
 * //     Options: { // ScalingParameters
 * //       DesiredInstanceType: "search.m1.small" || "search.m1.large" || "search.m2.xlarge" || "search.m2.2xlarge" || "search.m3.medium" || "search.m3.large" || "search.m3.xlarge" || "search.m3.2xlarge" || "search.small" || "search.medium" || "search.large" || "search.xlarge" || "search.2xlarge" || "search.previousgeneration.small" || "search.previousgeneration.large" || "search.previousgeneration.xlarge" || "search.previousgeneration.2xlarge",
 * //       DesiredReplicationCount: Number("int"),
 * //       DesiredPartitionCount: Number("int"),
 * //     },
 * //     Status: { // OptionStatus
 * //       CreationDate: new Date("TIMESTAMP"), // required
 * //       UpdateDate: new Date("TIMESTAMP"), // required
 * //       UpdateVersion: Number("int"),
 * //       State: "RequiresIndexDocuments" || "Processing" || "Active" || "FailedToValidate", // required
 * //       PendingDeletion: true || false,
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeScalingParametersCommandInput - {@link DescribeScalingParametersCommandInput}
 * @returns {@link DescribeScalingParametersCommandOutput}
 * @see {@link DescribeScalingParametersCommandInput} for command's `input` shape.
 * @see {@link DescribeScalingParametersCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchClientResolvedConfig | config} for CloudSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>An internal error occurred while processing the request. If this problem persists,
 *       report an issue from the <a href="http://status.aws.amazon.com/" target="_blank">Service Health Dashboard</a>.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because it attempted to reference a resource that does not exist.</p>
 *
 * @throws {@link CloudSearchServiceException}
 * <p>Base exception class for all service exceptions from CloudSearch service.</p>
 *
 */
export class DescribeScalingParametersCommand extends $Command<
  DescribeScalingParametersCommandInput,
  DescribeScalingParametersCommandOutput,
  CloudSearchClientResolvedConfig
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
  constructor(readonly input: DescribeScalingParametersCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudSearchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeScalingParametersCommandInput, DescribeScalingParametersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeScalingParametersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudSearchClient";
    const commandName = "DescribeScalingParametersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "A9SearchCloudConfigService2013",
        operation: "DescribeScalingParameters",
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
  private serialize(input: DescribeScalingParametersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeScalingParametersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeScalingParametersCommandOutput> {
    return de_DescribeScalingParametersCommand(output, context);
  }
}
