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

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { SearchDevicesRequest, SearchDevicesResponse } from "../models/models_0";
import { de_SearchDevicesCommand, se_SearchDevicesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SearchDevicesCommand}.
 */
export interface SearchDevicesCommandInput extends SearchDevicesRequest {}
/**
 * @public
 *
 * The output of {@link SearchDevicesCommand}.
 */
export interface SearchDevicesCommandOutput extends SearchDevicesResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Searches devices and lists the ones that meet a set of filter criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, SearchDevicesCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, SearchDevicesCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // SearchDevicesRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Filters: [ // FilterList
 *     { // Filter
 *       Key: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   SortCriteria: [ // SortList
 *     { // Sort
 *       Key: "STRING_VALUE", // required
 *       Value: "ASC" || "DESC", // required
 *     },
 *   ],
 * };
 * const command = new SearchDevicesCommand(input);
 * const response = await client.send(command);
 * // { // SearchDevicesResponse
 * //   Devices: [ // DeviceDataList
 * //     { // DeviceData
 * //       DeviceArn: "STRING_VALUE",
 * //       DeviceSerialNumber: "STRING_VALUE",
 * //       DeviceType: "STRING_VALUE",
 * //       DeviceName: "STRING_VALUE",
 * //       SoftwareVersion: "STRING_VALUE",
 * //       MacAddress: "STRING_VALUE",
 * //       DeviceStatus: "READY" || "PENDING" || "WAS_OFFLINE" || "DEREGISTERED" || "FAILED",
 * //       NetworkProfileArn: "STRING_VALUE",
 * //       NetworkProfileName: "STRING_VALUE",
 * //       RoomArn: "STRING_VALUE",
 * //       RoomName: "STRING_VALUE",
 * //       DeviceStatusInfo: { // DeviceStatusInfo
 * //         DeviceStatusDetails: [ // DeviceStatusDetails
 * //           { // DeviceStatusDetail
 * //             Feature: "BLUETOOTH" || "VOLUME" || "NOTIFICATIONS" || "LISTS" || "SKILLS" || "NETWORK_PROFILE" || "SETTINGS" || "ALL",
 * //             Code: "DEVICE_SOFTWARE_UPDATE_NEEDED" || "DEVICE_WAS_OFFLINE" || "CREDENTIALS_ACCESS_FAILURE" || "TLS_VERSION_MISMATCH" || "ASSOCIATION_REJECTION" || "AUTHENTICATION_FAILURE" || "DHCP_FAILURE" || "INTERNET_UNAVAILABLE" || "DNS_FAILURE" || "UNKNOWN_FAILURE" || "CERTIFICATE_ISSUING_LIMIT_EXCEEDED" || "INVALID_CERTIFICATE_AUTHORITY" || "NETWORK_PROFILE_NOT_FOUND" || "INVALID_PASSWORD_STATE" || "PASSWORD_NOT_FOUND" || "PASSWORD_MANAGER_ACCESS_DENIED" || "CERTIFICATE_AUTHORITY_ACCESS_DENIED",
 * //           },
 * //         ],
 * //         ConnectionStatus: "ONLINE" || "OFFLINE",
 * //         ConnectionStatusUpdatedTime: new Date("TIMESTAMP"),
 * //       },
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   TotalCount: Number("int"),
 * // };
 *
 * ```
 *
 * @param SearchDevicesCommandInput - {@link SearchDevicesCommandInput}
 * @returns {@link SearchDevicesCommandOutput}
 * @see {@link SearchDevicesCommandInput} for command's `input` shape.
 * @see {@link SearchDevicesCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class SearchDevicesCommand extends $Command<
  SearchDevicesCommandInput,
  SearchDevicesCommandOutput,
  AlexaForBusinessClientResolvedConfig
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
  constructor(readonly input: SearchDevicesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SearchDevicesCommandInput, SearchDevicesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, SearchDevicesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "SearchDevicesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AlexaForBusiness",
        operation: "SearchDevices",
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
  private serialize(input: SearchDevicesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SearchDevicesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SearchDevicesCommandOutput> {
    return de_SearchDevicesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
