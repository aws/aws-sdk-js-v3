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
  ListSigningProfilesRequest,
  ListSigningProfilesRequestFilterSensitiveLog,
  ListSigningProfilesResponse,
  ListSigningProfilesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListSigningProfilesCommand,
  serializeAws_restJson1ListSigningProfilesCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SignerClientResolvedConfig } from "../SignerClient";

export interface ListSigningProfilesCommandInput extends ListSigningProfilesRequest {}
export interface ListSigningProfilesCommandOutput extends ListSigningProfilesResponse, __MetadataBearer {}

/**
 * <p>Lists all available signing profiles in your AWS account. Returns only profiles with
 * 			an <code>ACTIVE</code> status unless the <code>includeCanceled</code> request field is
 * 			set to <code>true</code>. If additional jobs remain to be listed, code signing returns a
 * 				<code>nextToken</code> value. Use this value in subsequent calls to
 * 				<code>ListSigningJobs</code> to fetch the remaining values. You can continue calling
 * 				<code>ListSigningJobs</code> with your <code>maxResults</code> parameter and with
 * 			new values that code signing returns in the <code>nextToken</code> parameter until all of your
 * 			signing jobs have been returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, ListSigningProfilesCommand } from "@aws-sdk/client-signer"; // ES Modules import
 * // const { SignerClient, ListSigningProfilesCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * const client = new SignerClient(config);
 * const command = new ListSigningProfilesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSigningProfilesCommandInput} for command's `input` shape.
 * @see {@link ListSigningProfilesCommandOutput} for command's `response` shape.
 * @see {@link SignerClientResolvedConfig | config} for SignerClient's `config` shape.
 *
 */
export class ListSigningProfilesCommand extends $Command<
  ListSigningProfilesCommandInput,
  ListSigningProfilesCommandOutput,
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

  constructor(readonly input: ListSigningProfilesCommandInput) {
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
  ): Handler<ListSigningProfilesCommandInput, ListSigningProfilesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSigningProfilesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SignerClient";
    const commandName = "ListSigningProfilesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSigningProfilesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListSigningProfilesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListSigningProfilesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListSigningProfilesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSigningProfilesCommandOutput> {
    return deserializeAws_restJson1ListSigningProfilesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
