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

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { PreviewPrivacyImpactInput, PreviewPrivacyImpactOutput } from "../models/models_0";
import { de_PreviewPrivacyImpactCommand, se_PreviewPrivacyImpactCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PreviewPrivacyImpactCommand}.
 */
export interface PreviewPrivacyImpactCommandInput extends PreviewPrivacyImpactInput {}
/**
 * @public
 *
 * The output of {@link PreviewPrivacyImpactCommand}.
 */
export interface PreviewPrivacyImpactCommandOutput extends PreviewPrivacyImpactOutput, __MetadataBearer {}

/**
 * @public
 * <p>An estimate of the number of aggregation functions that the member who can query can run given epsilon and noise parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, PreviewPrivacyImpactCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, PreviewPrivacyImpactCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * const client = new CleanRoomsClient(config);
 * const input = { // PreviewPrivacyImpactInput
 *   membershipIdentifier: "STRING_VALUE", // required
 *   parameters: { // PreviewPrivacyImpactParametersInput Union: only one key present
 *     differentialPrivacy: { // DifferentialPrivacyPreviewParametersInput
 *       epsilon: Number("int"), // required
 *       usersNoisePerQuery: Number("int"), // required
 *     },
 *   },
 * };
 * const command = new PreviewPrivacyImpactCommand(input);
 * const response = await client.send(command);
 * // { // PreviewPrivacyImpactOutput
 * //   privacyImpact: { // PrivacyImpact Union: only one key present
 * //     differentialPrivacy: { // DifferentialPrivacyPrivacyImpact
 * //       aggregations: [ // DifferentialPrivacyPreviewAggregationList // required
 * //         { // DifferentialPrivacyPreviewAggregation
 * //           type: "AVG" || "COUNT" || "COUNT_DISTINCT" || "SUM" || "STDDEV", // required
 * //           maxCount: Number("int"), // required
 * //         },
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param PreviewPrivacyImpactCommandInput - {@link PreviewPrivacyImpactCommandInput}
 * @returns {@link PreviewPrivacyImpactCommandOutput}
 * @see {@link PreviewPrivacyImpactCommandInput} for command's `input` shape.
 * @see {@link PreviewPrivacyImpactCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Caller does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the specified constraints.</p>
 *
 * @throws {@link CleanRoomsServiceException}
 * <p>Base exception class for all service exceptions from CleanRooms service.</p>
 *
 */
export class PreviewPrivacyImpactCommand extends $Command<
  PreviewPrivacyImpactCommandInput,
  PreviewPrivacyImpactCommandOutput,
  CleanRoomsClientResolvedConfig
> {
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
  constructor(readonly input: PreviewPrivacyImpactCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CleanRoomsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PreviewPrivacyImpactCommandInput, PreviewPrivacyImpactCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PreviewPrivacyImpactCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CleanRoomsClient";
    const commandName = "PreviewPrivacyImpactCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSBastionControlPlaneServiceLambda",
        operation: "PreviewPrivacyImpact",
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
  private serialize(input: PreviewPrivacyImpactCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PreviewPrivacyImpactCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PreviewPrivacyImpactCommandOutput> {
    return de_PreviewPrivacyImpactCommand(output, context);
  }
}
