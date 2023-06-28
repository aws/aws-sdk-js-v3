// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { PutRumEventsRequest, PutRumEventsResponse } from "../models/models_0";
import { de_PutRumEventsCommand, se_PutRumEventsCommand } from "../protocols/Aws_restJson1";
import { RUMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RUMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutRumEventsCommand}.
 */
export interface PutRumEventsCommandInput extends PutRumEventsRequest {}
/**
 * @public
 *
 * The output of {@link PutRumEventsCommand}.
 */
export interface PutRumEventsCommandOutput extends PutRumEventsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Sends telemetry events about your application performance and user behavior to CloudWatch RUM. The code
 *       snippet that RUM generates for you to add to your application includes <code>PutRumEvents</code> operations to
 *       send this data to RUM.</p>
 *          <p>Each <code>PutRumEvents</code> operation can send a batch of events from one user session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RUMClient, PutRumEventsCommand } from "@aws-sdk/client-rum"; // ES Modules import
 * // const { RUMClient, PutRumEventsCommand } = require("@aws-sdk/client-rum"); // CommonJS import
 * const client = new RUMClient(config);
 * const input = { // PutRumEventsRequest
 *   Id: "STRING_VALUE", // required
 *   BatchId: "STRING_VALUE", // required
 *   AppMonitorDetails: { // AppMonitorDetails
 *     name: "STRING_VALUE",
 *     id: "STRING_VALUE",
 *     version: "STRING_VALUE",
 *   },
 *   UserDetails: { // UserDetails
 *     userId: "STRING_VALUE",
 *     sessionId: "STRING_VALUE",
 *   },
 *   RumEvents: [ // RumEventList // required
 *     { // RumEvent
 *       id: "STRING_VALUE", // required
 *       timestamp: new Date("TIMESTAMP"), // required
 *       type: "STRING_VALUE", // required
 *       metadata: "STRING_VALUE",
 *       details: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new PutRumEventsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutRumEventsCommandInput - {@link PutRumEventsCommandInput}
 * @returns {@link PutRumEventsCommandOutput}
 * @see {@link PutRumEventsCommandInput} for command's `input` shape.
 * @see {@link PutRumEventsCommandOutput} for command's `response` shape.
 * @see {@link RUMClientResolvedConfig | config} for RUMClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal service exception.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled because of quota limits.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the arguments for the request is not valid.</p>
 *
 * @throws {@link RUMServiceException}
 * <p>Base exception class for all service exceptions from RUM service.</p>
 *
 */
export class PutRumEventsCommand extends $Command<
  PutRumEventsCommandInput,
  PutRumEventsCommandOutput,
  RUMClientResolvedConfig
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
  constructor(readonly input: PutRumEventsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RUMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutRumEventsCommandInput, PutRumEventsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, PutRumEventsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RUMClient";
    const commandName = "PutRumEventsCommand";
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
  private serialize(input: PutRumEventsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutRumEventsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutRumEventsCommandOutput> {
    return de_PutRumEventsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
