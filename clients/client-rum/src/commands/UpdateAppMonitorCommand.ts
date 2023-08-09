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

import { UpdateAppMonitorRequest, UpdateAppMonitorResponse } from "../models/models_0";
import { de_UpdateAppMonitorCommand, se_UpdateAppMonitorCommand } from "../protocols/Aws_restJson1";
import { RUMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RUMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateAppMonitorCommand}.
 */
export interface UpdateAppMonitorCommandInput extends UpdateAppMonitorRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAppMonitorCommand}.
 */
export interface UpdateAppMonitorCommandOutput extends UpdateAppMonitorResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates the configuration of an existing app monitor. When you use this operation, only the parts of the app monitor
 *          configuration that you specify in this operation are changed. For any parameters that you omit, the existing
 *          values are kept.</p>
 *          <p>You can't use this operation to change the tags of an existing app monitor. To change the tags of an existing app monitor, use
 *          <a href="https://docs.aws.amazon.com/cloudwatchrum/latest/APIReference/API_TagResource.html">TagResource</a>.</p>
 *          <p>To create a new app monitor, use <a href="https://docs.aws.amazon.com/cloudwatchrum/latest/APIReference/API_CreateAppMonitor.html">CreateAppMonitor</a>.</p>
 *          <p>After you update an app monitor, sign in to the CloudWatch RUM console to get
 *          the updated JavaScript code snippet to add to your web application. For more information, see
 *          <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM-find-code-snippet.html">How do I find a code snippet
 *             that I've already generated?</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RUMClient, UpdateAppMonitorCommand } from "@aws-sdk/client-rum"; // ES Modules import
 * // const { RUMClient, UpdateAppMonitorCommand } = require("@aws-sdk/client-rum"); // CommonJS import
 * const client = new RUMClient(config);
 * const input = { // UpdateAppMonitorRequest
 *   Name: "STRING_VALUE", // required
 *   Domain: "STRING_VALUE",
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
 * const command = new UpdateAppMonitorCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateAppMonitorCommandInput - {@link UpdateAppMonitorCommandInput}
 * @returns {@link UpdateAppMonitorCommandOutput}
 * @see {@link UpdateAppMonitorCommandInput} for command's `input` shape.
 * @see {@link UpdateAppMonitorCommandOutput} for command's `response` shape.
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
export class UpdateAppMonitorCommand extends $Command<
  UpdateAppMonitorCommandInput,
  UpdateAppMonitorCommandOutput,
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
  constructor(readonly input: UpdateAppMonitorCommandInput) {
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
  ): Handler<UpdateAppMonitorCommandInput, UpdateAppMonitorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateAppMonitorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RUMClient";
    const commandName = "UpdateAppMonitorCommand";
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
  private serialize(input: UpdateAppMonitorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateAppMonitorCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateAppMonitorCommandOutput> {
    return de_UpdateAppMonitorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
