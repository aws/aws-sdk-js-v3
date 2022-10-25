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
  PutLaunchProfileMembersRequest,
  PutLaunchProfileMembersRequestFilterSensitiveLog,
  PutLaunchProfileMembersResponse,
  PutLaunchProfileMembersResponseFilterSensitiveLog,
} from "../models/models_0";
import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import {
  deserializeAws_restJson1PutLaunchProfileMembersCommand,
  serializeAws_restJson1PutLaunchProfileMembersCommand,
} from "../protocols/Aws_restJson1";

export interface PutLaunchProfileMembersCommandInput extends PutLaunchProfileMembersRequest {}
export interface PutLaunchProfileMembersCommandOutput extends PutLaunchProfileMembersResponse, __MetadataBearer {}

/**
 * <p>Add/update users with given persona to launch profile membership.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, PutLaunchProfileMembersCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, PutLaunchProfileMembersCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new PutLaunchProfileMembersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutLaunchProfileMembersCommandInput} for command's `input` shape.
 * @see {@link PutLaunchProfileMembersCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for NimbleClient's `config` shape.
 *
 */
export class PutLaunchProfileMembersCommand extends $Command<
  PutLaunchProfileMembersCommandInput,
  PutLaunchProfileMembersCommandOutput,
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

  constructor(readonly input: PutLaunchProfileMembersCommandInput) {
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
  ): Handler<PutLaunchProfileMembersCommandInput, PutLaunchProfileMembersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutLaunchProfileMembersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NimbleClient";
    const commandName = "PutLaunchProfileMembersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutLaunchProfileMembersRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutLaunchProfileMembersResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutLaunchProfileMembersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutLaunchProfileMembersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutLaunchProfileMembersCommandOutput> {
    return deserializeAws_restJson1PutLaunchProfileMembersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
