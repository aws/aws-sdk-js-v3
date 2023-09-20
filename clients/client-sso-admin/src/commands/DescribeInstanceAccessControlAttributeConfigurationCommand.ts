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
  DescribeInstanceAccessControlAttributeConfigurationRequest,
  DescribeInstanceAccessControlAttributeConfigurationResponse,
} from "../models/models_0";
import {
  de_DescribeInstanceAccessControlAttributeConfigurationCommand,
  se_DescribeInstanceAccessControlAttributeConfigurationCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeInstanceAccessControlAttributeConfigurationCommand}.
 */
export interface DescribeInstanceAccessControlAttributeConfigurationCommandInput
  extends DescribeInstanceAccessControlAttributeConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInstanceAccessControlAttributeConfigurationCommand}.
 */
export interface DescribeInstanceAccessControlAttributeConfigurationCommandOutput
  extends DescribeInstanceAccessControlAttributeConfigurationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns the list of IAM Identity Center identity store attributes that have been configured to work
 *       with attributes-based access control (ABAC) for the specified IAM Identity Center instance. This will not
 *       return attributes configured and sent by an external identity provider. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>IAM Identity Center User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, DescribeInstanceAccessControlAttributeConfigurationCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, DescribeInstanceAccessControlAttributeConfigurationCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const input = { // DescribeInstanceAccessControlAttributeConfigurationRequest
 *   InstanceArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeInstanceAccessControlAttributeConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInstanceAccessControlAttributeConfigurationResponse
 * //   Status: "ENABLED" || "CREATION_IN_PROGRESS" || "CREATION_FAILED",
 * //   StatusReason: "STRING_VALUE",
 * //   InstanceAccessControlAttributeConfiguration: { // InstanceAccessControlAttributeConfiguration
 * //     AccessControlAttributes: [ // AccessControlAttributeList // required
 * //       { // AccessControlAttribute
 * //         Key: "STRING_VALUE", // required
 * //         Value: { // AccessControlAttributeValue
 * //           Source: [ // AccessControlAttributeValueSourceList // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeInstanceAccessControlAttributeConfigurationCommandInput - {@link DescribeInstanceAccessControlAttributeConfigurationCommandInput}
 * @returns {@link DescribeInstanceAccessControlAttributeConfigurationCommandOutput}
 * @see {@link DescribeInstanceAccessControlAttributeConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeInstanceAccessControlAttributeConfigurationCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
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
export class DescribeInstanceAccessControlAttributeConfigurationCommand extends $Command<
  DescribeInstanceAccessControlAttributeConfigurationCommandInput,
  DescribeInstanceAccessControlAttributeConfigurationCommandOutput,
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
  constructor(readonly input: DescribeInstanceAccessControlAttributeConfigurationCommandInput) {
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
    DescribeInstanceAccessControlAttributeConfigurationCommandInput,
    DescribeInstanceAccessControlAttributeConfigurationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DescribeInstanceAccessControlAttributeConfigurationCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOAdminClient";
    const commandName = "DescribeInstanceAccessControlAttributeConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SWBExternalService",
        operation: "DescribeInstanceAccessControlAttributeConfiguration",
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
  private serialize(
    input: DescribeInstanceAccessControlAttributeConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeInstanceAccessControlAttributeConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeInstanceAccessControlAttributeConfigurationCommandOutput> {
    return de_DescribeInstanceAccessControlAttributeConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
