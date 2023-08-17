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

import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import {
  SearchPlaceIndexForPositionRequest,
  SearchPlaceIndexForPositionRequestFilterSensitiveLog,
  SearchPlaceIndexForPositionResponse,
  SearchPlaceIndexForPositionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_SearchPlaceIndexForPositionCommand,
  se_SearchPlaceIndexForPositionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SearchPlaceIndexForPositionCommand}.
 */
export interface SearchPlaceIndexForPositionCommandInput extends SearchPlaceIndexForPositionRequest {}
/**
 * @public
 *
 * The output of {@link SearchPlaceIndexForPositionCommand}.
 */
export interface SearchPlaceIndexForPositionCommandOutput
  extends SearchPlaceIndexForPositionResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Reverse geocodes a given coordinate and returns a legible address. Allows you to
 *             search for Places or points of interest near a given position.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, SearchPlaceIndexForPositionCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, SearchPlaceIndexForPositionCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const input = { // SearchPlaceIndexForPositionRequest
 *   IndexName: "STRING_VALUE", // required
 *   Position: [ // Position // required
 *     Number("double"),
 *   ],
 *   MaxResults: Number("int"),
 *   Language: "STRING_VALUE",
 *   Key: "STRING_VALUE",
 * };
 * const command = new SearchPlaceIndexForPositionCommand(input);
 * const response = await client.send(command);
 * // { // SearchPlaceIndexForPositionResponse
 * //   Summary: { // SearchPlaceIndexForPositionSummary
 * //     Position: [ // Position // required
 * //       Number("double"),
 * //     ],
 * //     MaxResults: Number("int"),
 * //     DataSource: "STRING_VALUE", // required
 * //     Language: "STRING_VALUE",
 * //   },
 * //   Results: [ // SearchForPositionResultList // required
 * //     { // SearchForPositionResult
 * //       Place: { // Place
 * //         Label: "STRING_VALUE",
 * //         Geometry: { // PlaceGeometry
 * //           Point: [
 * //             Number("double"),
 * //           ],
 * //         },
 * //         AddressNumber: "STRING_VALUE",
 * //         Street: "STRING_VALUE",
 * //         Neighborhood: "STRING_VALUE",
 * //         Municipality: "STRING_VALUE",
 * //         SubRegion: "STRING_VALUE",
 * //         Region: "STRING_VALUE",
 * //         Country: "STRING_VALUE",
 * //         PostalCode: "STRING_VALUE",
 * //         Interpolated: true || false,
 * //         TimeZone: { // TimeZone
 * //           Name: "STRING_VALUE", // required
 * //           Offset: Number("int"),
 * //         },
 * //         UnitType: "STRING_VALUE",
 * //         UnitNumber: "STRING_VALUE",
 * //         Categories: [ // PlaceCategoryList
 * //           "STRING_VALUE",
 * //         ],
 * //         SupplementalCategories: [ // PlaceSupplementalCategoryList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       Distance: Number("double"), // required
 * //       PlaceId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param SearchPlaceIndexForPositionCommandInput - {@link SearchPlaceIndexForPositionCommandInput}
 * @returns {@link SearchPlaceIndexForPositionCommandOutput}
 * @see {@link SearchPlaceIndexForPositionCommandInput} for command's `input` shape.
 * @see {@link SearchPlaceIndexForPositionCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because of insufficient access or permissions. Check with an
 *       administrator to verify your permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed to process because of an unknown server error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource that you've entered was not found in your AWS account.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to meet the constraints specified by the AWS service. </p>
 *
 * @throws {@link LocationServiceException}
 * <p>Base exception class for all service exceptions from Location service.</p>
 *
 */
export class SearchPlaceIndexForPositionCommand extends $Command<
  SearchPlaceIndexForPositionCommandInput,
  SearchPlaceIndexForPositionCommandOutput,
  LocationClientResolvedConfig
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
  constructor(readonly input: SearchPlaceIndexForPositionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LocationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SearchPlaceIndexForPositionCommandInput, SearchPlaceIndexForPositionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SearchPlaceIndexForPositionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LocationClient";
    const commandName = "SearchPlaceIndexForPositionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SearchPlaceIndexForPositionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: SearchPlaceIndexForPositionResponseFilterSensitiveLog,
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
  private serialize(input: SearchPlaceIndexForPositionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SearchPlaceIndexForPositionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SearchPlaceIndexForPositionCommandOutput> {
    return de_SearchPlaceIndexForPositionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
