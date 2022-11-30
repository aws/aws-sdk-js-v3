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
  ListNotebookMetadataInput,
  ListNotebookMetadataInputFilterSensitiveLog,
  ListNotebookMetadataOutput,
  ListNotebookMetadataOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListNotebookMetadataCommand,
  serializeAws_json1_1ListNotebookMetadataCommand,
} from "../protocols/Aws_json1_1";

export interface ListNotebookMetadataCommandInput extends ListNotebookMetadataInput {}
export interface ListNotebookMetadataCommandOutput extends ListNotebookMetadataOutput, __MetadataBearer {}

/**
 * <p>Displays the notebook files for the specified workgroup in paginated format.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, ListNotebookMetadataCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, ListNotebookMetadataCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new ListNotebookMetadataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListNotebookMetadataCommandInput} for command's `input` shape.
 * @see {@link ListNotebookMetadataCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 */
export class ListNotebookMetadataCommand extends $Command<
  ListNotebookMetadataCommandInput,
  ListNotebookMetadataCommandOutput,
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

  constructor(readonly input: ListNotebookMetadataCommandInput) {
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
  ): Handler<ListNotebookMetadataCommandInput, ListNotebookMetadataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListNotebookMetadataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AthenaClient";
    const commandName = "ListNotebookMetadataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListNotebookMetadataInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListNotebookMetadataOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListNotebookMetadataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListNotebookMetadataCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListNotebookMetadataCommandOutput> {
    return deserializeAws_json1_1ListNotebookMetadataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
