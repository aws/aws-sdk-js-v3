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
  MigrationHubStrategyClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MigrationHubStrategyClient";
import { ListAnalyzableServersRequest, ListAnalyzableServersResponse } from "../models/models_0";
import { de_ListAnalyzableServersCommand, se_ListAnalyzableServersCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAnalyzableServersCommand}.
 */
export interface ListAnalyzableServersCommandInput extends ListAnalyzableServersRequest {}
/**
 * @public
 *
 * The output of {@link ListAnalyzableServersCommand}.
 */
export interface ListAnalyzableServersCommandOutput extends ListAnalyzableServersResponse, __MetadataBearer {}

/**
 * @public
 * Retrieves a list of all the servers fetched from customer vCenter using Strategy Recommendation Collector.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubStrategyClient, ListAnalyzableServersCommand } from "@aws-sdk/client-migrationhubstrategy"; // ES Modules import
 * // const { MigrationHubStrategyClient, ListAnalyzableServersCommand } = require("@aws-sdk/client-migrationhubstrategy"); // CommonJS import
 * const client = new MigrationHubStrategyClient(config);
 * const input = { // ListAnalyzableServersRequest
 *   sort: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAnalyzableServersCommand(input);
 * const response = await client.send(command);
 * // { // ListAnalyzableServersResponse
 * //   analyzableServers: [ // AnalyzableServerSummaryList
 * //     { // AnalyzableServerSummary
 * //       hostname: "STRING_VALUE",
 * //       ipAddress: "STRING_VALUE",
 * //       source: "STRING_VALUE",
 * //       vmId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAnalyzableServersCommandInput - {@link ListAnalyzableServersCommandInput}
 * @returns {@link ListAnalyzableServersCommandOutput}
 * @see {@link ListAnalyzableServersCommandInput} for command's `input` shape.
 * @see {@link ListAnalyzableServersCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubStrategyClientResolvedConfig | config} for MigrationHubStrategyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> The user does not have permission to perform the action. Check the
 *       AWS Identity and Access Management (IAM) policy associated with this user.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> The server experienced an internal error. Try again. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p> The request was denied due to request throttling. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The request body isn't valid. </p>
 *
 * @throws {@link MigrationHubStrategyServiceException}
 * <p>Base exception class for all service exceptions from MigrationHubStrategy service.</p>
 *
 */
export class ListAnalyzableServersCommand extends $Command<
  ListAnalyzableServersCommandInput,
  ListAnalyzableServersCommandOutput,
  MigrationHubStrategyClientResolvedConfig
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
  constructor(readonly input: ListAnalyzableServersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MigrationHubStrategyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAnalyzableServersCommandInput, ListAnalyzableServersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAnalyzableServersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubStrategyClient";
    const commandName = "ListAnalyzableServersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSMigrationHubStrategyRecommendation",
        operation: "ListAnalyzableServers",
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
  private serialize(input: ListAnalyzableServersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListAnalyzableServersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAnalyzableServersCommandOutput> {
    return de_ListAnalyzableServersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
