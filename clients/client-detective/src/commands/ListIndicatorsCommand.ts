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

import { DetectiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DetectiveClient";
import { ListIndicatorsRequest, ListIndicatorsResponse } from "../models/models_0";
import { de_ListIndicatorsCommand, se_ListIndicatorsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListIndicatorsCommand}.
 */
export interface ListIndicatorsCommandInput extends ListIndicatorsRequest {}
/**
 * @public
 *
 * The output of {@link ListIndicatorsCommand}.
 */
export interface ListIndicatorsCommandOutput extends ListIndicatorsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Get the indicators from an investigation</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, ListIndicatorsCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, ListIndicatorsCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * const client = new DetectiveClient(config);
 * const input = { // ListIndicatorsRequest
 *   GraphArn: "STRING_VALUE", // required
 *   InvestigationId: "STRING_VALUE", // required
 *   IndicatorType: "TTP_OBSERVED" || "IMPOSSIBLE_TRAVEL" || "FLAGGED_IP_ADDRESS" || "NEW_GEOLOCATION" || "NEW_ASO" || "NEW_USER_AGENT" || "RELATED_FINDING" || "RELATED_FINDING_GROUP",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListIndicatorsCommand(input);
 * const response = await client.send(command);
 * // { // ListIndicatorsResponse
 * //   GraphArn: "STRING_VALUE",
 * //   InvestigationId: "STRING_VALUE",
 * //   NextToken: "STRING_VALUE",
 * //   Indicators: [ // Indicators
 * //     { // Indicator
 * //       IndicatorType: "TTP_OBSERVED" || "IMPOSSIBLE_TRAVEL" || "FLAGGED_IP_ADDRESS" || "NEW_GEOLOCATION" || "NEW_ASO" || "NEW_USER_AGENT" || "RELATED_FINDING" || "RELATED_FINDING_GROUP",
 * //       IndicatorDetail: { // IndicatorDetail
 * //         TTPsObservedDetail: { // TTPsObservedDetail
 * //           Tactic: "STRING_VALUE",
 * //           Technique: "STRING_VALUE",
 * //           Procedure: "STRING_VALUE",
 * //           IpAddress: "STRING_VALUE",
 * //           APIName: "STRING_VALUE",
 * //           APISuccessCount: Number("long"),
 * //           APIFailureCount: Number("long"),
 * //         },
 * //         ImpossibleTravelDetail: { // ImpossibleTravelDetail
 * //           StartingIpAddress: "STRING_VALUE",
 * //           EndingIpAddress: "STRING_VALUE",
 * //           StartingLocation: "STRING_VALUE",
 * //           EndingLocation: "STRING_VALUE",
 * //           HourlyTimeDelta: Number("int"),
 * //         },
 * //         FlaggedIpAddressDetail: { // FlaggedIpAddressDetail
 * //           IpAddress: "STRING_VALUE",
 * //           Reason: "AWS_THREAT_INTELLIGENCE",
 * //         },
 * //         NewGeolocationDetail: { // NewGeolocationDetail
 * //           Location: "STRING_VALUE",
 * //           IpAddress: "STRING_VALUE",
 * //           IsNewForEntireAccount: true || false,
 * //         },
 * //         NewAsoDetail: { // NewAsoDetail
 * //           Aso: "STRING_VALUE",
 * //           IsNewForEntireAccount: true || false,
 * //         },
 * //         NewUserAgentDetail: { // NewUserAgentDetail
 * //           UserAgent: "STRING_VALUE",
 * //           IsNewForEntireAccount: true || false,
 * //         },
 * //         RelatedFindingDetail: { // RelatedFindingDetail
 * //           Arn: "STRING_VALUE",
 * //           Type: "STRING_VALUE",
 * //           IpAddress: "STRING_VALUE",
 * //         },
 * //         RelatedFindingGroupDetail: { // RelatedFindingGroupDetail
 * //           Id: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListIndicatorsCommandInput - {@link ListIndicatorsCommandInput}
 * @returns {@link ListIndicatorsCommandOutput}
 * @see {@link ListIndicatorsCommandInput} for command's `input` shape.
 * @see {@link ListIndicatorsCommandOutput} for command's `response` shape.
 * @see {@link DetectiveClientResolvedConfig | config} for DetectiveClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request issuer does not have permission to access this resource or perform this
 *          operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request was valid but failed because of a problem with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request refers to a nonexistent resource.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request cannot be completed because too many other requests are occurring at the
 *          same time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request parameters are invalid.</p>
 *
 * @throws {@link DetectiveServiceException}
 * <p>Base exception class for all service exceptions from Detective service.</p>
 *
 */
export class ListIndicatorsCommand extends $Command<
  ListIndicatorsCommandInput,
  ListIndicatorsCommandOutput,
  DetectiveClientResolvedConfig
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
  constructor(readonly input: ListIndicatorsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DetectiveClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListIndicatorsCommandInput, ListIndicatorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListIndicatorsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DetectiveClient";
    const commandName = "ListIndicatorsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonDetective",
        operation: "ListIndicators",
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
  private serialize(input: ListIndicatorsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListIndicatorsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListIndicatorsCommandOutput> {
    return de_ListIndicatorsCommand(output, context);
  }
}
