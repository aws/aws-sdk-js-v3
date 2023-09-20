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
  ListUserSettingsRequest,
  ListUserSettingsResponse,
  ListUserSettingsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_ListUserSettingsCommand, se_ListUserSettingsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesWebClientResolvedConfig } from "../WorkSpacesWebClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListUserSettingsCommand}.
 */
export interface ListUserSettingsCommandInput extends ListUserSettingsRequest {}
/**
 * @public
 *
 * The output of {@link ListUserSettingsCommand}.
 */
export interface ListUserSettingsCommandOutput extends ListUserSettingsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a list of user settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, ListUserSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, ListUserSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * const client = new WorkSpacesWebClient(config);
 * const input = { // ListUserSettingsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListUserSettingsCommand(input);
 * const response = await client.send(command);
 * // { // ListUserSettingsResponse
 * //   userSettings: [ // UserSettingsList
 * //     { // UserSettingsSummary
 * //       userSettingsArn: "STRING_VALUE", // required
 * //       copyAllowed: "STRING_VALUE",
 * //       pasteAllowed: "STRING_VALUE",
 * //       downloadAllowed: "STRING_VALUE",
 * //       uploadAllowed: "STRING_VALUE",
 * //       printAllowed: "STRING_VALUE",
 * //       disconnectTimeoutInMinutes: Number("int"),
 * //       idleDisconnectTimeoutInMinutes: Number("int"),
 * //       cookieSynchronizationConfiguration: { // CookieSynchronizationConfiguration
 * //         allowlist: [ // CookieSpecifications // required
 * //           { // CookieSpecification
 * //             domain: "STRING_VALUE", // required
 * //             name: "STRING_VALUE",
 * //             path: "STRING_VALUE",
 * //           },
 * //         ],
 * //         blocklist: [
 * //           {
 * //             domain: "STRING_VALUE", // required
 * //             name: "STRING_VALUE",
 * //             path: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListUserSettingsCommandInput - {@link ListUserSettingsCommandInput}
 * @returns {@link ListUserSettingsCommandOutput}
 * @see {@link ListUserSettingsCommandInput} for command's `input` shape.
 * @see {@link ListUserSettingsCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesWebClientResolvedConfig | config} for WorkSpacesWebClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is an internal server error.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>There is a throttling error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There is a validation error.</p>
 *
 * @throws {@link WorkSpacesWebServiceException}
 * <p>Base exception class for all service exceptions from WorkSpacesWeb service.</p>
 *
 */
export class ListUserSettingsCommand extends $Command<
  ListUserSettingsCommandInput,
  ListUserSettingsCommandOutput,
  WorkSpacesWebClientResolvedConfig
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
  constructor(readonly input: ListUserSettingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkSpacesWebClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListUserSettingsCommandInput, ListUserSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListUserSettingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesWebClient";
    const commandName = "ListUserSettingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: ListUserSettingsResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSErmineControlPlaneService",
        operation: "ListUserSettings",
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
  private serialize(input: ListUserSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListUserSettingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListUserSettingsCommandOutput> {
    return de_ListUserSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
