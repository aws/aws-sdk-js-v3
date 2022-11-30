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
  CreateNotebookInput,
  CreateNotebookInputFilterSensitiveLog,
  CreateNotebookOutput,
  CreateNotebookOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateNotebookCommand,
  serializeAws_json1_1CreateNotebookCommand,
} from "../protocols/Aws_json1_1";

export interface CreateNotebookCommandInput extends CreateNotebookInput {}
export interface CreateNotebookCommandOutput extends CreateNotebookOutput, __MetadataBearer {}

/**
 * <p>Creates an empty <code>ipynb</code> file in the specified Apache Spark enabled
 *             workgroup. Throws an error if a file in the workgroup with the same name already
 *             exists.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, CreateNotebookCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, CreateNotebookCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new CreateNotebookCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateNotebookCommandInput} for command's `input` shape.
 * @see {@link CreateNotebookCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 */
export class CreateNotebookCommand extends $Command<
  CreateNotebookCommandInput,
  CreateNotebookCommandOutput,
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

  constructor(readonly input: CreateNotebookCommandInput) {
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
  ): Handler<CreateNotebookCommandInput, CreateNotebookCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateNotebookCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AthenaClient";
    const commandName = "CreateNotebookCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateNotebookInputFilterSensitiveLog,
      outputFilterSensitiveLog: CreateNotebookOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateNotebookCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateNotebookCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateNotebookCommandOutput> {
    return deserializeAws_json1_1CreateNotebookCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
