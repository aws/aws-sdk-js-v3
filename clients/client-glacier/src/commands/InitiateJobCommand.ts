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

import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import {
  InitiateJobInput,
  InitiateJobInputFilterSensitiveLog,
  InitiateJobOutput,
  InitiateJobOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1InitiateJobCommand,
  serializeAws_restJson1InitiateJobCommand,
} from "../protocols/Aws_restJson1";

export interface InitiateJobCommandInput extends InitiateJobInput {}
export interface InitiateJobCommandOutput extends InitiateJobOutput, __MetadataBearer {}

/**
 * <p>This operation initiates a job of the specified type, which can be a select, an archival retrieval,
 *          or a vault retrieval. For more information about using this operation,
 *          see the documentation for the underlying REST API <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-initiate-job-post.html">Initiate
 *             a Job</a>.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, InitiateJobCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, InitiateJobCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const command = new InitiateJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link InitiateJobCommandInput} for command's `input` shape.
 * @see {@link InitiateJobCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for GlacierClient's `config` shape.
 *
 */
export class InitiateJobCommand extends $Command<
  InitiateJobCommandInput,
  InitiateJobCommandOutput,
  GlacierClientResolvedConfig
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

  constructor(readonly input: InitiateJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlacierClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<InitiateJobCommandInput, InitiateJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, InitiateJobCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlacierClient";
    const commandName = "InitiateJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: InitiateJobInputFilterSensitiveLog,
      outputFilterSensitiveLog: InitiateJobOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: InitiateJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1InitiateJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<InitiateJobCommandOutput> {
    return deserializeAws_restJson1InitiateJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
