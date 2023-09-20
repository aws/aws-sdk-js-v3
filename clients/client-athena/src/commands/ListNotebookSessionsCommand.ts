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

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { ListNotebookSessionsRequest, ListNotebookSessionsResponse } from "../models/models_0";
import { de_ListNotebookSessionsCommand, se_ListNotebookSessionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListNotebookSessionsCommand}.
 */
export interface ListNotebookSessionsCommandInput extends ListNotebookSessionsRequest {}
/**
 * @public
 *
 * The output of {@link ListNotebookSessionsCommand}.
 */
export interface ListNotebookSessionsCommandOutput extends ListNotebookSessionsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists, in descending order, the sessions that have been created in a notebook that are
 *             in an active state like <code>CREATING</code>, <code>CREATED</code>, <code>IDLE</code>
 *             or <code>BUSY</code>. Newer sessions are listed first; older sessions are listed
 *             later.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, ListNotebookSessionsCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, ListNotebookSessionsCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const input = { // ListNotebookSessionsRequest
 *   NotebookId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListNotebookSessionsCommand(input);
 * const response = await client.send(command);
 * // { // ListNotebookSessionsResponse
 * //   NotebookSessionsList: [ // NotebookSessionsList // required
 * //     { // NotebookSessionSummary
 * //       SessionId: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListNotebookSessionsCommandInput - {@link ListNotebookSessionsCommandInput}
 * @returns {@link ListNotebookSessionsCommandOutput}
 * @see {@link ListNotebookSessionsCommandInput} for command's `input` shape.
 * @see {@link ListNotebookSessionsCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates a platform issue, which may be due to a transient condition or
 *             outage.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *             required parameter may be missing or out of range.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource, such as a workgroup, was not found.</p>
 *
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 */
export class ListNotebookSessionsCommand extends $Command<
  ListNotebookSessionsCommandInput,
  ListNotebookSessionsCommandOutput,
  AthenaClientResolvedConfig
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
  constructor(readonly input: ListNotebookSessionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AthenaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListNotebookSessionsCommandInput, ListNotebookSessionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListNotebookSessionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AthenaClient";
    const commandName = "ListNotebookSessionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonAthena",
        operation: "ListNotebookSessions",
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
  private serialize(input: ListNotebookSessionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListNotebookSessionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListNotebookSessionsCommandOutput> {
    return de_ListNotebookSessionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
