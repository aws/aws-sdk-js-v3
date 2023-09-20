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

import {
  ChimeSDKMediaPipelinesClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChimeSDKMediaPipelinesClient";
import {
  ListMediaInsightsPipelineConfigurationsRequest,
  ListMediaInsightsPipelineConfigurationsResponse,
  ListMediaInsightsPipelineConfigurationsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_ListMediaInsightsPipelineConfigurationsCommand,
  se_ListMediaInsightsPipelineConfigurationsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListMediaInsightsPipelineConfigurationsCommand}.
 */
export interface ListMediaInsightsPipelineConfigurationsCommandInput
  extends ListMediaInsightsPipelineConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListMediaInsightsPipelineConfigurationsCommand}.
 */
export interface ListMediaInsightsPipelineConfigurationsCommandOutput
  extends ListMediaInsightsPipelineConfigurationsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Lists the available media insights pipeline configurations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMediaPipelinesClient, ListMediaInsightsPipelineConfigurationsCommand } from "@aws-sdk/client-chime-sdk-media-pipelines"; // ES Modules import
 * // const { ChimeSDKMediaPipelinesClient, ListMediaInsightsPipelineConfigurationsCommand } = require("@aws-sdk/client-chime-sdk-media-pipelines"); // CommonJS import
 * const client = new ChimeSDKMediaPipelinesClient(config);
 * const input = { // ListMediaInsightsPipelineConfigurationsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListMediaInsightsPipelineConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListMediaInsightsPipelineConfigurationsResponse
 * //   MediaInsightsPipelineConfigurations: [ // MediaInsightsPipelineConfigurationSummaryList
 * //     { // MediaInsightsPipelineConfigurationSummary
 * //       MediaInsightsPipelineConfigurationName: "STRING_VALUE",
 * //       MediaInsightsPipelineConfigurationId: "STRING_VALUE",
 * //       MediaInsightsPipelineConfigurationArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMediaInsightsPipelineConfigurationsCommandInput - {@link ListMediaInsightsPipelineConfigurationsCommandInput}
 * @returns {@link ListMediaInsightsPipelineConfigurationsCommandOutput}
 * @see {@link ListMediaInsightsPipelineConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListMediaInsightsPipelineConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMediaPipelinesClientResolvedConfig | config} for ChimeSDKMediaPipelinesClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>The request exceeds the resource limit.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link ChimeSDKMediaPipelinesServiceException}
 * <p>Base exception class for all service exceptions from ChimeSDKMediaPipelines service.</p>
 *
 */
export class ListMediaInsightsPipelineConfigurationsCommand extends $Command<
  ListMediaInsightsPipelineConfigurationsCommandInput,
  ListMediaInsightsPipelineConfigurationsCommandOutput,
  ChimeSDKMediaPipelinesClientResolvedConfig
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
  constructor(readonly input: ListMediaInsightsPipelineConfigurationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeSDKMediaPipelinesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListMediaInsightsPipelineConfigurationsCommandInput,
    ListMediaInsightsPipelineConfigurationsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        ListMediaInsightsPipelineConfigurationsCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKMediaPipelinesClient";
    const commandName = "ListMediaInsightsPipelineConfigurationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: ListMediaInsightsPipelineConfigurationsResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "ChimeSDKMediaPipelinesService",
        operation: "ListMediaInsightsPipelineConfigurations",
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
    input: ListMediaInsightsPipelineConfigurationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListMediaInsightsPipelineConfigurationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListMediaInsightsPipelineConfigurationsCommandOutput> {
    return de_ListMediaInsightsPipelineConfigurationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
