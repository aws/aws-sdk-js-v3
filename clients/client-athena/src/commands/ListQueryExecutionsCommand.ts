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

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { ListQueryExecutionsInput, ListQueryExecutionsOutput } from "../models/models_0";
import {
  deserializeAws_json1_1ListQueryExecutionsCommand,
  serializeAws_json1_1ListQueryExecutionsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link ListQueryExecutionsCommand}.
 */
export interface ListQueryExecutionsCommandInput extends ListQueryExecutionsInput {}
/**
 * @public
 *
 * The output of {@link ListQueryExecutionsCommand}.
 */
export interface ListQueryExecutionsCommandOutput extends ListQueryExecutionsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Provides a list of available query execution IDs for the queries in the specified
 *             workgroup. If a workgroup is not specified, returns a list of query execution IDs for
 *             the primary workgroup. Requires you to have access to the workgroup in which the queries
 *             ran.</p>
 *          <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and
 *                 Code Samples</a> in the <i>Amazon Athena User
 *             Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, ListQueryExecutionsCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, ListQueryExecutionsCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const input = { // ListQueryExecutionsInput
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   WorkGroup: "STRING_VALUE",
 * };
 * const command = new ListQueryExecutionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListQueryExecutionsCommandInput - {@link ListQueryExecutionsCommandInput}
 * @returns {@link ListQueryExecutionsCommandOutput}
 * @see {@link ListQueryExecutionsCommandInput} for command's `input` shape.
 * @see {@link ListQueryExecutionsCommandOutput} for command's `response` shape.
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
 *
 */
export class ListQueryExecutionsCommand extends $Command<
  ListQueryExecutionsCommandInput,
  ListQueryExecutionsCommandOutput,
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
  constructor(readonly input: ListQueryExecutionsCommandInput) {
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
  ): Handler<ListQueryExecutionsCommandInput, ListQueryExecutionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListQueryExecutionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AthenaClient";
    const commandName = "ListQueryExecutionsCommand";
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
  private serialize(input: ListQueryExecutionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListQueryExecutionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListQueryExecutionsCommandOutput> {
    return deserializeAws_json1_1ListQueryExecutionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
