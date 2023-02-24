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
  GetSinkInput,
  GetSinkInputFilterSensitiveLog,
  GetSinkOutput,
  GetSinkOutputFilterSensitiveLog,
} from "../models/models_0";
import { OAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OAMClient";
import {
  deserializeAws_restJson1GetSinkCommand,
  serializeAws_restJson1GetSinkCommand,
} from "../protocols/Aws_restJson1";

export interface GetSinkCommandInput extends GetSinkInput {}
export interface GetSinkCommandOutput extends GetSinkOutput, __MetadataBearer {}

/**
 * <p>Returns complete information about one monitoring account sink.</p>
 *         <p>To use this operation, provide the sink ARN. To retrieve a list of sink ARNs, use <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_ListSinks.html">ListSinks</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OAMClient, GetSinkCommand } from "@aws-sdk/client-oam"; // ES Modules import
 * // const { OAMClient, GetSinkCommand } = require("@aws-sdk/client-oam"); // CommonJS import
 * const client = new OAMClient(config);
 * const command = new GetSinkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSinkCommandInput} for command's `input` shape.
 * @see {@link GetSinkCommandOutput} for command's `response` shape.
 * @see {@link OAMClientResolvedConfig | config} for OAMClient's `config` shape.
 *
 */
export class GetSinkCommand extends $Command<GetSinkCommandInput, GetSinkCommandOutput, OAMClientResolvedConfig> {
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

  constructor(readonly input: GetSinkCommandInput) {
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
  ): Handler<GetSinkCommandInput, GetSinkCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetSinkCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OAMClient";
    const commandName = "GetSinkCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSinkInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetSinkOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSinkCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetSinkCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSinkCommandOutput> {
    return deserializeAws_restJson1GetSinkCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
