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

import { ListWorkerBlocksRequest, ListWorkerBlocksResponse } from "../models/models_0";
import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { de_ListWorkerBlocksCommand, se_ListWorkerBlocksCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListWorkerBlocksCommand}.
 */
export interface ListWorkerBlocksCommandInput extends ListWorkerBlocksRequest {}
/**
 * @public
 *
 * The output of {@link ListWorkerBlocksCommand}.
 */
export interface ListWorkerBlocksCommandOutput extends ListWorkerBlocksResponse, __MetadataBearer {}

/**
 * @public
 * <p>The <code>ListWorkersBlocks</code> operation retrieves a list of Workers who are blocked from working on your HITs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, ListWorkerBlocksCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, ListWorkerBlocksCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const input = { // ListWorkerBlocksRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListWorkerBlocksCommand(input);
 * const response = await client.send(command);
 * // { // ListWorkerBlocksResponse
 * //   NextToken: "STRING_VALUE",
 * //   NumResults: Number("int"),
 * //   WorkerBlocks: [ // WorkerBlockList
 * //     { // WorkerBlock
 * //       WorkerId: "STRING_VALUE",
 * //       Reason: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListWorkerBlocksCommandInput - {@link ListWorkerBlocksCommandInput}
 * @returns {@link ListWorkerBlocksCommandOutput}
 * @see {@link ListWorkerBlocksCommandInput} for command's `input` shape.
 * @see {@link ListWorkerBlocksCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for MTurkClient's `config` shape.
 *
 * @throws {@link RequestError} (client fault)
 *  <p>Your request is invalid.</p>
 *
 * @throws {@link ServiceFault} (server fault)
 *  <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
 *
 * @throws {@link MTurkServiceException}
 * <p>Base exception class for all service exceptions from MTurk service.</p>
 *
 */
export class ListWorkerBlocksCommand extends $Command<
  ListWorkerBlocksCommandInput,
  ListWorkerBlocksCommandOutput,
  MTurkClientResolvedConfig
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
  constructor(readonly input: ListWorkerBlocksCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MTurkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListWorkerBlocksCommandInput, ListWorkerBlocksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListWorkerBlocksCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "ListWorkerBlocksCommand";
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
  private serialize(input: ListWorkerBlocksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListWorkerBlocksCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListWorkerBlocksCommandOutput> {
    return de_ListWorkerBlocksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
