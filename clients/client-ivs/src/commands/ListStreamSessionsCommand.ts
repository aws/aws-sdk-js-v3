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

import { IvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvsClient";
import { ListStreamSessionsRequest, ListStreamSessionsResponse } from "../models/models_0";
import { de_ListStreamSessionsCommand, se_ListStreamSessionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListStreamSessionsCommand}.
 */
export interface ListStreamSessionsCommandInput extends ListStreamSessionsRequest {}
/**
 * @public
 *
 * The output of {@link ListStreamSessionsCommand}.
 */
export interface ListStreamSessionsCommandOutput extends ListStreamSessionsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets a summary of current and previous streams for a specified channel in your account, in
 *       the AWS region where the API request is processed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, ListStreamSessionsCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, ListStreamSessionsCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * const client = new IvsClient(config);
 * const input = { // ListStreamSessionsRequest
 *   channelArn: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListStreamSessionsCommand(input);
 * const response = await client.send(command);
 * // { // ListStreamSessionsResponse
 * //   streamSessions: [ // StreamSessionList // required
 * //     { // StreamSessionSummary
 * //       streamId: "STRING_VALUE",
 * //       startTime: new Date("TIMESTAMP"),
 * //       endTime: new Date("TIMESTAMP"),
 * //       hasErrorEvent: true || false,
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListStreamSessionsCommandInput - {@link ListStreamSessionsCommandInput}
 * @returns {@link ListStreamSessionsCommandOutput}
 * @see {@link ListStreamSessionsCommandInput} for command's `input` shape.
 * @see {@link ListStreamSessionsCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for IvsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link IvsServiceException}
 * <p>Base exception class for all service exceptions from Ivs service.</p>
 *
 */
export class ListStreamSessionsCommand extends $Command<
  ListStreamSessionsCommandInput,
  ListStreamSessionsCommandOutput,
  IvsClientResolvedConfig
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
  constructor(readonly input: ListStreamSessionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IvsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListStreamSessionsCommandInput, ListStreamSessionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListStreamSessionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IvsClient";
    const commandName = "ListStreamSessionsCommand";
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
  private serialize(input: ListStreamSessionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListStreamSessionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListStreamSessionsCommandOutput> {
    return de_ListStreamSessionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
