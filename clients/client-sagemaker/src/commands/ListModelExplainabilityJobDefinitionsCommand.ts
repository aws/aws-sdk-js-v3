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

import {
  ListModelExplainabilityJobDefinitionsRequest,
  ListModelExplainabilityJobDefinitionsResponse,
} from "../models/models_3";
import {
  de_ListModelExplainabilityJobDefinitionsCommand,
  se_ListModelExplainabilityJobDefinitionsCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListModelExplainabilityJobDefinitionsCommand}.
 */
export interface ListModelExplainabilityJobDefinitionsCommandInput
  extends ListModelExplainabilityJobDefinitionsRequest {}
/**
 * @public
 *
 * The output of {@link ListModelExplainabilityJobDefinitionsCommand}.
 */
export interface ListModelExplainabilityJobDefinitionsCommandOutput
  extends ListModelExplainabilityJobDefinitionsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Lists model explainability job definitions that satisfy various filters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListModelExplainabilityJobDefinitionsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListModelExplainabilityJobDefinitionsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // ListModelExplainabilityJobDefinitionsRequest
 *   EndpointName: "STRING_VALUE",
 *   SortBy: "Name" || "CreationTime",
 *   SortOrder: "Ascending" || "Descending",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NameContains: "STRING_VALUE",
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 * };
 * const command = new ListModelExplainabilityJobDefinitionsCommand(input);
 * const response = await client.send(command);
 * // { // ListModelExplainabilityJobDefinitionsResponse
 * //   JobDefinitionSummaries: [ // MonitoringJobDefinitionSummaryList // required
 * //     { // MonitoringJobDefinitionSummary
 * //       MonitoringJobDefinitionName: "STRING_VALUE", // required
 * //       MonitoringJobDefinitionArn: "STRING_VALUE", // required
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       EndpointName: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListModelExplainabilityJobDefinitionsCommandInput - {@link ListModelExplainabilityJobDefinitionsCommandInput}
 * @returns {@link ListModelExplainabilityJobDefinitionsCommandOutput}
 * @see {@link ListModelExplainabilityJobDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListModelExplainabilityJobDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class ListModelExplainabilityJobDefinitionsCommand extends $Command<
  ListModelExplainabilityJobDefinitionsCommandInput,
  ListModelExplainabilityJobDefinitionsCommandOutput,
  SageMakerClientResolvedConfig
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
  constructor(readonly input: ListModelExplainabilityJobDefinitionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListModelExplainabilityJobDefinitionsCommandInput, ListModelExplainabilityJobDefinitionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListModelExplainabilityJobDefinitionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListModelExplainabilityJobDefinitionsCommand";
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
    input: ListModelExplainabilityJobDefinitionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListModelExplainabilityJobDefinitionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListModelExplainabilityJobDefinitionsCommandOutput> {
    return de_ListModelExplainabilityJobDefinitionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
