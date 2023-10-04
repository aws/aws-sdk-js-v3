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
import { AcceptPredictionsInput, AcceptPredictionsOutput } from "../models/models_0";
import { de_AcceptPredictionsCommand, se_AcceptPredictionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AcceptPredictionsCommand}.
 */
export interface AcceptPredictionsCommandInput extends AcceptPredictionsInput {}
/**
 * @public
 *
 * The output of {@link AcceptPredictionsCommand}.
 */
export interface AcceptPredictionsCommandOutput extends AcceptPredictionsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Accepts automatically generated business-friendly metadata for your Amazon DataZone
 *          assets.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, AcceptPredictionsCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, AcceptPredictionsCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // AcceptPredictionsInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 *   revision: "STRING_VALUE",
 *   acceptRule: { // AcceptRule
 *     rule: "ALL" || "NONE",
 *     threshold: Number("float"),
 *   },
 *   acceptChoices: [ // AcceptChoices
 *     { // AcceptChoice
 *       predictionTarget: "STRING_VALUE",
 *       predictionChoice: Number("int"),
 *     },
 *   ],
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new AcceptPredictionsCommand(input);
 * const response = await client.send(command);
 * // { // AcceptPredictionsOutput
 * //   domainId: "STRING_VALUE", // required
 * //   assetId: "STRING_VALUE", // required
 * //   revision: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param AcceptPredictionsCommandInput - {@link AcceptPredictionsCommandInput}
 * @returns {@link AcceptPredictionsCommandOutput}
 * @see {@link AcceptPredictionsCommandInput} for command's `input` shape.
 * @see {@link AcceptPredictionsCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There is a conflict while performing this action.</p>
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
export class AcceptPredictionsCommand extends $Command<
  AcceptPredictionsCommandInput,
  AcceptPredictionsCommandOutput,
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
  constructor(readonly input: AcceptPredictionsCommandInput) {
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
  ): Handler<AcceptPredictionsCommandInput, AcceptPredictionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AcceptPredictionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataZoneClient";
    const commandName = "AcceptPredictionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "DataZone",
        operation: "AcceptPredictions",
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
  private serialize(input: AcceptPredictionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AcceptPredictionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AcceptPredictionsCommandOutput> {
    return de_AcceptPredictionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
