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
  UpdateUserSettingsRequest,
  UpdateUserSettingsRequestFilterSensitiveLog,
  UpdateUserSettingsResponse,
  UpdateUserSettingsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_UpdateUserSettingsCommand, se_UpdateUserSettingsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesWebClientResolvedConfig } from "../WorkSpacesWebClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateUserSettingsCommand}.
 */
export interface UpdateUserSettingsCommandInput extends UpdateUserSettingsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateUserSettingsCommand}.
 */
export interface UpdateUserSettingsCommandOutput extends UpdateUserSettingsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates the user settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, UpdateUserSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, UpdateUserSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * const client = new WorkSpacesWebClient(config);
 * const input = { // UpdateUserSettingsRequest
 *   userSettingsArn: "STRING_VALUE", // required
 *   copyAllowed: "STRING_VALUE",
 *   pasteAllowed: "STRING_VALUE",
 *   downloadAllowed: "STRING_VALUE",
 *   uploadAllowed: "STRING_VALUE",
 *   printAllowed: "STRING_VALUE",
 *   disconnectTimeoutInMinutes: Number("int"),
 *   idleDisconnectTimeoutInMinutes: Number("int"),
 *   clientToken: "STRING_VALUE",
 *   cookieSynchronizationConfiguration: { // CookieSynchronizationConfiguration
 *     allowlist: [ // CookieSpecifications // required
 *       { // CookieSpecification
 *         domain: "STRING_VALUE", // required
 *         name: "STRING_VALUE",
 *         path: "STRING_VALUE",
 *       },
 *     ],
 *     blocklist: [
 *       {
 *         domain: "STRING_VALUE", // required
 *         name: "STRING_VALUE",
 *         path: "STRING_VALUE",
 *       },
 *     ],
 *   },
 * };
 * const command = new UpdateUserSettingsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateUserSettingsResponse
 * //   userSettings: { // UserSettings
 * //     userSettingsArn: "STRING_VALUE", // required
 * //     associatedPortalArns: [ // ArnList
 * //       "STRING_VALUE",
 * //     ],
 * //     copyAllowed: "STRING_VALUE",
 * //     pasteAllowed: "STRING_VALUE",
 * //     downloadAllowed: "STRING_VALUE",
 * //     uploadAllowed: "STRING_VALUE",
 * //     printAllowed: "STRING_VALUE",
 * //     disconnectTimeoutInMinutes: Number("int"),
 * //     idleDisconnectTimeoutInMinutes: Number("int"),
 * //     cookieSynchronizationConfiguration: { // CookieSynchronizationConfiguration
 * //       allowlist: [ // CookieSpecifications // required
 * //         { // CookieSpecification
 * //           domain: "STRING_VALUE", // required
 * //           name: "STRING_VALUE",
 * //           path: "STRING_VALUE",
 * //         },
 * //       ],
 * //       blocklist: [
 * //         {
 * //           domain: "STRING_VALUE", // required
 * //           name: "STRING_VALUE",
 * //           path: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateUserSettingsCommandInput - {@link UpdateUserSettingsCommandInput}
 * @returns {@link UpdateUserSettingsCommandOutput}
 * @see {@link UpdateUserSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateUserSettingsCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesWebClientResolvedConfig | config} for WorkSpacesWebClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is an internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource cannot be found.</p>
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
export class UpdateUserSettingsCommand extends $Command<
  UpdateUserSettingsCommandInput,
  UpdateUserSettingsCommandOutput,
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
  constructor(readonly input: UpdateUserSettingsCommandInput) {
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
  ): Handler<UpdateUserSettingsCommandInput, UpdateUserSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateUserSettingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesWebClient";
    const commandName = "UpdateUserSettingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateUserSettingsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateUserSettingsResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSErmineControlPlaneService",
        operation: "UpdateUserSettings",
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
  private serialize(input: UpdateUserSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateUserSettingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateUserSettingsCommandOutput> {
    return de_UpdateUserSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
