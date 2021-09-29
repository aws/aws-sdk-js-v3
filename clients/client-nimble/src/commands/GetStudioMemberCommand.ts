import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { GetStudioMemberRequest, GetStudioMemberResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetStudioMemberCommand,
  serializeAws_restJson1GetStudioMemberCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface GetStudioMemberCommandInput extends GetStudioMemberRequest {}
export interface GetStudioMemberCommandOutput extends GetStudioMemberResponse, __MetadataBearer {}

/**
 * <p>Get a user's membership in a studio.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, GetStudioMemberCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, GetStudioMemberCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new GetStudioMemberCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetStudioMemberCommandInput} for command's `input` shape.
 * @see {@link GetStudioMemberCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetStudioMemberCommand extends $Command<
  GetStudioMemberCommandInput,
  GetStudioMemberCommandOutput,
  NimbleClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetStudioMemberCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NimbleClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetStudioMemberCommandInput, GetStudioMemberCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NimbleClient";
    const commandName = "GetStudioMemberCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetStudioMemberRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetStudioMemberResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetStudioMemberCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetStudioMemberCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetStudioMemberCommandOutput> {
    return deserializeAws_restJson1GetStudioMemberCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
