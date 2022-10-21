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

import { ACMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMClient";
import { UpdateCertificateOptionsRequest, UpdateCertificateOptionsRequestFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateCertificateOptionsCommand,
  serializeAws_json1_1UpdateCertificateOptionsCommand,
} from "../protocols/Aws_json1_1";

export interface UpdateCertificateOptionsCommandInput extends UpdateCertificateOptionsRequest {}
export interface UpdateCertificateOptionsCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates a certificate. Currently, you can use this function to specify whether to opt in
 *       to or out of recording your certificate in a certificate transparency log. For more
 *       information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-bestpractices.html#best-practices-transparency"> Opting Out of
 *         Certificate Transparency Logging</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, UpdateCertificateOptionsCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, UpdateCertificateOptionsCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * const client = new ACMClient(config);
 * const command = new UpdateCertificateOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateCertificateOptionsCommandInput} for command's `input` shape.
 * @see {@link UpdateCertificateOptionsCommandOutput} for command's `response` shape.
 * @see {@link ACMClientResolvedConfig | config} for ACMClient's `config` shape.
 *
 */
export class UpdateCertificateOptionsCommand extends $Command<
  UpdateCertificateOptionsCommandInput,
  UpdateCertificateOptionsCommandOutput,
  ACMClientResolvedConfig
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

  constructor(readonly input: UpdateCertificateOptionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ACMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateCertificateOptionsCommandInput, UpdateCertificateOptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateCertificateOptionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ACMClient";
    const commandName = "UpdateCertificateOptionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateCertificateOptionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateCertificateOptionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateCertificateOptionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateCertificateOptionsCommandOutput> {
    return deserializeAws_json1_1UpdateCertificateOptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
