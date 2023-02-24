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
  GetLinkInput,
  GetLinkInputFilterSensitiveLog,
  GetLinkOutput,
  GetLinkOutputFilterSensitiveLog,
} from "../models/models_0";
import { OAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OAMClient";
import {
  deserializeAws_restJson1GetLinkCommand,
  serializeAws_restJson1GetLinkCommand,
} from "../protocols/Aws_restJson1";

export interface GetLinkCommandInput extends GetLinkInput {}
export interface GetLinkCommandOutput extends GetLinkOutput, __MetadataBearer {}

/**
 * <p>Returns complete information about one link.</p>
 *         <p>To use this operation, provide the link ARN. To retrieve a list of link ARNs, use <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_ListLinks.html">ListLinks</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OAMClient, GetLinkCommand } from "@aws-sdk/client-oam"; // ES Modules import
 * // const { OAMClient, GetLinkCommand } = require("@aws-sdk/client-oam"); // CommonJS import
 * const client = new OAMClient(config);
 * const command = new GetLinkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLinkCommandInput} for command's `input` shape.
 * @see {@link GetLinkCommandOutput} for command's `response` shape.
 * @see {@link OAMClientResolvedConfig | config} for OAMClient's `config` shape.
 *
 */
export class GetLinkCommand extends $Command<GetLinkCommandInput, GetLinkCommandOutput, OAMClientResolvedConfig> {
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

  constructor(readonly input: GetLinkCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetLinkCommandInput, GetLinkCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetLinkCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OAMClient";
    const commandName = "GetLinkCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetLinkInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetLinkOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetLinkCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetLinkCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetLinkCommandOutput> {
    return deserializeAws_restJson1GetLinkCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
