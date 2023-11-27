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

import { AmpClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmpClient";
import { ListScrapersRequest, ListScrapersResponse } from "../models/models_0";
import { de_ListScrapersCommand, se_ListScrapersCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListScrapersCommand}.
 */
export interface ListScrapersCommandInput extends ListScrapersRequest {}
/**
 * @public
 *
 * The output of {@link ListScrapersCommand}.
 */
export interface ListScrapersCommandOutput extends ListScrapersResponse, __MetadataBearer {}

/**
 * @public
 * Lists all scrapers in a customer account, including scrapers being created or deleted. You may provide filters to return a more specific list of results.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, ListScrapersCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, ListScrapersCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * const client = new AmpClient(config);
 * const input = { // ListScrapersRequest
 *   filters: { // ScraperFilters
 *     "<keys>": [ // FilterValues
 *       "STRING_VALUE",
 *     ],
 *   },
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListScrapersCommand(input);
 * const response = await client.send(command);
 * // { // ListScrapersResponse
 * //   scrapers: [ // ScraperSummaryList // required
 * //     { // ScraperSummary
 * //       alias: "STRING_VALUE",
 * //       scraperId: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       roleArn: "STRING_VALUE", // required
 * //       status: { // ScraperStatus
 * //         statusCode: "STRING_VALUE", // required
 * //       },
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       lastModifiedAt: new Date("TIMESTAMP"), // required
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       statusReason: "STRING_VALUE",
 * //       source: { // Source Union: only one key present
 * //         eksConfiguration: { // EksConfiguration
 * //           clusterArn: "STRING_VALUE", // required
 * //           securityGroupIds: [ // SecurityGroupIds
 * //             "STRING_VALUE",
 * //           ],
 * //           subnetIds: [ // SubnetIds // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //       destination: { // Destination Union: only one key present
 * //         ampConfiguration: { // AmpConfiguration
 * //           workspaceArn: "STRING_VALUE", // required
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListScrapersCommandInput - {@link ListScrapersCommandInput}
 * @returns {@link ListScrapersCommandOutput}
 * @see {@link ListScrapersCommandInput} for command's `input` shape.
 * @see {@link ListScrapersCommandOutput} for command's `response` shape.
 * @see {@link AmpClientResolvedConfig | config} for AmpClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  User does not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  Unexpected error during processing of request.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *  The input fails to satisfy the constraints specified by an AWS service.
 *
 * @throws {@link AmpServiceException}
 * <p>Base exception class for all service exceptions from Amp service.</p>
 *
 */
export class ListScrapersCommand extends $Command<
  ListScrapersCommandInput,
  ListScrapersCommandOutput,
  AmpClientResolvedConfig
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
  constructor(readonly input: ListScrapersCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmpClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListScrapersCommandInput, ListScrapersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListScrapersCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmpClient";
    const commandName = "ListScrapersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonPrometheusService",
        operation: "ListScrapers",
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
  private serialize(input: ListScrapersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListScrapersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListScrapersCommandOutput> {
    return de_ListScrapersCommand(output, context);
  }
}
