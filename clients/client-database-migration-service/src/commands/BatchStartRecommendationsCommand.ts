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
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import { BatchStartRecommendationsRequest, BatchStartRecommendationsResponse } from "../models/models_0";
import { de_BatchStartRecommendationsCommand, se_BatchStartRecommendationsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchStartRecommendationsCommand}.
 */
export interface BatchStartRecommendationsCommandInput extends BatchStartRecommendationsRequest {}
/**
 * @public
 *
 * The output of {@link BatchStartRecommendationsCommand}.
 */
export interface BatchStartRecommendationsCommandOutput extends BatchStartRecommendationsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Starts the analysis of up to 20 source databases to recommend target engines for each
 *             source database. This is a batch version of <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_StartRecommendations.html">StartRecommendations</a>.</p>
 *          <p>The result of analysis of each source database is reported individually in the
 *             response. Because the batch request can result in a combination of successful and
 *             unsuccessful actions, you should check for batch errors even when the call returns an
 *             HTTP status code of <code>200</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, BatchStartRecommendationsCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, BatchStartRecommendationsCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // BatchStartRecommendationsRequest
 *   Data: [ // StartRecommendationsRequestEntryList
 *     { // StartRecommendationsRequestEntry
 *       DatabaseId: "STRING_VALUE", // required
 *       Settings: { // RecommendationSettings
 *         InstanceSizingType: "STRING_VALUE", // required
 *         WorkloadType: "STRING_VALUE", // required
 *       },
 *     },
 *   ],
 * };
 * const command = new BatchStartRecommendationsCommand(input);
 * const response = await client.send(command);
 * // { // BatchStartRecommendationsResponse
 * //   ErrorEntries: [ // BatchStartRecommendationsErrorEntryList
 * //     { // BatchStartRecommendationsErrorEntry
 * //       DatabaseId: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //       Code: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchStartRecommendationsCommandInput - {@link BatchStartRecommendationsCommandInput}
 * @returns {@link BatchStartRecommendationsCommandOutput}
 * @see {@link BatchStartRecommendationsCommandInput} for command's `input` shape.
 * @see {@link BatchStartRecommendationsCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedFault} (client fault)
 *  <p>DMS was denied access to the endpoint. Check that the
 *             role is correctly configured.</p>
 *
 * @throws {@link InvalidResourceStateFault} (client fault)
 *  <p>The resource is in a state that prevents it from being used for database migration.</p>
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 */
export class BatchStartRecommendationsCommand extends $Command<
  BatchStartRecommendationsCommandInput,
  BatchStartRecommendationsCommandOutput,
  DatabaseMigrationServiceClientResolvedConfig
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
  constructor(readonly input: BatchStartRecommendationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DatabaseMigrationServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchStartRecommendationsCommandInput, BatchStartRecommendationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchStartRecommendationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "BatchStartRecommendationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonDMSv20160101",
        operation: "BatchStartRecommendations",
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
  private serialize(input: BatchStartRecommendationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchStartRecommendationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchStartRecommendationsCommandOutput> {
    return de_BatchStartRecommendationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
