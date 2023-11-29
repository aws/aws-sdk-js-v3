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

import { ListClusterNodesRequest, ListClusterNodesResponse } from "../models/models_3";
import { de_ListClusterNodesCommand, se_ListClusterNodesCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListClusterNodesCommand}.
 */
export interface ListClusterNodesCommandInput extends ListClusterNodesRequest {}
/**
 * @public
 *
 * The output of {@link ListClusterNodesCommand}.
 */
export interface ListClusterNodesCommandOutput extends ListClusterNodesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the list of instances (also called <i>nodes</i> interchangeably)
 *          in a SageMaker HyperPod cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListClusterNodesCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListClusterNodesCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // ListClusterNodesRequest
 *   ClusterName: "STRING_VALUE", // required
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   InstanceGroupNameContains: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   SortBy: "CREATION_TIME" || "NAME",
 *   SortOrder: "Ascending" || "Descending",
 * };
 * const command = new ListClusterNodesCommand(input);
 * const response = await client.send(command);
 * // { // ListClusterNodesResponse
 * //   NextToken: "STRING_VALUE", // required
 * //   ClusterNodeSummaries: [ // ClusterNodeSummaries // required
 * //     { // ClusterNodeSummary
 * //       InstanceGroupName: "STRING_VALUE", // required
 * //       InstanceId: "STRING_VALUE", // required
 * //       InstanceType: "ml.p4d.24xlarge" || "ml.p4de.24xlarge" || "ml.p5.48xlarge" || "ml.trn1.32xlarge" || "ml.trn1n.32xlarge" || "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.12xlarge" || "ml.g5.16xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.c5.large" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.12xlarge" || "ml.c5.18xlarge" || "ml.c5.24xlarge" || "ml.c5n.large" || "ml.c5n.2xlarge" || "ml.c5n.4xlarge" || "ml.c5n.9xlarge" || "ml.c5n.18xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.8xlarge" || "ml.m5.12xlarge" || "ml.m5.16xlarge" || "ml.m5.24xlarge" || "ml.t3.medium" || "ml.t3.large" || "ml.t3.xlarge" || "ml.t3.2xlarge", // required
 * //       LaunchTime: new Date("TIMESTAMP"), // required
 * //       InstanceStatus: { // ClusterInstanceStatusDetails
 * //         Status: "Running" || "Failure" || "Pending" || "ShuttingDown" || "SystemUpdating", // required
 * //         Message: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListClusterNodesCommandInput - {@link ListClusterNodesCommandInput}
 * @returns {@link ListClusterNodesCommandOutput}
 * @see {@link ListClusterNodesCommandInput} for command's `input` shape.
 * @see {@link ListClusterNodesCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class ListClusterNodesCommand extends $Command<
  ListClusterNodesCommandInput,
  ListClusterNodesCommandOutput,
  SageMakerClientResolvedConfig
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
  constructor(readonly input: ListClusterNodesCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListClusterNodesCommandInput, ListClusterNodesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListClusterNodesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListClusterNodesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "ListClusterNodes",
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
  private serialize(input: ListClusterNodesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListClusterNodesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListClusterNodesCommandOutput> {
    return de_ListClusterNodesCommand(output, context);
  }
}
