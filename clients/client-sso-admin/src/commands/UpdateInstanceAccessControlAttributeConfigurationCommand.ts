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

import {
  UpdateInstanceAccessControlAttributeConfigurationRequest,
  UpdateInstanceAccessControlAttributeConfigurationResponse,
} from "../models/models_0";
import {
  de_UpdateInstanceAccessControlAttributeConfigurationCommand,
  se_UpdateInstanceAccessControlAttributeConfigurationCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateInstanceAccessControlAttributeConfigurationCommand}.
 */
export interface UpdateInstanceAccessControlAttributeConfigurationCommandInput
  extends UpdateInstanceAccessControlAttributeConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateInstanceAccessControlAttributeConfigurationCommand}.
 */
export interface UpdateInstanceAccessControlAttributeConfigurationCommandOutput
  extends UpdateInstanceAccessControlAttributeConfigurationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Updates the IAM Identity Center identity store attributes that you can use with the IAM Identity Center instance
 *       for attributes-based access control (ABAC). When using an external identity provider as an
 *       identity source, you can pass attributes through the SAML assertion as an alternative to
 *       configuring attributes from the IAM Identity Center identity store. If a SAML assertion passes any of
 *       these attributes, IAM Identity Center replaces the attribute value with the value from the IAM Identity Center
 *       identity store. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>IAM Identity Center User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, UpdateInstanceAccessControlAttributeConfigurationCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, UpdateInstanceAccessControlAttributeConfigurationCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const input = { // UpdateInstanceAccessControlAttributeConfigurationRequest
 *   InstanceArn: "STRING_VALUE", // required
 *   InstanceAccessControlAttributeConfiguration: { // InstanceAccessControlAttributeConfiguration
 *     AccessControlAttributes: [ // AccessControlAttributeList // required
 *       { // AccessControlAttribute
 *         Key: "STRING_VALUE", // required
 *         Value: { // AccessControlAttributeValue
 *           Source: [ // AccessControlAttributeValueSourceList // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *     ],
 *   },
 * };
 * const command = new UpdateInstanceAccessControlAttributeConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateInstanceAccessControlAttributeConfigurationCommandInput - {@link UpdateInstanceAccessControlAttributeConfigurationCommandInput}
 * @returns {@link UpdateInstanceAccessControlAttributeConfigurationCommandOutput}
 * @see {@link UpdateInstanceAccessControlAttributeConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateInstanceAccessControlAttributeConfigurationCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Occurs when a conflict with a previous successful write is detected. This generally occurs
 *       when the previous write did not have time to propagate to the host serving the current
 *       request. A retry (with appropriate backoff logic) is the recommended response to this
 *       exception.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure with
 *       an internal server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Indicates that a requested resource is not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Indicates that the principal has crossed the throttling limits of the API
 *       operations.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed because it contains a syntax error.</p>
 *
 * @throws {@link SSOAdminServiceException}
 * <p>Base exception class for all service exceptions from SSOAdmin service.</p>
 *
 */
export class UpdateInstanceAccessControlAttributeConfigurationCommand extends $Command<
  UpdateInstanceAccessControlAttributeConfigurationCommandInput,
  UpdateInstanceAccessControlAttributeConfigurationCommandOutput,
  SSOAdminClientResolvedConfig
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
  constructor(readonly input: UpdateInstanceAccessControlAttributeConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSOAdminClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    UpdateInstanceAccessControlAttributeConfigurationCommandInput,
    UpdateInstanceAccessControlAttributeConfigurationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        UpdateInstanceAccessControlAttributeConfigurationCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOAdminClient";
    const commandName = "UpdateInstanceAccessControlAttributeConfigurationCommand";
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
  private serialize(
    input: UpdateInstanceAccessControlAttributeConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_UpdateInstanceAccessControlAttributeConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateInstanceAccessControlAttributeConfigurationCommandOutput> {
    return de_UpdateInstanceAccessControlAttributeConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
