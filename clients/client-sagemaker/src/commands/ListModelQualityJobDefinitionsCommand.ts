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

import { ListModelQualityJobDefinitionsRequest, ListModelQualityJobDefinitionsResponse } from "../models/models_3";
import {
  de_ListModelQualityJobDefinitionsCommand,
  se_ListModelQualityJobDefinitionsCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListModelQualityJobDefinitionsCommand}.
 */
export interface ListModelQualityJobDefinitionsCommandInput extends ListModelQualityJobDefinitionsRequest {}
/**
 * @public
 *
 * The output of {@link ListModelQualityJobDefinitionsCommand}.
 */
export interface ListModelQualityJobDefinitionsCommandOutput
  extends ListModelQualityJobDefinitionsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets a list of model quality monitoring job definitions in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListModelQualityJobDefinitionsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListModelQualityJobDefinitionsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // ListModelQualityJobDefinitionsRequest
 *   EndpointName: "STRING_VALUE",
 *   SortBy: "Name" || "CreationTime",
 *   SortOrder: "Ascending" || "Descending",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NameContains: "STRING_VALUE",
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 * };
 * const command = new ListModelQualityJobDefinitionsCommand(input);
 * const response = await client.send(command);
 * // { // ListModelQualityJobDefinitionsResponse
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
 * @param ListModelQualityJobDefinitionsCommandInput - {@link ListModelQualityJobDefinitionsCommandInput}
 * @returns {@link ListModelQualityJobDefinitionsCommandOutput}
 * @see {@link ListModelQualityJobDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListModelQualityJobDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class ListModelQualityJobDefinitionsCommand extends $Command<
  ListModelQualityJobDefinitionsCommandInput,
  ListModelQualityJobDefinitionsCommandOutput,
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
  constructor(readonly input: ListModelQualityJobDefinitionsCommandInput) {
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
  ): Handler<ListModelQualityJobDefinitionsCommandInput, ListModelQualityJobDefinitionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListModelQualityJobDefinitionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListModelQualityJobDefinitionsCommand";
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
    input: ListModelQualityJobDefinitionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListModelQualityJobDefinitionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListModelQualityJobDefinitionsCommandOutput> {
    return de_ListModelQualityJobDefinitionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
