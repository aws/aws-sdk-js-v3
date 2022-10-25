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
  PutSigningProfileRequest,
  PutSigningProfileRequestFilterSensitiveLog,
  PutSigningProfileResponse,
  PutSigningProfileResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1PutSigningProfileCommand,
  serializeAws_restJson1PutSigningProfileCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SignerClientResolvedConfig } from "../SignerClient";

export interface PutSigningProfileCommandInput extends PutSigningProfileRequest {}
export interface PutSigningProfileCommandOutput extends PutSigningProfileResponse, __MetadataBearer {}

/**
 * <p>Creates a signing profile. A signing profile is a code signing template that can be used to
 * 			carry out a pre-defined signing job. For more information, see <a href="http://docs.aws.amazon.com/signer/latest/developerguide/gs-profile.html">http://docs.aws.amazon.com/signer/latest/developerguide/gs-profile.html</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, PutSigningProfileCommand } from "@aws-sdk/client-signer"; // ES Modules import
 * // const { SignerClient, PutSigningProfileCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * const client = new SignerClient(config);
 * const command = new PutSigningProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutSigningProfileCommandInput} for command's `input` shape.
 * @see {@link PutSigningProfileCommandOutput} for command's `response` shape.
 * @see {@link SignerClientResolvedConfig | config} for SignerClient's `config` shape.
 *
 */
export class PutSigningProfileCommand extends $Command<
  PutSigningProfileCommandInput,
  PutSigningProfileCommandOutput,
  SignerClientResolvedConfig
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

  constructor(readonly input: PutSigningProfileCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SignerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutSigningProfileCommandInput, PutSigningProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutSigningProfileCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SignerClient";
    const commandName = "PutSigningProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutSigningProfileRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutSigningProfileResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutSigningProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutSigningProfileCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutSigningProfileCommandOutput> {
    return deserializeAws_restJson1PutSigningProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
