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
  UpdateDocumentDefaultVersionRequest,
  UpdateDocumentDefaultVersionRequestFilterSensitiveLog,
  UpdateDocumentDefaultVersionResult,
  UpdateDocumentDefaultVersionResultFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_json1_1UpdateDocumentDefaultVersionCommand,
  serializeAws_json1_1UpdateDocumentDefaultVersionCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

export interface UpdateDocumentDefaultVersionCommandInput extends UpdateDocumentDefaultVersionRequest {}
export interface UpdateDocumentDefaultVersionCommandOutput
  extends UpdateDocumentDefaultVersionResult,
    __MetadataBearer {}

/**
 * <p>Set the default version of a document. </p>
 *          <note>
 *             <p>If you change a document version for a State Manager association, Systems Manager immediately runs
 *     the association unless you previously specifed the <code>apply-only-at-cron-interval</code>
 *     parameter.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UpdateDocumentDefaultVersionCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, UpdateDocumentDefaultVersionCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new UpdateDocumentDefaultVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDocumentDefaultVersionCommandInput} for command's `input` shape.
 * @see {@link UpdateDocumentDefaultVersionCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 */
export class UpdateDocumentDefaultVersionCommand extends $Command<
  UpdateDocumentDefaultVersionCommandInput,
  UpdateDocumentDefaultVersionCommandOutput,
  SSMClientResolvedConfig
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

  constructor(readonly input: UpdateDocumentDefaultVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateDocumentDefaultVersionCommandInput, UpdateDocumentDefaultVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateDocumentDefaultVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "UpdateDocumentDefaultVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateDocumentDefaultVersionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateDocumentDefaultVersionResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateDocumentDefaultVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateDocumentDefaultVersionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateDocumentDefaultVersionCommandOutput> {
    return deserializeAws_json1_1UpdateDocumentDefaultVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
