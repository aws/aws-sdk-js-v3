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
  GetServiceGraphRequest,
  GetServiceGraphRequestFilterSensitiveLog,
  GetServiceGraphResult,
  GetServiceGraphResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetServiceGraphCommand,
  serializeAws_restJson1GetServiceGraphCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";

export interface GetServiceGraphCommandInput extends GetServiceGraphRequest {}
export interface GetServiceGraphCommandOutput extends GetServiceGraphResult, __MetadataBearer {}

/**
 * <p>Retrieves a document that describes services that process incoming requests, and
 *       downstream services that they call as a result. Root services process incoming requests and
 *       make calls to downstream services. Root services are applications that use the <a href="https://docs.aws.amazon.com/xray/index.html">Amazon Web Services X-Ray SDK</a>.
 *       Downstream services can be other applications, Amazon Web Services resources, HTTP web APIs, or SQL
 *       databases.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, GetServiceGraphCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, GetServiceGraphCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const command = new GetServiceGraphCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetServiceGraphCommandInput} for command's `input` shape.
 * @see {@link GetServiceGraphCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for XRayClient's `config` shape.
 *
 */
export class GetServiceGraphCommand extends $Command<
  GetServiceGraphCommandInput,
  GetServiceGraphCommandOutput,
  XRayClientResolvedConfig
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

  constructor(readonly input: GetServiceGraphCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: XRayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetServiceGraphCommandInput, GetServiceGraphCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetServiceGraphCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "XRayClient";
    const commandName = "GetServiceGraphCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetServiceGraphRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetServiceGraphResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetServiceGraphCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetServiceGraphCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetServiceGraphCommandOutput> {
    return deserializeAws_restJson1GetServiceGraphCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
