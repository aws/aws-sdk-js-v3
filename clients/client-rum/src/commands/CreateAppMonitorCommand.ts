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

import { CreateAppMonitorRequest, CreateAppMonitorResponse } from "../models/models_0";
import { de_CreateAppMonitorCommand, se_CreateAppMonitorCommand } from "../protocols/Aws_restJson1";
import { RUMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RUMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateAppMonitorCommand}.
 */
export interface CreateAppMonitorCommandInput extends CreateAppMonitorRequest {}
/**
 * @public
 *
 * The output of {@link CreateAppMonitorCommand}.
 */
export interface CreateAppMonitorCommandOutput extends CreateAppMonitorResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a Amazon CloudWatch RUM app monitor, which collects telemetry data from your application and sends that
 *       data to RUM. The data includes performance and reliability information such as page load time, client-side errors,
 *       and user behavior.</p>
 *          <p>You use this operation only to create a new app monitor. To update an existing app monitor, use <a href="https://docs.aws.amazon.com/cloudwatchrum/latest/APIReference/API_UpdateAppMonitor.html">UpdateAppMonitor</a> instead.</p>
 *          <p>After you create an app monitor, sign in to the CloudWatch RUM console to get
 *          the JavaScript code snippet to add to your web application. For more information, see
 *          <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM-find-code-snippet.html">How do I find a code snippet
 *          that I've already generated?</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RUMClient, CreateAppMonitorCommand } from "@aws-sdk/client-rum"; // ES Modules import
 * // const { RUMClient, CreateAppMonitorCommand } = require("@aws-sdk/client-rum"); // CommonJS import
 * const client = new RUMClient(config);
 * const input = { // CreateAppMonitorRequest
 *   Name: "STRING_VALUE", // required
 *   Domain: "STRING_VALUE", // required
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   AppMonitorConfiguration: { // AppMonitorConfiguration
 *     IdentityPoolId: "STRING_VALUE",
 *     ExcludedPages: [ // Pages
 *       "STRING_VALUE",
 *     ],
 *     IncludedPages: [
 *       "STRING_VALUE",
 *     ],
 *     FavoritePages: [ // FavoritePages
 *       "STRING_VALUE",
 *     ],
 *     SessionSampleRate: Number("double"),
 *     GuestRoleArn: "STRING_VALUE",
 *     AllowCookies: true || false,
 *     Telemetries: [ // Telemetries
 *       "STRING_VALUE",
 *     ],
 *     EnableXRay: true || false,
 *   },
 *   CwLogEnabled: true || false,
 *   CustomEvents: { // CustomEvents
 *     Status: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateAppMonitorCommand(input);
 * const response = await client.send(command);
 * // { // CreateAppMonitorResponse
 * //   Id: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateAppMonitorCommandInput - {@link CreateAppMonitorCommandInput}
 * @returns {@link CreateAppMonitorCommandOutput}
 * @see {@link CreateAppMonitorCommandInput} for command's `input` shape.
 * @see {@link CreateAppMonitorCommandOutput} for command's `response` shape.
 * @see {@link RUMClientResolvedConfig | config} for RUMClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permissions to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This operation attempted to create a resource that already exists.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal service exception.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>This request exceeds a service quota.</p>
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
export class CreateAppMonitorCommand extends $Command<
  CreateAppMonitorCommandInput,
  CreateAppMonitorCommandOutput,
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
  constructor(readonly input: CreateAppMonitorCommandInput) {
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
  ): Handler<CreateAppMonitorCommandInput, CreateAppMonitorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateAppMonitorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RUMClient";
    const commandName = "CreateAppMonitorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RUM",
        operation: "CreateAppMonitor",
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
  private serialize(input: CreateAppMonitorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateAppMonitorCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAppMonitorCommandOutput> {
    return de_CreateAppMonitorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
