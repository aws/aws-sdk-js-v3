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

import { GetInsightEventsRequest, GetInsightEventsResult } from "../models/models_0";
import {
  deserializeAws_restJson1GetInsightEventsCommand,
  serializeAws_restJson1GetInsightEventsCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";

/**
 * @public
 *
 * The input for {@link GetInsightEventsCommand}.
 */
export interface GetInsightEventsCommandInput extends GetInsightEventsRequest {}
/**
 * @public
 *
 * The output of {@link GetInsightEventsCommand}.
 */
export interface GetInsightEventsCommandOutput extends GetInsightEventsResult, __MetadataBearer {}

/**
 * @public
 * <p>X-Ray reevaluates insights periodically until they're resolved, and records each intermediate state as an
 *          event. You can review an insight's events in the Impact Timeline on the Inspect page in the X-Ray
 *          console.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, GetInsightEventsCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, GetInsightEventsCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const command = new GetInsightEventsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetInsightEventsCommandInput - {@link GetInsightEventsCommandInput}
 * @returns {@link GetInsightEventsCommandOutput}
 * @see {@link GetInsightEventsCommandInput} for command's `input` shape.
 * @see {@link GetInsightEventsCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for XRayClient's `config` shape.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is missing required parameters or has invalid parameters.</p>
 *
 * @throws {@link ThrottledException} (client fault)
 *  <p>The request exceeds the maximum number of requests per second.</p>
 *
 *
 */
export class GetInsightEventsCommand extends $Command<
  GetInsightEventsCommandInput,
  GetInsightEventsCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: GetInsightEventsCommandInput) {
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
  ): Handler<GetInsightEventsCommandInput, GetInsightEventsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetInsightEventsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "XRayClient";
    const commandName = "GetInsightEventsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: GetInsightEventsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetInsightEventsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetInsightEventsCommandOutput> {
    return deserializeAws_restJson1GetInsightEventsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
