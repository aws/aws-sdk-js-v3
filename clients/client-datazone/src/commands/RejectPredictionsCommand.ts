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

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { RejectPredictionsInput, RejectPredictionsOutput } from "../models/models_1";
import { de_RejectPredictionsCommand, se_RejectPredictionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RejectPredictionsCommand}.
 */
export interface RejectPredictionsCommandInput extends RejectPredictionsInput {}
/**
 * @public
 *
 * The output of {@link RejectPredictionsCommand}.
 */
export interface RejectPredictionsCommandOutput extends RejectPredictionsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Rejects automatically generated business-friendly metadata for your Amazon DataZone
 *          assets.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, RejectPredictionsCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, RejectPredictionsCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // RejectPredictionsInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 *   revision: "STRING_VALUE",
 *   rejectRule: { // RejectRule
 *     rule: "ALL" || "NONE",
 *     threshold: Number("float"),
 *   },
 *   rejectChoices: [ // RejectChoices
 *     { // RejectChoice
 *       predictionTarget: "STRING_VALUE",
 *       predictionChoices: [ // PredictionChoices
 *         Number("int"),
 *       ],
 *     },
 *   ],
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new RejectPredictionsCommand(input);
 * const response = await client.send(command);
 * // { // RejectPredictionsOutput
 * //   domainId: "STRING_VALUE", // required
 * //   assetId: "STRING_VALUE", // required
 * //   assetRevision: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param RejectPredictionsCommandInput - {@link RejectPredictionsCommandInput}
 * @returns {@link RejectPredictionsCommandOutput}
 * @see {@link RejectPredictionsCommandInput} for command's `input` shape.
 * @see {@link RejectPredictionsCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link DataZoneServiceException}
 * <p>Base exception class for all service exceptions from DataZone service.</p>
 *
 */
export class RejectPredictionsCommand extends $Command<
  RejectPredictionsCommandInput,
  RejectPredictionsCommandOutput,
  DataZoneClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: RejectPredictionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataZoneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RejectPredictionsCommandInput, RejectPredictionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RejectPredictionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataZoneClient";
    const commandName = "RejectPredictionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "DataZone",
        operation: "RejectPredictions",
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
  private serialize(input: RejectPredictionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RejectPredictionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RejectPredictionsCommandOutput> {
    return de_RejectPredictionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
