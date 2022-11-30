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
  GetNotebookMetadataInput,
  GetNotebookMetadataInputFilterSensitiveLog,
  GetNotebookMetadataOutput,
  GetNotebookMetadataOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetNotebookMetadataCommand,
  serializeAws_json1_1GetNotebookMetadataCommand,
} from "../protocols/Aws_json1_1";

export interface GetNotebookMetadataCommandInput extends GetNotebookMetadataInput {}
export interface GetNotebookMetadataCommandOutput extends GetNotebookMetadataOutput, __MetadataBearer {}

/**
 * <p>Retrieves notebook metadata for the specified notebook ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, GetNotebookMetadataCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, GetNotebookMetadataCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new GetNotebookMetadataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetNotebookMetadataCommandInput} for command's `input` shape.
 * @see {@link GetNotebookMetadataCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 */
export class GetNotebookMetadataCommand extends $Command<
  GetNotebookMetadataCommandInput,
  GetNotebookMetadataCommandOutput,
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

  constructor(readonly input: GetNotebookMetadataCommandInput) {
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
  ): Handler<GetNotebookMetadataCommandInput, GetNotebookMetadataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetNotebookMetadataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AthenaClient";
    const commandName = "GetNotebookMetadataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetNotebookMetadataInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetNotebookMetadataOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetNotebookMetadataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetNotebookMetadataCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetNotebookMetadataCommandOutput> {
    return deserializeAws_json1_1GetNotebookMetadataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
