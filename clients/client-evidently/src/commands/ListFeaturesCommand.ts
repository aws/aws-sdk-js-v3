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

import { EvidentlyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EvidentlyClient";
import { ListFeaturesRequest, ListFeaturesResponse } from "../models/models_0";
import { de_ListFeaturesCommand, se_ListFeaturesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListFeaturesCommand}.
 */
export interface ListFeaturesCommandInput extends ListFeaturesRequest {}
/**
 * @public
 *
 * The output of {@link ListFeaturesCommand}.
 */
export interface ListFeaturesCommandOutput extends ListFeaturesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns configuration details about all the features in the specified project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvidentlyClient, ListFeaturesCommand } from "@aws-sdk/client-evidently"; // ES Modules import
 * // const { EvidentlyClient, ListFeaturesCommand } = require("@aws-sdk/client-evidently"); // CommonJS import
 * const client = new EvidentlyClient(config);
 * const input = { // ListFeaturesRequest
 *   project: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListFeaturesCommand(input);
 * const response = await client.send(command);
 * // { // ListFeaturesResponse
 * //   features: [ // FeatureSummariesList
 * //     { // FeatureSummary
 * //       arn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       project: "STRING_VALUE",
 * //       status: "STRING_VALUE", // required
 * //       createdTime: new Date("TIMESTAMP"), // required
 * //       lastUpdatedTime: new Date("TIMESTAMP"), // required
 * //       evaluationStrategy: "STRING_VALUE", // required
 * //       evaluationRules: [ // EvaluationRulesList
 * //         { // EvaluationRule
 * //           name: "STRING_VALUE",
 * //           type: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       defaultVariation: "STRING_VALUE",
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFeaturesCommandInput - {@link ListFeaturesCommandInput}
 * @returns {@link ListFeaturesCommandOutput}
 * @see {@link ListFeaturesCommandInput} for command's `input` shape.
 * @see {@link ListFeaturesCommandOutput} for command's `response` shape.
 * @see {@link EvidentlyClientResolvedConfig | config} for EvidentlyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling. Retry the request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The value of a parameter in the request caused an error.</p>
 *
 * @throws {@link EvidentlyServiceException}
 * <p>Base exception class for all service exceptions from Evidently service.</p>
 *
 */
export class ListFeaturesCommand extends $Command<
  ListFeaturesCommandInput,
  ListFeaturesCommandOutput,
  EvidentlyClientResolvedConfig
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
  constructor(readonly input: ListFeaturesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EvidentlyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListFeaturesCommandInput, ListFeaturesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListFeaturesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EvidentlyClient";
    const commandName = "ListFeaturesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Evidently",
        operation: "ListFeatures",
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
  private serialize(input: ListFeaturesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListFeaturesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListFeaturesCommandOutput> {
    return de_ListFeaturesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
