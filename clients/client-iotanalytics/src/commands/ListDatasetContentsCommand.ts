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

import { IoTAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTAnalyticsClient";
import { ListDatasetContentsRequest, ListDatasetContentsResponse } from "../models/models_0";
import { de_ListDatasetContentsCommand, se_ListDatasetContentsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListDatasetContentsCommand}.
 */
export interface ListDatasetContentsCommandInput extends ListDatasetContentsRequest {}
/**
 * @public
 *
 * The output of {@link ListDatasetContentsCommand}.
 */
export interface ListDatasetContentsCommandOutput extends ListDatasetContentsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists information about dataset contents that have been created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, ListDatasetContentsCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, ListDatasetContentsCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * const client = new IoTAnalyticsClient(config);
 * const input = { // ListDatasetContentsRequest
 *   datasetName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   scheduledOnOrAfter: new Date("TIMESTAMP"),
 *   scheduledBefore: new Date("TIMESTAMP"),
 * };
 * const command = new ListDatasetContentsCommand(input);
 * const response = await client.send(command);
 * // { // ListDatasetContentsResponse
 * //   datasetContentSummaries: [ // DatasetContentSummaries
 * //     { // DatasetContentSummary
 * //       version: "STRING_VALUE",
 * //       status: { // DatasetContentStatus
 * //         state: "CREATING" || "SUCCEEDED" || "FAILED",
 * //         reason: "STRING_VALUE",
 * //       },
 * //       creationTime: new Date("TIMESTAMP"),
 * //       scheduleTime: new Date("TIMESTAMP"),
 * //       completionTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDatasetContentsCommandInput - {@link ListDatasetContentsCommandInput}
 * @returns {@link ListDatasetContentsCommandOutput}
 * @see {@link ListDatasetContentsCommandInput} for command's `input` shape.
 * @see {@link ListDatasetContentsCommandOutput} for command's `response` shape.
 * @see {@link IoTAnalyticsClientResolvedConfig | config} for IoTAnalyticsClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>There was an internal failure.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request was not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource with the specified name could not be found.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link IoTAnalyticsServiceException}
 * <p>Base exception class for all service exceptions from IoTAnalytics service.</p>
 *
 */
export class ListDatasetContentsCommand extends $Command<
  ListDatasetContentsCommandInput,
  ListDatasetContentsCommandOutput,
  IoTAnalyticsClientResolvedConfig
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
  constructor(readonly input: ListDatasetContentsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTAnalyticsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDatasetContentsCommandInput, ListDatasetContentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListDatasetContentsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTAnalyticsClient";
    const commandName = "ListDatasetContentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIoTAnalytics",
        operation: "ListDatasetContents",
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
  private serialize(input: ListDatasetContentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListDatasetContentsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDatasetContentsCommandOutput> {
    return de_ListDatasetContentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
