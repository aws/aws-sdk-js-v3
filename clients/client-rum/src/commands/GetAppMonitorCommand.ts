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

import { GetAppMonitorRequest, GetAppMonitorResponse } from "../models/models_0";
import { de_GetAppMonitorCommand, se_GetAppMonitorCommand } from "../protocols/Aws_restJson1";
import { RUMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RUMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetAppMonitorCommand}.
 */
export interface GetAppMonitorCommandInput extends GetAppMonitorRequest {}
/**
 * @public
 *
 * The output of {@link GetAppMonitorCommand}.
 */
export interface GetAppMonitorCommandOutput extends GetAppMonitorResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the complete configuration information for one app monitor.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RUMClient, GetAppMonitorCommand } from "@aws-sdk/client-rum"; // ES Modules import
 * // const { RUMClient, GetAppMonitorCommand } = require("@aws-sdk/client-rum"); // CommonJS import
 * const client = new RUMClient(config);
 * const input = { // GetAppMonitorRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new GetAppMonitorCommand(input);
 * const response = await client.send(command);
 * // { // GetAppMonitorResponse
 * //   AppMonitor: { // AppMonitor
 * //     Name: "STRING_VALUE",
 * //     Domain: "STRING_VALUE",
 * //     Id: "STRING_VALUE",
 * //     Created: "STRING_VALUE",
 * //     LastModified: "STRING_VALUE",
 * //     Tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     State: "STRING_VALUE",
 * //     AppMonitorConfiguration: { // AppMonitorConfiguration
 * //       IdentityPoolId: "STRING_VALUE",
 * //       ExcludedPages: [ // Pages
 * //         "STRING_VALUE",
 * //       ],
 * //       IncludedPages: [
 * //         "STRING_VALUE",
 * //       ],
 * //       FavoritePages: [ // FavoritePages
 * //         "STRING_VALUE",
 * //       ],
 * //       SessionSampleRate: Number("double"),
 * //       GuestRoleArn: "STRING_VALUE",
 * //       AllowCookies: true || false,
 * //       Telemetries: [ // Telemetries
 * //         "STRING_VALUE",
 * //       ],
 * //       EnableXRay: true || false,
 * //     },
 * //     DataStorage: { // DataStorage
 * //       CwLog: { // CwLog
 * //         CwLogEnabled: true || false,
 * //         CwLogGroup: "STRING_VALUE",
 * //       },
 * //     },
 * //     CustomEvents: { // CustomEvents
 * //       Status: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAppMonitorCommandInput - {@link GetAppMonitorCommandInput}
 * @returns {@link GetAppMonitorCommandOutput}
 * @see {@link GetAppMonitorCommandInput} for command's `input` shape.
 * @see {@link GetAppMonitorCommandOutput} for command's `response` shape.
 * @see {@link RUMClientResolvedConfig | config} for RUMClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal service exception.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled because of quota limits.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the arguments for the request is not valid.</p>
 *
 * @throws {@link RUMServiceException}
 * <p>Base exception class for all service exceptions from RUM service.</p>
 *
 */
export class GetAppMonitorCommand extends $Command<
  GetAppMonitorCommandInput,
  GetAppMonitorCommandOutput,
  RUMClientResolvedConfig
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
  constructor(readonly input: GetAppMonitorCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RUMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAppMonitorCommandInput, GetAppMonitorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetAppMonitorCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RUMClient";
    const commandName = "GetAppMonitorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RUM",
        operation: "GetAppMonitor",
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
  private serialize(input: GetAppMonitorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetAppMonitorCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAppMonitorCommandOutput> {
    return de_GetAppMonitorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
