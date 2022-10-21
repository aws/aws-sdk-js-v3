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
  RotateEncryptionKeyMessage,
  RotateEncryptionKeyMessageFilterSensitiveLog,
  RotateEncryptionKeyResult,
  RotateEncryptionKeyResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_queryRotateEncryptionKeyCommand,
  serializeAws_queryRotateEncryptionKeyCommand,
} from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

export interface RotateEncryptionKeyCommandInput extends RotateEncryptionKeyMessage {}
export interface RotateEncryptionKeyCommandOutput extends RotateEncryptionKeyResult, __MetadataBearer {}

/**
 * <p>Rotates the encryption keys for a cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, RotateEncryptionKeyCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, RotateEncryptionKeyCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new RotateEncryptionKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RotateEncryptionKeyCommandInput} for command's `input` shape.
 * @see {@link RotateEncryptionKeyCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 */
export class RotateEncryptionKeyCommand extends $Command<
  RotateEncryptionKeyCommandInput,
  RotateEncryptionKeyCommandOutput,
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

  constructor(readonly input: RotateEncryptionKeyCommandInput) {
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
  ): Handler<RotateEncryptionKeyCommandInput, RotateEncryptionKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RotateEncryptionKeyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "RotateEncryptionKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RotateEncryptionKeyMessageFilterSensitiveLog,
      outputFilterSensitiveLog: RotateEncryptionKeyResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RotateEncryptionKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryRotateEncryptionKeyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RotateEncryptionKeyCommandOutput> {
    return deserializeAws_queryRotateEncryptionKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
