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

import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { ListSatellitesRequest, ListSatellitesResponse } from "../models/models_0";
import { de_ListSatellitesCommand, se_ListSatellitesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListSatellitesCommand}.
 */
export interface ListSatellitesCommandInput extends ListSatellitesRequest {}
/**
 * @public
 *
 * The output of {@link ListSatellitesCommand}.
 */
export interface ListSatellitesCommandOutput extends ListSatellitesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of satellites.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, ListSatellitesCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, ListSatellitesCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const input = { // ListSatellitesRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListSatellitesCommand(input);
 * const response = await client.send(command);
 * // { // ListSatellitesResponse
 * //   nextToken: "STRING_VALUE",
 * //   satellites: [ // SatelliteList
 * //     { // SatelliteListItem
 * //       satelliteId: "STRING_VALUE",
 * //       satelliteArn: "STRING_VALUE",
 * //       noradSatelliteID: Number("int"),
 * //       groundStations: [ // GroundStationIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       currentEphemeris: { // EphemerisMetaData
 * //         source: "STRING_VALUE", // required
 * //         ephemerisId: "STRING_VALUE",
 * //         epoch: new Date("TIMESTAMP"),
 * //         name: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListSatellitesCommandInput - {@link ListSatellitesCommandInput}
 * @returns {@link ListSatellitesCommandOutput}
 * @see {@link ListSatellitesCommandInput} for command's `input` shape.
 * @see {@link ListSatellitesCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for GroundStationClient's `config` shape.
 *
 * @throws {@link DependencyException} (server fault)
 *  <p>Dependency encountered an error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource was not found.</p>
 *
 * @throws {@link GroundStationServiceException}
 * <p>Base exception class for all service exceptions from GroundStation service.</p>
 *
 */
export class ListSatellitesCommand extends $Command<
  ListSatellitesCommandInput,
  ListSatellitesCommandOutput,
  GroundStationClientResolvedConfig
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
  constructor(readonly input: ListSatellitesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GroundStationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSatellitesCommandInput, ListSatellitesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSatellitesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GroundStationClient";
    const commandName = "ListSatellitesCommand";
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
  private serialize(input: ListSatellitesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListSatellitesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSatellitesCommandOutput> {
    return de_ListSatellitesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
