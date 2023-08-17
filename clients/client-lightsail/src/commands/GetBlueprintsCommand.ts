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

import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetBlueprintsRequest, GetBlueprintsResult } from "../models/models_0";
import { de_GetBlueprintsCommand, se_GetBlueprintsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetBlueprintsCommand}.
 */
export interface GetBlueprintsCommandInput extends GetBlueprintsRequest {}
/**
 * @public
 *
 * The output of {@link GetBlueprintsCommand}.
 */
export interface GetBlueprintsCommandOutput extends GetBlueprintsResult, __MetadataBearer {}

/**
 * @public
 * <p>Returns the list of available instance images, or <i>blueprints</i>. You can
 *       use a blueprint to create a new instance already running a specific operating system, as well
 *       as a preinstalled app or development stack. The software each instance is running depends on
 *       the blueprint image you choose.</p>
 *          <note>
 *             <p>Use active blueprints when creating new instances. Inactive blueprints are listed to
 *         support customers with existing instances and are not necessarily available to create new
 *         instances. Blueprints are marked inactive when they become outdated due to operating system
 *         updates or new application releases.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetBlueprintsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetBlueprintsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const input = { // GetBlueprintsRequest
 *   includeInactive: true || false,
 *   pageToken: "STRING_VALUE",
 *   appCategory: "LfR",
 * };
 * const command = new GetBlueprintsCommand(input);
 * const response = await client.send(command);
 * // { // GetBlueprintsResult
 * //   blueprints: [ // BlueprintList
 * //     { // Blueprint
 * //       blueprintId: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       group: "STRING_VALUE",
 * //       type: "os" || "app",
 * //       description: "STRING_VALUE",
 * //       isActive: true || false,
 * //       minPower: Number("int"),
 * //       version: "STRING_VALUE",
 * //       versionCode: "STRING_VALUE",
 * //       productUrl: "STRING_VALUE",
 * //       licenseUrl: "STRING_VALUE",
 * //       platform: "LINUX_UNIX" || "WINDOWS",
 * //       appCategory: "LfR",
 * //     },
 * //   ],
 * //   nextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetBlueprintsCommandInput - {@link GetBlueprintsCommandInput}
 * @returns {@link GetBlueprintsCommandOutput}
 * @see {@link GetBlueprintsCommandInput} for command's `input` shape.
 * @see {@link GetBlueprintsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid
 *       credentials to access a resource.</p>
 *
 * @throws {@link AccountSetupInProgressException} (client fault)
 *  <p>Lightsail throws this exception when an account is still in the setup in progress
 *       state.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Lightsail throws this exception when user input does not conform to the validation rules
 *       of an input field.</p>
 *          <note>
 *             <p>Domain and distribution APIs are only available in the N. Virginia
 *           (<code>us-east-1</code>) Amazon Web Services Region. Please set your Amazon Web Services
 *         Region configuration to <code>us-east-1</code> to create, view, or edit these
 *         resources.</p>
 *          </note>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Lightsail throws this exception when it cannot find a resource.</p>
 *
 * @throws {@link OperationFailureException} (client fault)
 *  <p>Lightsail throws this exception when an operation fails to execute.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>A general service exception.</p>
 *
 * @throws {@link UnauthenticatedException} (client fault)
 *  <p>Lightsail throws this exception when the user has not been authenticated.</p>
 *
 * @throws {@link LightsailServiceException}
 * <p>Base exception class for all service exceptions from Lightsail service.</p>
 *
 */
export class GetBlueprintsCommand extends $Command<
  GetBlueprintsCommandInput,
  GetBlueprintsCommandOutput,
  LightsailClientResolvedConfig
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
  constructor(readonly input: GetBlueprintsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetBlueprintsCommandInput, GetBlueprintsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetBlueprintsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetBlueprintsCommand";
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
  private serialize(input: GetBlueprintsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetBlueprintsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetBlueprintsCommandOutput> {
    return de_GetBlueprintsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
