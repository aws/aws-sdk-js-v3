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
  CreatePresignedNotebookUrlRequest,
  CreatePresignedNotebookUrlRequestFilterSensitiveLog,
  CreatePresignedNotebookUrlResponse,
  CreatePresignedNotebookUrlResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreatePresignedNotebookUrlCommand,
  serializeAws_json1_1CreatePresignedNotebookUrlCommand,
} from "../protocols/Aws_json1_1";

export interface CreatePresignedNotebookUrlCommandInput extends CreatePresignedNotebookUrlRequest {}
export interface CreatePresignedNotebookUrlCommandOutput extends CreatePresignedNotebookUrlResponse, __MetadataBearer {}

/**
 * <p>Gets an authentication token and the URL at which the notebook can be accessed. During
 *             programmatic access, <code>CreatePresignedNotebookUrl</code> must be called every 10
 *             minutes to refresh the authentication token.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, CreatePresignedNotebookUrlCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, CreatePresignedNotebookUrlCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new CreatePresignedNotebookUrlCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePresignedNotebookUrlCommandInput} for command's `input` shape.
 * @see {@link CreatePresignedNotebookUrlCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 */
export class CreatePresignedNotebookUrlCommand extends $Command<
  CreatePresignedNotebookUrlCommandInput,
  CreatePresignedNotebookUrlCommandOutput,
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

  constructor(readonly input: CreatePresignedNotebookUrlCommandInput) {
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
  ): Handler<CreatePresignedNotebookUrlCommandInput, CreatePresignedNotebookUrlCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreatePresignedNotebookUrlCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AthenaClient";
    const commandName = "CreatePresignedNotebookUrlCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreatePresignedNotebookUrlRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreatePresignedNotebookUrlResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreatePresignedNotebookUrlCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreatePresignedNotebookUrlCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreatePresignedNotebookUrlCommandOutput> {
    return deserializeAws_json1_1CreatePresignedNotebookUrlCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
