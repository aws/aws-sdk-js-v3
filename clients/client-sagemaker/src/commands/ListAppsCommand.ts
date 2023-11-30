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

import { ListAppsRequest, ListAppsResponse } from "../models/models_3";
import { de_ListAppsCommand, se_ListAppsCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAppsCommand}.
 */
export interface ListAppsCommandInput extends ListAppsRequest {}
/**
 * @public
 *
 * The output of {@link ListAppsCommand}.
 */
export interface ListAppsCommandOutput extends ListAppsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists apps.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListAppsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListAppsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // ListAppsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   SortOrder: "Ascending" || "Descending",
 *   SortBy: "CreationTime",
 *   DomainIdEquals: "STRING_VALUE",
 *   UserProfileNameEquals: "STRING_VALUE",
 *   SpaceNameEquals: "STRING_VALUE",
 * };
 * const command = new ListAppsCommand(input);
 * const response = await client.send(command);
 * // { // ListAppsResponse
 * //   Apps: [ // AppList
 * //     { // AppDetails
 * //       DomainId: "STRING_VALUE",
 * //       UserProfileName: "STRING_VALUE",
 * //       AppType: "JupyterServer" || "KernelGateway" || "TensorBoard" || "RStudioServerPro" || "RSessionGateway" || "JupyterLab" || "CodeEditor",
 * //       AppName: "STRING_VALUE",
 * //       Status: "Deleted" || "Deleting" || "Failed" || "InService" || "Pending",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       SpaceName: "STRING_VALUE",
 * //       ResourceSpec: { // ResourceSpec
 * //         SageMakerImageArn: "STRING_VALUE",
 * //         SageMakerImageVersionArn: "STRING_VALUE",
 * //         SageMakerImageVersionAlias: "STRING_VALUE",
 * //         InstanceType: "system" || "ml.t3.micro" || "ml.t3.small" || "ml.t3.medium" || "ml.t3.large" || "ml.t3.xlarge" || "ml.t3.2xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.8xlarge" || "ml.m5.12xlarge" || "ml.m5.16xlarge" || "ml.m5.24xlarge" || "ml.m5d.large" || "ml.m5d.xlarge" || "ml.m5d.2xlarge" || "ml.m5d.4xlarge" || "ml.m5d.8xlarge" || "ml.m5d.12xlarge" || "ml.m5d.16xlarge" || "ml.m5d.24xlarge" || "ml.c5.large" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.12xlarge" || "ml.c5.18xlarge" || "ml.c5.24xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.p3dn.24xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge" || "ml.r5.large" || "ml.r5.xlarge" || "ml.r5.2xlarge" || "ml.r5.4xlarge" || "ml.r5.8xlarge" || "ml.r5.12xlarge" || "ml.r5.16xlarge" || "ml.r5.24xlarge" || "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.16xlarge" || "ml.g5.12xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.geospatial.interactive" || "ml.p4d.24xlarge" || "ml.p4de.24xlarge" || "ml.trn1.2xlarge" || "ml.trn1.32xlarge" || "ml.trn1n.32xlarge",
 * //         LifecycleConfigArn: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAppsCommandInput - {@link ListAppsCommandInput}
 * @returns {@link ListAppsCommandOutput}
 * @see {@link ListAppsCommandInput} for command's `input` shape.
 * @see {@link ListAppsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class ListAppsCommand extends $Command<
  ListAppsCommandInput,
  ListAppsCommandOutput,
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
  constructor(readonly input: ListAppsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAppsCommandInput, ListAppsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListAppsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListAppsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "ListApps",
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
  private serialize(input: ListAppsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListAppsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAppsCommandOutput> {
    return de_ListAppsCommand(output, context);
  }
}
