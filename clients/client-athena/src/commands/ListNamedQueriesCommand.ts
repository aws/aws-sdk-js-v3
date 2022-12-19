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
  ListNamedQueriesInput,
  ListNamedQueriesInputFilterSensitiveLog,
  ListNamedQueriesOutput,
  ListNamedQueriesOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListNamedQueriesCommand,
  serializeAws_json1_1ListNamedQueriesCommand,
} from "../protocols/Aws_json1_1";

export interface ListNamedQueriesCommandInput extends ListNamedQueriesInput {}
export interface ListNamedQueriesCommandOutput extends ListNamedQueriesOutput, __MetadataBearer {}

/**
 * <p>Provides a list of available query IDs only for queries saved in the specified
 *             workgroup. Requires that you have access to the specified workgroup. If a workgroup is
 *             not specified, lists the saved queries for the primary workgroup.</p>
 *          <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and
 *                 Code Samples</a> in the <i>Amazon Athena User
 *             Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, ListNamedQueriesCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, ListNamedQueriesCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new ListNamedQueriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListNamedQueriesCommandInput} for command's `input` shape.
 * @see {@link ListNamedQueriesCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 */
export class ListNamedQueriesCommand extends $Command<
  ListNamedQueriesCommandInput,
  ListNamedQueriesCommandOutput,
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

  constructor(readonly input: ListNamedQueriesCommandInput) {
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
  ): Handler<ListNamedQueriesCommandInput, ListNamedQueriesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListNamedQueriesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AthenaClient";
    const commandName = "ListNamedQueriesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListNamedQueriesInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListNamedQueriesOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListNamedQueriesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListNamedQueriesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListNamedQueriesCommandOutput> {
    return deserializeAws_json1_1ListNamedQueriesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
