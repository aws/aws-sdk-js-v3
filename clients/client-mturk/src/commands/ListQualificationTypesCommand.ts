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

import {
  ListQualificationTypesRequest,
  ListQualificationTypesRequestFilterSensitiveLog,
  ListQualificationTypesResponse,
  ListQualificationTypesResponseFilterSensitiveLog,
} from "../models/models_0";
import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import {
  deserializeAws_json1_1ListQualificationTypesCommand,
  serializeAws_json1_1ListQualificationTypesCommand,
} from "../protocols/Aws_json1_1";

export interface ListQualificationTypesCommandInput extends ListQualificationTypesRequest {}
export interface ListQualificationTypesCommandOutput extends ListQualificationTypesResponse, __MetadataBearer {}

/**
 * <p>
 *             The
 *             <code>ListQualificationTypes</code>
 *             operation returns a list of Qualification types, filtered by
 *             an optional search term.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, ListQualificationTypesCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, ListQualificationTypesCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new ListQualificationTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListQualificationTypesCommandInput} for command's `input` shape.
 * @see {@link ListQualificationTypesCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for MTurkClient's `config` shape.
 *
 */
export class ListQualificationTypesCommand extends $Command<
  ListQualificationTypesCommandInput,
  ListQualificationTypesCommandOutput,
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

  constructor(readonly input: ListQualificationTypesCommandInput) {
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
  ): Handler<ListQualificationTypesCommandInput, ListQualificationTypesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListQualificationTypesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "ListQualificationTypesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListQualificationTypesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListQualificationTypesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListQualificationTypesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListQualificationTypesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListQualificationTypesCommandOutput> {
    return deserializeAws_json1_1ListQualificationTypesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
