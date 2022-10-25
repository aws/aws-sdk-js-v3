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
  GetInsightImpactGraphRequest,
  GetInsightImpactGraphRequestFilterSensitiveLog,
  GetInsightImpactGraphResult,
  GetInsightImpactGraphResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetInsightImpactGraphCommand,
  serializeAws_restJson1GetInsightImpactGraphCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";

export interface GetInsightImpactGraphCommandInput extends GetInsightImpactGraphRequest {}
export interface GetInsightImpactGraphCommandOutput extends GetInsightImpactGraphResult, __MetadataBearer {}

/**
 * <p>Retrieves a service graph structure filtered by the specified insight. The service graph is limited to only
 *          structural information. For a complete service graph, use this API with the GetServiceGraph API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, GetInsightImpactGraphCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, GetInsightImpactGraphCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const command = new GetInsightImpactGraphCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetInsightImpactGraphCommandInput} for command's `input` shape.
 * @see {@link GetInsightImpactGraphCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for XRayClient's `config` shape.
 *
 */
export class GetInsightImpactGraphCommand extends $Command<
  GetInsightImpactGraphCommandInput,
  GetInsightImpactGraphCommandOutput,
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

  constructor(readonly input: GetInsightImpactGraphCommandInput) {
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
  ): Handler<GetInsightImpactGraphCommandInput, GetInsightImpactGraphCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetInsightImpactGraphCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "XRayClient";
    const commandName = "GetInsightImpactGraphCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetInsightImpactGraphRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetInsightImpactGraphResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetInsightImpactGraphCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetInsightImpactGraphCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetInsightImpactGraphCommandOutput> {
    return deserializeAws_restJson1GetInsightImpactGraphCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
