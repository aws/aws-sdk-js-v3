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
  GetUserSettingsRequest,
  GetUserSettingsResponse,
  GetUserSettingsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetUserSettingsCommand, se_GetUserSettingsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesWebClientResolvedConfig } from "../WorkSpacesWebClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetUserSettingsCommand}.
 */
export interface GetUserSettingsCommandInput extends GetUserSettingsRequest {}
/**
 * @public
 *
 * The output of {@link GetUserSettingsCommand}.
 */
export interface GetUserSettingsCommandOutput extends GetUserSettingsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets user settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, GetUserSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, GetUserSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * const client = new WorkSpacesWebClient(config);
 * const input = { // GetUserSettingsRequest
 *   userSettingsArn: "STRING_VALUE", // required
 * };
 * const command = new GetUserSettingsCommand(input);
 * const response = await client.send(command);
 * // { // GetUserSettingsResponse
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
 * @param GetUserSettingsCommandInput - {@link GetUserSettingsCommandInput}
 * @returns {@link GetUserSettingsCommandOutput}
 * @see {@link GetUserSettingsCommandInput} for command's `input` shape.
 * @see {@link GetUserSettingsCommandOutput} for command's `response` shape.
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
export class GetUserSettingsCommand extends $Command<
  GetUserSettingsCommandInput,
  GetUserSettingsCommandOutput,
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
  constructor(readonly input: GetUserSettingsCommandInput) {
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
  ): Handler<GetUserSettingsCommandInput, GetUserSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetUserSettingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesWebClient";
    const commandName = "GetUserSettingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetUserSettingsResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSErmineControlPlaneService",
        operation: "GetUserSettings",
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
  private serialize(input: GetUserSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetUserSettingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetUserSettingsCommandOutput> {
    return de_GetUserSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
