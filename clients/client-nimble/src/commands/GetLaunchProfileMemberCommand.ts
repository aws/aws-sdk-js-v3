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
  GetLaunchProfileMemberRequest,
  GetLaunchProfileMemberRequestFilterSensitiveLog,
  GetLaunchProfileMemberResponse,
  GetLaunchProfileMemberResponseFilterSensitiveLog,
} from "../models/models_0";
import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import {
  deserializeAws_restJson1GetLaunchProfileMemberCommand,
  serializeAws_restJson1GetLaunchProfileMemberCommand,
} from "../protocols/Aws_restJson1";

export interface GetLaunchProfileMemberCommandInput extends GetLaunchProfileMemberRequest {}
export interface GetLaunchProfileMemberCommandOutput extends GetLaunchProfileMemberResponse, __MetadataBearer {}

/**
 * <p>Get a user persona in launch profile membership.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, GetLaunchProfileMemberCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, GetLaunchProfileMemberCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new GetLaunchProfileMemberCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLaunchProfileMemberCommandInput} for command's `input` shape.
 * @see {@link GetLaunchProfileMemberCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for NimbleClient's `config` shape.
 *
 */
export class GetLaunchProfileMemberCommand extends $Command<
  GetLaunchProfileMemberCommandInput,
  GetLaunchProfileMemberCommandOutput,
  NimbleClientResolvedConfig
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

  constructor(readonly input: GetLaunchProfileMemberCommandInput) {
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
  ): Handler<GetLaunchProfileMemberCommandInput, GetLaunchProfileMemberCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetLaunchProfileMemberCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NimbleClient";
    const commandName = "GetLaunchProfileMemberCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetLaunchProfileMemberRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetLaunchProfileMemberResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetLaunchProfileMemberCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetLaunchProfileMemberCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetLaunchProfileMemberCommandOutput> {
    return deserializeAws_restJson1GetLaunchProfileMemberCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
