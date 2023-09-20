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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { EvidentlyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EvidentlyClient";
import { PutProjectEventsRequest, PutProjectEventsResponse } from "../models/models_0";
import { de_PutProjectEventsCommand, se_PutProjectEventsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutProjectEventsCommand}.
 */
export interface PutProjectEventsCommandInput extends PutProjectEventsRequest {}
/**
 * @public
 *
 * The output of {@link PutProjectEventsCommand}.
 */
export interface PutProjectEventsCommandOutput extends PutProjectEventsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Sends performance events to Evidently. These events can be used to evaluate a launch or
 *       an experiment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvidentlyClient, PutProjectEventsCommand } from "@aws-sdk/client-evidently"; // ES Modules import
 * // const { EvidentlyClient, PutProjectEventsCommand } = require("@aws-sdk/client-evidently"); // CommonJS import
 * const client = new EvidentlyClient(config);
 * const input = { // PutProjectEventsRequest
 *   project: "STRING_VALUE", // required
 *   events: [ // EventList // required
 *     { // Event
 *       timestamp: new Date("TIMESTAMP"), // required
 *       type: "STRING_VALUE", // required
 *       data: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new PutProjectEventsCommand(input);
 * const response = await client.send(command);
 * // { // PutProjectEventsResponse
 * //   failedEventCount: Number("int"),
 * //   eventResults: [ // PutProjectEventsResultEntryList
 * //     { // PutProjectEventsResultEntry
 * //       eventId: "STRING_VALUE",
 * //       errorCode: "STRING_VALUE",
 * //       errorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param PutProjectEventsCommandInput - {@link PutProjectEventsCommandInput}
 * @returns {@link PutProjectEventsCommandOutput}
 * @see {@link PutProjectEventsCommandInput} for command's `input` shape.
 * @see {@link PutProjectEventsCommandOutput} for command's `response` shape.
 * @see {@link EvidentlyClientResolvedConfig | config} for EvidentlyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling. Retry the request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The value of a parameter in the request caused an error.</p>
 *
 * @throws {@link EvidentlyServiceException}
 * <p>Base exception class for all service exceptions from Evidently service.</p>
 *
 */
export class PutProjectEventsCommand extends $Command<
  PutProjectEventsCommandInput,
  PutProjectEventsCommandOutput,
  EvidentlyClientResolvedConfig
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
  constructor(readonly input: PutProjectEventsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EvidentlyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutProjectEventsCommandInput, PutProjectEventsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutProjectEventsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EvidentlyClient";
    const commandName = "PutProjectEventsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Evidently",
        operation: "PutProjectEvents",
      },
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
  private serialize(input: PutProjectEventsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutProjectEventsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutProjectEventsCommandOutput> {
    return de_PutProjectEventsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
