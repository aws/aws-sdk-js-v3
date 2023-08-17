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

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import {
  UpdateDirectoryConfigRequest,
  UpdateDirectoryConfigRequestFilterSensitiveLog,
  UpdateDirectoryConfigResult,
  UpdateDirectoryConfigResultFilterSensitiveLog,
} from "../models/models_0";
import { de_UpdateDirectoryConfigCommand, se_UpdateDirectoryConfigCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateDirectoryConfigCommand}.
 */
export interface UpdateDirectoryConfigCommandInput extends UpdateDirectoryConfigRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDirectoryConfigCommand}.
 */
export interface UpdateDirectoryConfigCommandOutput extends UpdateDirectoryConfigResult, __MetadataBearer {}

/**
 * @public
 * <p>Updates the specified Directory Config object in AppStream 2.0. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, UpdateDirectoryConfigCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, UpdateDirectoryConfigCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const input = { // UpdateDirectoryConfigRequest
 *   DirectoryName: "STRING_VALUE", // required
 *   OrganizationalUnitDistinguishedNames: [ // OrganizationalUnitDistinguishedNamesList
 *     "STRING_VALUE",
 *   ],
 *   ServiceAccountCredentials: { // ServiceAccountCredentials
 *     AccountName: "STRING_VALUE", // required
 *     AccountPassword: "STRING_VALUE", // required
 *   },
 *   CertificateBasedAuthProperties: { // CertificateBasedAuthProperties
 *     Status: "DISABLED" || "ENABLED" || "ENABLED_NO_DIRECTORY_LOGIN_FALLBACK",
 *     CertificateAuthorityArn: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateDirectoryConfigCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDirectoryConfigResult
 * //   DirectoryConfig: { // DirectoryConfig
 * //     DirectoryName: "STRING_VALUE", // required
 * //     OrganizationalUnitDistinguishedNames: [ // OrganizationalUnitDistinguishedNamesList
 * //       "STRING_VALUE",
 * //     ],
 * //     ServiceAccountCredentials: { // ServiceAccountCredentials
 * //       AccountName: "STRING_VALUE", // required
 * //       AccountPassword: "STRING_VALUE", // required
 * //     },
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //     CertificateBasedAuthProperties: { // CertificateBasedAuthProperties
 * //       Status: "DISABLED" || "ENABLED" || "ENABLED_NO_DIRECTORY_LOGIN_FALLBACK",
 * //       CertificateAuthorityArn: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateDirectoryConfigCommandInput - {@link UpdateDirectoryConfigCommandInput}
 * @returns {@link UpdateDirectoryConfigCommandOutput}
 * @see {@link UpdateDirectoryConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateDirectoryConfigCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>An API error occurred. Wait a few minutes and try again.</p>
 *
 * @throws {@link InvalidRoleException} (client fault)
 *  <p>The specified role is invalid.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The attempted operation is not permitted.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is in use.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link AppStreamServiceException}
 * <p>Base exception class for all service exceptions from AppStream service.</p>
 *
 */
export class UpdateDirectoryConfigCommand extends $Command<
  UpdateDirectoryConfigCommandInput,
  UpdateDirectoryConfigCommandOutput,
  AppStreamClientResolvedConfig
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
  constructor(readonly input: UpdateDirectoryConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppStreamClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateDirectoryConfigCommandInput, UpdateDirectoryConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateDirectoryConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppStreamClient";
    const commandName = "UpdateDirectoryConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateDirectoryConfigRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateDirectoryConfigResultFilterSensitiveLog,
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
  private serialize(input: UpdateDirectoryConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateDirectoryConfigCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDirectoryConfigCommandOutput> {
    return de_UpdateDirectoryConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
