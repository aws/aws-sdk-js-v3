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
  ListRecommendationTemplatesRequest,
  ListRecommendationTemplatesResponse,
  ListRecommendationTemplatesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_ListRecommendationTemplatesCommand,
  se_ListRecommendationTemplatesCommand,
} from "../protocols/Aws_restJson1";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListRecommendationTemplatesCommand}.
 */
export interface ListRecommendationTemplatesCommandInput extends ListRecommendationTemplatesRequest {}
/**
 * @public
 *
 * The output of {@link ListRecommendationTemplatesCommand}.
 */
export interface ListRecommendationTemplatesCommandOutput
  extends ListRecommendationTemplatesResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Lists the recommendation templates for the Resilience Hub applications.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, ListRecommendationTemplatesCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, ListRecommendationTemplatesCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * const client = new ResiliencehubClient(config);
 * const input = { // ListRecommendationTemplatesRequest
 *   assessmentArn: "STRING_VALUE", // required
 *   reverseOrder: true || false,
 *   status: [ // RecommendationTemplateStatusList
 *     "STRING_VALUE",
 *   ],
 *   recommendationTemplateArn: "STRING_VALUE",
 *   name: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListRecommendationTemplatesCommand(input);
 * const response = await client.send(command);
 * // { // ListRecommendationTemplatesResponse
 * //   nextToken: "STRING_VALUE",
 * //   recommendationTemplates: [ // RecommendationTemplateList
 * //     { // RecommendationTemplate
 * //       templatesLocation: { // S3Location
 * //         bucket: "STRING_VALUE",
 * //         prefix: "STRING_VALUE",
 * //       },
 * //       assessmentArn: "STRING_VALUE", // required
 * //       appArn: "STRING_VALUE",
 * //       recommendationIds: [ // RecommendationIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       recommendationTypes: [ // RenderRecommendationTypeList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       format: "STRING_VALUE", // required
 * //       recommendationTemplateArn: "STRING_VALUE", // required
 * //       message: "STRING_VALUE",
 * //       status: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       startTime: new Date("TIMESTAMP"),
 * //       endTime: new Date("TIMESTAMP"),
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       needsReplacements: true || false,
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListRecommendationTemplatesCommandInput - {@link ListRecommendationTemplatesCommandInput}
 * @returns {@link ListRecommendationTemplatesCommandOutput}
 * @see {@link ListRecommendationTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListRecommendationTemplatesCommandOutput} for command's `response` shape.
 * @see {@link ResiliencehubClientResolvedConfig | config} for ResiliencehubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The user or role that is
 *       making the request must have at least one IAM permissions policy attached that grants the
 *       required permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Resilience Hub
 *       service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This exception occurs when you have exceeded the limit on the number of requests per second.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>This exception occurs when a request is not valid.</p>
 *
 * @throws {@link ResiliencehubServiceException}
 * <p>Base exception class for all service exceptions from Resiliencehub service.</p>
 *
 */
export class ListRecommendationTemplatesCommand extends $Command<
  ListRecommendationTemplatesCommandInput,
  ListRecommendationTemplatesCommandOutput,
  ResiliencehubClientResolvedConfig
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
  constructor(readonly input: ListRecommendationTemplatesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ResiliencehubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRecommendationTemplatesCommandInput, ListRecommendationTemplatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListRecommendationTemplatesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResiliencehubClient";
    const commandName = "ListRecommendationTemplatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: ListRecommendationTemplatesResponseFilterSensitiveLog,
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
  private serialize(input: ListRecommendationTemplatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListRecommendationTemplatesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListRecommendationTemplatesCommandOutput> {
    return de_ListRecommendationTemplatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
