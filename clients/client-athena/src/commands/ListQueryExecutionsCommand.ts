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
import {
  ListQueryExecutionsInput,
  ListQueryExecutionsInputFilterSensitiveLog,
  ListQueryExecutionsOutput,
  ListQueryExecutionsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListQueryExecutionsCommand,
  serializeAws_json1_1ListQueryExecutionsCommand,
} from "../protocols/Aws_json1_1";

export interface ListQueryExecutionsCommandInput extends ListQueryExecutionsInput {}
export interface ListQueryExecutionsCommandOutput extends ListQueryExecutionsOutput, __MetadataBearer {}

/**
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
 * const command = new ListQueryExecutionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListQueryExecutionsCommandInput} for command's `input` shape.
 * @see {@link ListQueryExecutionsCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
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
      inputFilterSensitiveLog: ListQueryExecutionsInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListQueryExecutionsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListQueryExecutionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListQueryExecutionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListQueryExecutionsCommandOutput> {
    return deserializeAws_json1_1ListQueryExecutionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
