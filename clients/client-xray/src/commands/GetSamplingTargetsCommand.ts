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
  GetSamplingTargetsRequest,
  GetSamplingTargetsRequestFilterSensitiveLog,
  GetSamplingTargetsResult,
  GetSamplingTargetsResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetSamplingTargetsCommand,
  serializeAws_restJson1GetSamplingTargetsCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";

export interface GetSamplingTargetsCommandInput extends GetSamplingTargetsRequest {}
export interface GetSamplingTargetsCommandOutput extends GetSamplingTargetsResult, __MetadataBearer {}

/**
 * <p>Requests a sampling quota for rules that the service is using to sample requests.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, GetSamplingTargetsCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, GetSamplingTargetsCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const command = new GetSamplingTargetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSamplingTargetsCommandInput} for command's `input` shape.
 * @see {@link GetSamplingTargetsCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for XRayClient's `config` shape.
 *
 */
export class GetSamplingTargetsCommand extends $Command<
  GetSamplingTargetsCommandInput,
  GetSamplingTargetsCommandOutput,
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

  constructor(readonly input: GetSamplingTargetsCommandInput) {
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
  ): Handler<GetSamplingTargetsCommandInput, GetSamplingTargetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSamplingTargetsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "XRayClient";
    const commandName = "GetSamplingTargetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSamplingTargetsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetSamplingTargetsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSamplingTargetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetSamplingTargetsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSamplingTargetsCommandOutput> {
    return deserializeAws_restJson1GetSamplingTargetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
