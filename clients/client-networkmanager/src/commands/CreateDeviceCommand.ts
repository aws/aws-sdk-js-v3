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

import {
  CreateDeviceRequest,
  CreateDeviceRequestFilterSensitiveLog,
  CreateDeviceResponse,
  CreateDeviceResponseFilterSensitiveLog,
} from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { de_CreateDeviceCommand, se_CreateDeviceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateDeviceCommand}.
 */
export interface CreateDeviceCommandInput extends CreateDeviceRequest {}
/**
 * @public
 *
 * The output of {@link CreateDeviceCommand}.
 */
export interface CreateDeviceCommandOutput extends CreateDeviceResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new device in a global network. If you specify both a site ID and a
 *             location, the location of the site is used for visualization in the Network Manager console.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, CreateDeviceCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, CreateDeviceCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const input = { // CreateDeviceRequest
 *   GlobalNetworkId: "STRING_VALUE", // required
 *   AWSLocation: { // AWSLocation
 *     Zone: "STRING_VALUE",
 *     SubnetArn: "STRING_VALUE",
 *   },
 *   Description: "STRING_VALUE",
 *   Type: "STRING_VALUE",
 *   Vendor: "STRING_VALUE",
 *   Model: "STRING_VALUE",
 *   SerialNumber: "STRING_VALUE",
 *   Location: { // Location
 *     Address: "STRING_VALUE",
 *     Latitude: "STRING_VALUE",
 *     Longitude: "STRING_VALUE",
 *   },
 *   SiteId: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateDeviceCommand(input);
 * const response = await client.send(command);
 * // { // CreateDeviceResponse
 * //   Device: { // Device
 * //     DeviceId: "STRING_VALUE",
 * //     DeviceArn: "STRING_VALUE",
 * //     GlobalNetworkId: "STRING_VALUE",
 * //     AWSLocation: { // AWSLocation
 * //       Zone: "STRING_VALUE",
 * //       SubnetArn: "STRING_VALUE",
 * //     },
 * //     Description: "STRING_VALUE",
 * //     Type: "STRING_VALUE",
 * //     Vendor: "STRING_VALUE",
 * //     Model: "STRING_VALUE",
 * //     SerialNumber: "STRING_VALUE",
 * //     Location: { // Location
 * //       Address: "STRING_VALUE",
 * //       Latitude: "STRING_VALUE",
 * //       Longitude: "STRING_VALUE",
 * //     },
 * //     SiteId: "STRING_VALUE",
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     State: "PENDING" || "AVAILABLE" || "DELETING" || "UPDATING",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateDeviceCommandInput - {@link CreateDeviceCommandInput}
 * @returns {@link CreateDeviceCommandOutput}
 * @see {@link CreateDeviceCommandInput} for command's `input` shape.
 * @see {@link CreateDeviceCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict processing the request. Updating or deleting the resource can
 *             cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>A service limit was exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints.</p>
 *
 * @throws {@link NetworkManagerServiceException}
 * <p>Base exception class for all service exceptions from NetworkManager service.</p>
 *
 */
export class CreateDeviceCommand extends $Command<
  CreateDeviceCommandInput,
  CreateDeviceCommandOutput,
  NetworkManagerClientResolvedConfig
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
  constructor(readonly input: CreateDeviceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NetworkManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDeviceCommandInput, CreateDeviceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateDeviceCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkManagerClient";
    const commandName = "CreateDeviceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDeviceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateDeviceResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "NetworkManager",
        operation: "CreateDevice",
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
  private serialize(input: CreateDeviceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateDeviceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDeviceCommandOutput> {
    return de_CreateDeviceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
