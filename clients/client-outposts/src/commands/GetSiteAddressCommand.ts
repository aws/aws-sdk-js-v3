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
  GetSiteAddressInput,
  GetSiteAddressInputFilterSensitiveLog,
  GetSiteAddressOutput,
  GetSiteAddressOutputFilterSensitiveLog,
} from "../models/models_0";
import { OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OutpostsClient";
import {
  deserializeAws_restJson1GetSiteAddressCommand,
  serializeAws_restJson1GetSiteAddressCommand,
} from "../protocols/Aws_restJson1";

export interface GetSiteAddressCommandInput extends GetSiteAddressInput {}
export interface GetSiteAddressCommandOutput extends GetSiteAddressOutput, __MetadataBearer {}

/**
 * <p>
 *       Gets the site address of the specified site.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, GetSiteAddressCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, GetSiteAddressCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * const client = new OutpostsClient(config);
 * const command = new GetSiteAddressCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSiteAddressCommandInput} for command's `input` shape.
 * @see {@link GetSiteAddressCommandOutput} for command's `response` shape.
 * @see {@link OutpostsClientResolvedConfig | config} for OutpostsClient's `config` shape.
 *
 */
export class GetSiteAddressCommand extends $Command<
  GetSiteAddressCommandInput,
  GetSiteAddressCommandOutput,
  OutpostsClientResolvedConfig
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

  constructor(readonly input: GetSiteAddressCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OutpostsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSiteAddressCommandInput, GetSiteAddressCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSiteAddressCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OutpostsClient";
    const commandName = "GetSiteAddressCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSiteAddressInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetSiteAddressOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSiteAddressCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetSiteAddressCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSiteAddressCommandOutput> {
    return deserializeAws_restJson1GetSiteAddressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
