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

import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import {
  ListExportErrorsRequest,
  ListExportErrorsRequestFilterSensitiveLog,
  ListExportErrorsResponse,
  ListExportErrorsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListExportErrorsCommand,
  serializeAws_restJson1ListExportErrorsCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link ListExportErrorsCommand}.
 */
export interface ListExportErrorsCommandInput extends ListExportErrorsRequest {}
/**
 * The output of {@link ListExportErrorsCommand}.
 */
export interface ListExportErrorsCommandOutput extends ListExportErrorsResponse, __MetadataBearer {}

/**
 * <p>List export errors.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, ListExportErrorsCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, ListExportErrorsCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const command = new ListExportErrorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListExportErrorsCommandInput} for command's `input` shape.
 * @see {@link ListExportErrorsCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>Uninitialized account exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validate exception.</p>
 *
 *
 */
export class ListExportErrorsCommand extends $Command<
  ListExportErrorsCommandInput,
  ListExportErrorsCommandOutput,
  MgnClientResolvedConfig
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

  constructor(readonly input: ListExportErrorsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MgnClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListExportErrorsCommandInput, ListExportErrorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListExportErrorsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MgnClient";
    const commandName = "ListExportErrorsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListExportErrorsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListExportErrorsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListExportErrorsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListExportErrorsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListExportErrorsCommandOutput> {
    return deserializeAws_restJson1ListExportErrorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
