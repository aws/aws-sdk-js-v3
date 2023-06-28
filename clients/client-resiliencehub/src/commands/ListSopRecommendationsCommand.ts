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

import { ListSopRecommendationsRequest, ListSopRecommendationsResponse } from "../models/models_0";
import { de_ListSopRecommendationsCommand, se_ListSopRecommendationsCommand } from "../protocols/Aws_restJson1";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListSopRecommendationsCommand}.
 */
export interface ListSopRecommendationsCommandInput extends ListSopRecommendationsRequest {}
/**
 * @public
 *
 * The output of {@link ListSopRecommendationsCommand}.
 */
export interface ListSopRecommendationsCommandOutput extends ListSopRecommendationsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the standard operating procedure (SOP) recommendations for the Resilience Hub
 *       applications.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, ListSopRecommendationsCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, ListSopRecommendationsCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * const client = new ResiliencehubClient(config);
 * const input = { // ListSopRecommendationsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   assessmentArn: "STRING_VALUE", // required
 * };
 * const command = new ListSopRecommendationsCommand(input);
 * const response = await client.send(command);
 * // { // ListSopRecommendationsResponse
 * //   nextToken: "STRING_VALUE",
 * //   sopRecommendations: [ // SopRecommendationList // required
 * //     { // SopRecommendation
 * //       serviceType: "STRING_VALUE", // required
 * //       appComponentName: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       recommendationId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE",
 * //       items: [ // RecommendationItemList
 * //         { // RecommendationItem
 * //           resourceId: "STRING_VALUE",
 * //           targetAccountId: "STRING_VALUE",
 * //           targetRegion: "STRING_VALUE",
 * //           alreadyImplemented: true || false,
 * //         },
 * //       ],
 * //       referenceId: "STRING_VALUE", // required
 * //       prerequisite: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListSopRecommendationsCommandInput - {@link ListSopRecommendationsCommandInput}
 * @returns {@link ListSopRecommendationsCommandOutput}
 * @see {@link ListSopRecommendationsCommandInput} for command's `input` shape.
 * @see {@link ListSopRecommendationsCommandOutput} for command's `response` shape.
 * @see {@link ResiliencehubClientResolvedConfig | config} for ResiliencehubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The user or role that is
 *       making the request must have at least one IAM permissions policy attached that grants the
 *       required permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This exception occurs when a conflict with a previous successful write is detected. This generally occurs
 *       when the previous write did not have time to propagate to the host serving the current
 *       request. A retry (with appropriate backoff logic) is the recommended response to this
 *       exception.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Resilience Hub
 *       service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception occurs when the specified resource could not be found.</p>
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
export class ListSopRecommendationsCommand extends $Command<
  ListSopRecommendationsCommandInput,
  ListSopRecommendationsCommandOutput,
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
  constructor(readonly input: ListSopRecommendationsCommandInput) {
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
  ): Handler<ListSopRecommendationsCommandInput, ListSopRecommendationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSopRecommendationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResiliencehubClient";
    const commandName = "ListSopRecommendationsCommand";
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
  private serialize(input: ListSopRecommendationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListSopRecommendationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSopRecommendationsCommandOutput> {
    return de_ListSopRecommendationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
