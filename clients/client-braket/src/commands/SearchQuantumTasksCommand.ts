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

import { BraketClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BraketClient";
import { SearchQuantumTasksRequest, SearchQuantumTasksResponse } from "../models/models_0";
import { de_SearchQuantumTasksCommand, se_SearchQuantumTasksCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SearchQuantumTasksCommand}.
 */
export interface SearchQuantumTasksCommandInput extends SearchQuantumTasksRequest {}
/**
 * @public
 *
 * The output of {@link SearchQuantumTasksCommand}.
 */
export interface SearchQuantumTasksCommandOutput extends SearchQuantumTasksResponse, __MetadataBearer {}

/**
 * @public
 * <p>Searches for tasks that match the specified filter values.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BraketClient, SearchQuantumTasksCommand } from "@aws-sdk/client-braket"; // ES Modules import
 * // const { BraketClient, SearchQuantumTasksCommand } = require("@aws-sdk/client-braket"); // CommonJS import
 * const client = new BraketClient(config);
 * const input = { // SearchQuantumTasksRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   filters: [ // SearchQuantumTasksFilterList // required
 *     { // SearchQuantumTasksFilter
 *       name: "STRING_VALUE", // required
 *       values: [ // String256List // required
 *         "STRING_VALUE",
 *       ],
 *       operator: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new SearchQuantumTasksCommand(input);
 * const response = await client.send(command);
 * // { // SearchQuantumTasksResponse
 * //   quantumTasks: [ // QuantumTaskSummaryList // required
 * //     { // QuantumTaskSummary
 * //       quantumTaskArn: "STRING_VALUE", // required
 * //       status: "STRING_VALUE", // required
 * //       deviceArn: "STRING_VALUE", // required
 * //       shots: Number("long"), // required
 * //       outputS3Bucket: "STRING_VALUE", // required
 * //       outputS3Directory: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       endedAt: new Date("TIMESTAMP"),
 * //       tags: { // TagsMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchQuantumTasksCommandInput - {@link SearchQuantumTasksCommandInput}
 * @returns {@link SearchQuantumTasksCommandOutput}
 * @see {@link SearchQuantumTasksCommandInput} for command's `input` shape.
 * @see {@link SearchQuantumTasksCommandOutput} for command's `response` shape.
 * @see {@link BraketClientResolvedConfig | config} for BraketClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or
 *          failure.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling rate limit is met.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link BraketServiceException}
 * <p>Base exception class for all service exceptions from Braket service.</p>
 *
 */
export class SearchQuantumTasksCommand extends $Command<
  SearchQuantumTasksCommandInput,
  SearchQuantumTasksCommandOutput,
  BraketClientResolvedConfig
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
  constructor(readonly input: SearchQuantumTasksCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BraketClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SearchQuantumTasksCommandInput, SearchQuantumTasksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SearchQuantumTasksCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BraketClient";
    const commandName = "SearchQuantumTasksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Braket",
        operation: "SearchQuantumTasks",
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
  private serialize(input: SearchQuantumTasksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SearchQuantumTasksCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SearchQuantumTasksCommandOutput> {
    return de_SearchQuantumTasksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
