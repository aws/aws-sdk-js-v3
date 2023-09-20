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

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { ListSessionsRequest, ListSessionsResponse } from "../models/models_2";
import { de_ListSessionsCommand, se_ListSessionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListSessionsCommand}.
 */
export interface ListSessionsCommandInput extends ListSessionsRequest {}
/**
 * @public
 *
 * The output of {@link ListSessionsCommand}.
 */
export interface ListSessionsCommandOutput extends ListSessionsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieve a list of sessions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ListSessionsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ListSessionsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // ListSessionsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   RequestOrigin: "STRING_VALUE",
 * };
 * const command = new ListSessionsCommand(input);
 * const response = await client.send(command);
 * // { // ListSessionsResponse
 * //   Ids: [ // SessionIdList
 * //     "STRING_VALUE",
 * //   ],
 * //   Sessions: [ // SessionList
 * //     { // Session
 * //       Id: "STRING_VALUE",
 * //       CreatedOn: new Date("TIMESTAMP"),
 * //       Status: "PROVISIONING" || "READY" || "FAILED" || "TIMEOUT" || "STOPPING" || "STOPPED",
 * //       ErrorMessage: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Role: "STRING_VALUE",
 * //       Command: { // SessionCommand
 * //         Name: "STRING_VALUE",
 * //         PythonVersion: "STRING_VALUE",
 * //       },
 * //       DefaultArguments: { // OrchestrationArgumentsMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       Connections: { // ConnectionsList
 * //         Connections: [ // OrchestrationStringList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       Progress: Number("double"),
 * //       MaxCapacity: Number("double"),
 * //       SecurityConfiguration: "STRING_VALUE",
 * //       GlueVersion: "STRING_VALUE",
 * //       NumberOfWorkers: Number("int"),
 * //       WorkerType: "Standard" || "G.1X" || "G.2X" || "G.025X" || "G.4X" || "G.8X" || "Z.2X",
 * //       CompletedOn: new Date("TIMESTAMP"),
 * //       ExecutionTime: Number("double"),
 * //       DPUSeconds: Number("double"),
 * //       IdleTimeout: Number("int"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSessionsCommandInput - {@link ListSessionsCommandInput}
 * @returns {@link ListSessionsCommandOutput}
 * @see {@link ListSessionsCommandInput} for command's `input` shape.
 * @see {@link ListSessionsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 */
export class ListSessionsCommand extends $Command<
  ListSessionsCommandInput,
  ListSessionsCommandOutput,
  GlueClientResolvedConfig
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
  constructor(readonly input: ListSessionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSessionsCommandInput, ListSessionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListSessionsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "ListSessionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGlue",
        operation: "ListSessions",
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
  private serialize(input: ListSessionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListSessionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSessionsCommandOutput> {
    return de_ListSessionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
