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
  GetLaunchProfileDetailsRequest,
  GetLaunchProfileDetailsRequestFilterSensitiveLog,
  GetLaunchProfileDetailsResponse,
  GetLaunchProfileDetailsResponseFilterSensitiveLog,
} from "../models/models_0";
import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import {
  deserializeAws_restJson1GetLaunchProfileDetailsCommand,
  serializeAws_restJson1GetLaunchProfileDetailsCommand,
} from "../protocols/Aws_restJson1";

export interface GetLaunchProfileDetailsCommandInput extends GetLaunchProfileDetailsRequest {}
export interface GetLaunchProfileDetailsCommandOutput extends GetLaunchProfileDetailsResponse, __MetadataBearer {}

/**
 * <p>Launch profile details include the launch profile resource and summary information of
 *             resources that are used by, or available to, the launch profile. This includes the name
 *             and description of all studio components used by the launch profiles, and the name and
 *             description of streaming images that can be used with this launch profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, GetLaunchProfileDetailsCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, GetLaunchProfileDetailsCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new GetLaunchProfileDetailsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLaunchProfileDetailsCommandInput} for command's `input` shape.
 * @see {@link GetLaunchProfileDetailsCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for NimbleClient's `config` shape.
 *
 */
export class GetLaunchProfileDetailsCommand extends $Command<
  GetLaunchProfileDetailsCommandInput,
  GetLaunchProfileDetailsCommandOutput,
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

  constructor(readonly input: GetLaunchProfileDetailsCommandInput) {
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
  ): Handler<GetLaunchProfileDetailsCommandInput, GetLaunchProfileDetailsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetLaunchProfileDetailsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NimbleClient";
    const commandName = "GetLaunchProfileDetailsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetLaunchProfileDetailsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetLaunchProfileDetailsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetLaunchProfileDetailsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetLaunchProfileDetailsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetLaunchProfileDetailsCommandOutput> {
    return deserializeAws_restJson1GetLaunchProfileDetailsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
