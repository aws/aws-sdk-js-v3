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

import { BedrockClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockClient";
import { ListProvisionedModelThroughputsRequest, ListProvisionedModelThroughputsResponse } from "../models/models_0";
import {
  de_ListProvisionedModelThroughputsCommand,
  se_ListProvisionedModelThroughputsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListProvisionedModelThroughputsCommand}.
 */
export interface ListProvisionedModelThroughputsCommandInput extends ListProvisionedModelThroughputsRequest {}
/**
 * @public
 *
 * The output of {@link ListProvisionedModelThroughputsCommand}.
 */
export interface ListProvisionedModelThroughputsCommandOutput
  extends ListProvisionedModelThroughputsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>List the provisioned capacities. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-service.html">Provisioned throughput</a> in the Bedrock User Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, ListProvisionedModelThroughputsCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, ListProvisionedModelThroughputsCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * const client = new BedrockClient(config);
 * const input = { // ListProvisionedModelThroughputsRequest
 *   creationTimeAfter: new Date("TIMESTAMP"),
 *   creationTimeBefore: new Date("TIMESTAMP"),
 *   statusEquals: "Creating" || "InService" || "Updating" || "Failed",
 *   modelArnEquals: "STRING_VALUE",
 *   nameContains: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   sortBy: "CreationTime",
 *   sortOrder: "Ascending" || "Descending",
 * };
 * const command = new ListProvisionedModelThroughputsCommand(input);
 * const response = await client.send(command);
 * // { // ListProvisionedModelThroughputsResponse
 * //   nextToken: "STRING_VALUE",
 * //   provisionedModelSummaries: [ // ProvisionedModelSummaries
 * //     { // ProvisionedModelSummary
 * //       provisionedModelName: "STRING_VALUE", // required
 * //       provisionedModelArn: "STRING_VALUE", // required
 * //       modelArn: "STRING_VALUE", // required
 * //       desiredModelArn: "STRING_VALUE", // required
 * //       foundationModelArn: "STRING_VALUE", // required
 * //       modelUnits: Number("int"), // required
 * //       desiredModelUnits: Number("int"), // required
 * //       status: "Creating" || "InService" || "Updating" || "Failed", // required
 * //       commitmentDuration: "OneMonth" || "SixMonths",
 * //       commitmentExpirationTime: new Date("TIMESTAMP"),
 * //       creationTime: new Date("TIMESTAMP"), // required
 * //       lastModifiedTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListProvisionedModelThroughputsCommandInput - {@link ListProvisionedModelThroughputsCommandInput}
 * @returns {@link ListProvisionedModelThroughputsCommandOutput}
 * @see {@link ListProvisionedModelThroughputsCommandInput} for command's `input` shape.
 * @see {@link ListProvisionedModelThroughputsCommandOutput} for command's `response` shape.
 * @see {@link BedrockClientResolvedConfig | config} for BedrockClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Input validation failed. Check your request parameters and retry the request.</p>
 *
 * @throws {@link BedrockServiceException}
 * <p>Base exception class for all service exceptions from Bedrock service.</p>
 *
 */
export class ListProvisionedModelThroughputsCommand extends $Command<
  ListProvisionedModelThroughputsCommandInput,
  ListProvisionedModelThroughputsCommandOutput,
  BedrockClientResolvedConfig
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
  constructor(readonly input: ListProvisionedModelThroughputsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BedrockClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListProvisionedModelThroughputsCommandInput, ListProvisionedModelThroughputsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListProvisionedModelThroughputsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BedrockClient";
    const commandName = "ListProvisionedModelThroughputsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonBedrockControlPlaneService",
        operation: "ListProvisionedModelThroughputs",
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
    input: ListProvisionedModelThroughputsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListProvisionedModelThroughputsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListProvisionedModelThroughputsCommandOutput> {
    return de_ListProvisionedModelThroughputsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
