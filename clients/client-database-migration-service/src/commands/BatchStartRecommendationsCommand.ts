// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import {
  BatchStartRecommendationsRequest,
  BatchStartRecommendationsRequestFilterSensitiveLog,
  BatchStartRecommendationsResponse,
  BatchStartRecommendationsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1BatchStartRecommendationsCommand,
  serializeAws_json1_1BatchStartRecommendationsCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link BatchStartRecommendationsCommand}.
 */
export interface BatchStartRecommendationsCommandInput extends BatchStartRecommendationsRequest {}
/**
 * The output of {@link BatchStartRecommendationsCommand}.
 */
export interface BatchStartRecommendationsCommandOutput extends BatchStartRecommendationsResponse, __MetadataBearer {}

/**
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
 * const command = new BatchStartRecommendationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
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
      inputFilterSensitiveLog: BatchStartRecommendationsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: BatchStartRecommendationsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchStartRecommendationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1BatchStartRecommendationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchStartRecommendationsCommandOutput> {
    return deserializeAws_json1_1BatchStartRecommendationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
