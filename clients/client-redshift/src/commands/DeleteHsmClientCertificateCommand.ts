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
  DeleteHsmClientCertificateMessage,
  DeleteHsmClientCertificateMessageFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDeleteHsmClientCertificateCommand,
  serializeAws_queryDeleteHsmClientCertificateCommand,
} from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

export interface DeleteHsmClientCertificateCommandInput extends DeleteHsmClientCertificateMessage {}
export interface DeleteHsmClientCertificateCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified HSM client certificate.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DeleteHsmClientCertificateCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DeleteHsmClientCertificateCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DeleteHsmClientCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteHsmClientCertificateCommandInput} for command's `input` shape.
 * @see {@link DeleteHsmClientCertificateCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 */
export class DeleteHsmClientCertificateCommand extends $Command<
  DeleteHsmClientCertificateCommandInput,
  DeleteHsmClientCertificateCommandOutput,
  RedshiftClientResolvedConfig
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

  constructor(readonly input: DeleteHsmClientCertificateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteHsmClientCertificateCommandInput, DeleteHsmClientCertificateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteHsmClientCertificateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DeleteHsmClientCertificateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteHsmClientCertificateMessageFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteHsmClientCertificateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteHsmClientCertificateCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteHsmClientCertificateCommandOutput> {
    return deserializeAws_queryDeleteHsmClientCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
