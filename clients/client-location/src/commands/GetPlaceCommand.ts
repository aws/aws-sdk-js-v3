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
  GetPlaceRequest,
  GetPlaceRequestFilterSensitiveLog,
  GetPlaceResponse,
  GetPlaceResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetPlaceCommand, se_GetPlaceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetPlaceCommand}.
 */
export interface GetPlaceCommandInput extends GetPlaceRequest {}
/**
 * @public
 *
 * The output of {@link GetPlaceCommand}.
 */
export interface GetPlaceCommandOutput extends GetPlaceResponse, __MetadataBearer {}

/**
 * @public
 * <p>Finds a place by its unique ID. A <code>PlaceId</code> is returned by other search
 *             operations.</p>
 *          <note>
 *             <p>A PlaceId is valid only if all of the following are the same in the original
 *                 search request and the call to <code>GetPlace</code>.</p>
 *             <ul>
 *                <li>
 *                   <p>Customer Amazon Web Services account</p>
 *                </li>
 *                <li>
 *                   <p>Amazon Web Services Region</p>
 *                </li>
 *                <li>
 *                   <p>Data provider specified in the place index resource</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, GetPlaceCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, GetPlaceCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const input = { // GetPlaceRequest
 *   IndexName: "STRING_VALUE", // required
 *   PlaceId: "STRING_VALUE", // required
 *   Language: "STRING_VALUE",
 *   Key: "STRING_VALUE",
 * };
 * const command = new GetPlaceCommand(input);
 * const response = await client.send(command);
 * // { // GetPlaceResponse
 * //   Place: { // Place
 * //     Label: "STRING_VALUE",
 * //     Geometry: { // PlaceGeometry
 * //       Point: [ // Position
 * //         Number("double"),
 * //       ],
 * //     },
 * //     AddressNumber: "STRING_VALUE",
 * //     Street: "STRING_VALUE",
 * //     Neighborhood: "STRING_VALUE",
 * //     Municipality: "STRING_VALUE",
 * //     SubRegion: "STRING_VALUE",
 * //     Region: "STRING_VALUE",
 * //     Country: "STRING_VALUE",
 * //     PostalCode: "STRING_VALUE",
 * //     Interpolated: true || false,
 * //     TimeZone: { // TimeZone
 * //       Name: "STRING_VALUE", // required
 * //       Offset: Number("int"),
 * //     },
 * //     UnitType: "STRING_VALUE",
 * //     UnitNumber: "STRING_VALUE",
 * //     Categories: [ // PlaceCategoryList
 * //       "STRING_VALUE",
 * //     ],
 * //     SupplementalCategories: [ // PlaceSupplementalCategoryList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetPlaceCommandInput - {@link GetPlaceCommandInput}
 * @returns {@link GetPlaceCommandOutput}
 * @see {@link GetPlaceCommandInput} for command's `input` shape.
 * @see {@link GetPlaceCommandOutput} for command's `response` shape.
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
export class GetPlaceCommand extends $Command<
  GetPlaceCommandInput,
  GetPlaceCommandOutput,
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
  constructor(readonly input: GetPlaceCommandInput) {
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
  ): Handler<GetPlaceCommandInput, GetPlaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetPlaceCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LocationClient";
    const commandName = "GetPlaceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetPlaceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetPlaceResponseFilterSensitiveLog,
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
  private serialize(input: GetPlaceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetPlaceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetPlaceCommandOutput> {
    return de_GetPlaceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
