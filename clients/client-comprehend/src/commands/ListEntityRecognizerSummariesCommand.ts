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

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { ListEntityRecognizerSummariesRequest, ListEntityRecognizerSummariesResponse } from "../models/models_0";
import {
  de_ListEntityRecognizerSummariesCommand,
  se_ListEntityRecognizerSummariesCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListEntityRecognizerSummariesCommand}.
 */
export interface ListEntityRecognizerSummariesCommandInput extends ListEntityRecognizerSummariesRequest {}
/**
 * @public
 *
 * The output of {@link ListEntityRecognizerSummariesCommand}.
 */
export interface ListEntityRecognizerSummariesCommandOutput
  extends ListEntityRecognizerSummariesResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets a list of summaries for the entity recognizers that you have created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, ListEntityRecognizerSummariesCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, ListEntityRecognizerSummariesCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const input = { // ListEntityRecognizerSummariesRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListEntityRecognizerSummariesCommand(input);
 * const response = await client.send(command);
 * // { // ListEntityRecognizerSummariesResponse
 * //   EntityRecognizerSummariesList: [ // EntityRecognizerSummariesList
 * //     { // EntityRecognizerSummary
 * //       RecognizerName: "STRING_VALUE",
 * //       NumberOfVersions: Number("int"),
 * //       LatestVersionCreatedAt: new Date("TIMESTAMP"),
 * //       LatestVersionName: "STRING_VALUE",
 * //       LatestVersionStatus: "SUBMITTED" || "TRAINING" || "DELETING" || "STOP_REQUESTED" || "STOPPED" || "IN_ERROR" || "TRAINED" || "TRAINED_WITH_WARNING",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEntityRecognizerSummariesCommandInput - {@link ListEntityRecognizerSummariesCommandInput}
 * @returns {@link ListEntityRecognizerSummariesCommandOutput}
 * @see {@link ListEntityRecognizerSummariesCommandInput} for command's `input` shape.
 * @see {@link ListEntityRecognizerSummariesCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ComprehendServiceException}
 * <p>Base exception class for all service exceptions from Comprehend service.</p>
 *
 */
export class ListEntityRecognizerSummariesCommand extends $Command<
  ListEntityRecognizerSummariesCommandInput,
  ListEntityRecognizerSummariesCommandOutput,
  ComprehendClientResolvedConfig
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
  constructor(readonly input: ListEntityRecognizerSummariesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComprehendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListEntityRecognizerSummariesCommandInput, ListEntityRecognizerSummariesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListEntityRecognizerSummariesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "ListEntityRecognizerSummariesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Comprehend_20171127",
        operation: "ListEntityRecognizerSummaries",
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
  private serialize(input: ListEntityRecognizerSummariesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListEntityRecognizerSummariesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListEntityRecognizerSummariesCommandOutput> {
    return de_ListEntityRecognizerSummariesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
