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
  ListSigningPlatformsRequest,
  ListSigningPlatformsRequestFilterSensitiveLog,
  ListSigningPlatformsResponse,
  ListSigningPlatformsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListSigningPlatformsCommand,
  serializeAws_restJson1ListSigningPlatformsCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SignerClientResolvedConfig } from "../SignerClient";

export interface ListSigningPlatformsCommandInput extends ListSigningPlatformsRequest {}
export interface ListSigningPlatformsCommandOutput extends ListSigningPlatformsResponse, __MetadataBearer {}

/**
 * <p>Lists all signing platforms available in code signing that match the request parameters. If
 * 			additional jobs remain to be listed, code signing returns a <code>nextToken</code> value. Use
 * 			this value in subsequent calls to <code>ListSigningJobs</code> to fetch the remaining
 * 			values. You can continue calling <code>ListSigningJobs</code> with your
 * 				<code>maxResults</code> parameter and with new values that code signing returns in the
 * 				<code>nextToken</code> parameter until all of your signing jobs have been
 * 			returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, ListSigningPlatformsCommand } from "@aws-sdk/client-signer"; // ES Modules import
 * // const { SignerClient, ListSigningPlatformsCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * const client = new SignerClient(config);
 * const command = new ListSigningPlatformsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSigningPlatformsCommandInput} for command's `input` shape.
 * @see {@link ListSigningPlatformsCommandOutput} for command's `response` shape.
 * @see {@link SignerClientResolvedConfig | config} for SignerClient's `config` shape.
 *
 */
export class ListSigningPlatformsCommand extends $Command<
  ListSigningPlatformsCommandInput,
  ListSigningPlatformsCommandOutput,
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

  constructor(readonly input: ListSigningPlatformsCommandInput) {
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
  ): Handler<ListSigningPlatformsCommandInput, ListSigningPlatformsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSigningPlatformsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SignerClient";
    const commandName = "ListSigningPlatformsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSigningPlatformsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListSigningPlatformsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListSigningPlatformsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListSigningPlatformsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSigningPlatformsCommandOutput> {
    return deserializeAws_restJson1ListSigningPlatformsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
