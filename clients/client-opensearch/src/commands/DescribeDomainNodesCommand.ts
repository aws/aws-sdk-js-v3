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

import { DescribeDomainNodesRequest, DescribeDomainNodesResponse } from "../models/models_0";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { de_DescribeDomainNodesCommand, se_DescribeDomainNodesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link DescribeDomainNodesCommand}.
 */
export interface DescribeDomainNodesCommandInput extends DescribeDomainNodesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDomainNodesCommand}.
 */
export interface DescribeDomainNodesCommandOutput extends DescribeDomainNodesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about domain and nodes, including data nodes, master nodes, ultrawarm
 *    nodes, Availability Zone(s), standby nodes, node configurations, and node states.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, DescribeDomainNodesCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, DescribeDomainNodesCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const input = { // DescribeDomainNodesRequest
 *   DomainName: "STRING_VALUE", // required
 * };
 * const command = new DescribeDomainNodesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDomainNodesResponse
 * //   DomainNodesStatusList: [ // DomainNodesStatusList
 * //     { // DomainNodesStatus
 * //       NodeId: "STRING_VALUE",
 * //       NodeType: "Data" || "Ultrawarm" || "Master",
 * //       AvailabilityZone: "STRING_VALUE",
 * //       InstanceType: "m3.medium.search" || "m3.large.search" || "m3.xlarge.search" || "m3.2xlarge.search" || "m4.large.search" || "m4.xlarge.search" || "m4.2xlarge.search" || "m4.4xlarge.search" || "m4.10xlarge.search" || "m5.large.search" || "m5.xlarge.search" || "m5.2xlarge.search" || "m5.4xlarge.search" || "m5.12xlarge.search" || "m5.24xlarge.search" || "r5.large.search" || "r5.xlarge.search" || "r5.2xlarge.search" || "r5.4xlarge.search" || "r5.12xlarge.search" || "r5.24xlarge.search" || "c5.large.search" || "c5.xlarge.search" || "c5.2xlarge.search" || "c5.4xlarge.search" || "c5.9xlarge.search" || "c5.18xlarge.search" || "t3.nano.search" || "t3.micro.search" || "t3.small.search" || "t3.medium.search" || "t3.large.search" || "t3.xlarge.search" || "t3.2xlarge.search" || "ultrawarm1.medium.search" || "ultrawarm1.large.search" || "ultrawarm1.xlarge.search" || "t2.micro.search" || "t2.small.search" || "t2.medium.search" || "r3.large.search" || "r3.xlarge.search" || "r3.2xlarge.search" || "r3.4xlarge.search" || "r3.8xlarge.search" || "i2.xlarge.search" || "i2.2xlarge.search" || "d2.xlarge.search" || "d2.2xlarge.search" || "d2.4xlarge.search" || "d2.8xlarge.search" || "c4.large.search" || "c4.xlarge.search" || "c4.2xlarge.search" || "c4.4xlarge.search" || "c4.8xlarge.search" || "r4.large.search" || "r4.xlarge.search" || "r4.2xlarge.search" || "r4.4xlarge.search" || "r4.8xlarge.search" || "r4.16xlarge.search" || "i3.large.search" || "i3.xlarge.search" || "i3.2xlarge.search" || "i3.4xlarge.search" || "i3.8xlarge.search" || "i3.16xlarge.search" || "r6g.large.search" || "r6g.xlarge.search" || "r6g.2xlarge.search" || "r6g.4xlarge.search" || "r6g.8xlarge.search" || "r6g.12xlarge.search" || "m6g.large.search" || "m6g.xlarge.search" || "m6g.2xlarge.search" || "m6g.4xlarge.search" || "m6g.8xlarge.search" || "m6g.12xlarge.search" || "c6g.large.search" || "c6g.xlarge.search" || "c6g.2xlarge.search" || "c6g.4xlarge.search" || "c6g.8xlarge.search" || "c6g.12xlarge.search" || "r6gd.large.search" || "r6gd.xlarge.search" || "r6gd.2xlarge.search" || "r6gd.4xlarge.search" || "r6gd.8xlarge.search" || "r6gd.12xlarge.search" || "r6gd.16xlarge.search" || "t4g.small.search" || "t4g.medium.search",
 * //       NodeStatus: "Active" || "StandBy" || "NotAvailable",
 * //       StorageType: "STRING_VALUE",
 * //       StorageVolumeType: "standard" || "gp2" || "io1" || "gp3",
 * //       StorageSize: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeDomainNodesCommandInput - {@link DescribeDomainNodesCommandInput}
 * @returns {@link DescribeDomainNodesCommandOutput}
 * @see {@link DescribeDomainNodesCommandInput} for command's `input` shape.
 * @see {@link DescribeDomainNodesCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link DependencyFailureException} (client fault)
 *  <p>An exception for when a failure in one of the dependencies results in the service being unable to fetch details about the resource.</p>
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>An error occured because the client wanted to access an unsupported operation.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Request processing failed because of an unknown error, exception, or internal failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link OpenSearchServiceException}
 * <p>Base exception class for all service exceptions from OpenSearch service.</p>
 *
 */
export class DescribeDomainNodesCommand extends $Command<
  DescribeDomainNodesCommandInput,
  DescribeDomainNodesCommandOutput,
  OpenSearchClientResolvedConfig
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
  constructor(readonly input: DescribeDomainNodesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpenSearchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDomainNodesCommandInput, DescribeDomainNodesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDomainNodesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpenSearchClient";
    const commandName = "DescribeDomainNodesCommand";
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
  private serialize(input: DescribeDomainNodesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeDomainNodesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDomainNodesCommandOutput> {
    return de_DescribeDomainNodesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
