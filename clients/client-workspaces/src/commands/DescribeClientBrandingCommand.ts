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

import { DescribeClientBrandingRequest, DescribeClientBrandingResult } from "../models/models_0";
import { de_DescribeClientBrandingCommand, se_DescribeClientBrandingCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeClientBrandingCommand}.
 */
export interface DescribeClientBrandingCommandInput extends DescribeClientBrandingRequest {}
/**
 * @public
 *
 * The output of {@link DescribeClientBrandingCommand}.
 */
export interface DescribeClientBrandingCommandOutput extends DescribeClientBrandingResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes the specified client branding. Client branding allows you to customize the log
 *          in page of various device types for your users. You can add your company logo, the support
 *          email address, support link, link to reset password, and a custom message for users trying
 *          to sign in.</p>
 *          <note>
 *             <p>Only device types that have branding information configured will be shown in the
 *             response.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DescribeClientBrandingCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DescribeClientBrandingCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const input = { // DescribeClientBrandingRequest
 *   ResourceId: "STRING_VALUE", // required
 * };
 * const command = new DescribeClientBrandingCommand(input);
 * const response = await client.send(command);
 * // { // DescribeClientBrandingResult
 * //   DeviceTypeWindows: { // DefaultClientBrandingAttributes
 * //     LogoUrl: "STRING_VALUE",
 * //     SupportEmail: "STRING_VALUE",
 * //     SupportLink: "STRING_VALUE",
 * //     ForgotPasswordLink: "STRING_VALUE",
 * //     LoginMessage: { // LoginMessage
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * //   DeviceTypeOsx: {
 * //     LogoUrl: "STRING_VALUE",
 * //     SupportEmail: "STRING_VALUE",
 * //     SupportLink: "STRING_VALUE",
 * //     ForgotPasswordLink: "STRING_VALUE",
 * //     LoginMessage: {
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * //   DeviceTypeAndroid: {
 * //     LogoUrl: "STRING_VALUE",
 * //     SupportEmail: "STRING_VALUE",
 * //     SupportLink: "STRING_VALUE",
 * //     ForgotPasswordLink: "STRING_VALUE",
 * //     LoginMessage: {
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * //   DeviceTypeIos: { // IosClientBrandingAttributes
 * //     LogoUrl: "STRING_VALUE",
 * //     Logo2xUrl: "STRING_VALUE",
 * //     Logo3xUrl: "STRING_VALUE",
 * //     SupportEmail: "STRING_VALUE",
 * //     SupportLink: "STRING_VALUE",
 * //     ForgotPasswordLink: "STRING_VALUE",
 * //     LoginMessage: {
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * //   DeviceTypeLinux: {
 * //     LogoUrl: "STRING_VALUE",
 * //     SupportEmail: "STRING_VALUE",
 * //     SupportLink: "STRING_VALUE",
 * //     ForgotPasswordLink: "STRING_VALUE",
 * //     LoginMessage: {
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * //   DeviceTypeWeb: {
 * //     LogoUrl: "STRING_VALUE",
 * //     SupportEmail: "STRING_VALUE",
 * //     SupportLink: "STRING_VALUE",
 * //     ForgotPasswordLink: "STRING_VALUE",
 * //     LoginMessage: "<LoginMessage>",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeClientBrandingCommandInput - {@link DescribeClientBrandingCommandInput}
 * @returns {@link DescribeClientBrandingCommandOutput}
 * @see {@link DescribeClientBrandingCommandInput} for command's `input` shape.
 * @see {@link DescribeClientBrandingCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 */
export class DescribeClientBrandingCommand extends $Command<
  DescribeClientBrandingCommandInput,
  DescribeClientBrandingCommandOutput,
  WorkSpacesClientResolvedConfig
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
  constructor(readonly input: DescribeClientBrandingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkSpacesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeClientBrandingCommandInput, DescribeClientBrandingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeClientBrandingCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "DescribeClientBrandingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "WorkspacesService",
        operation: "DescribeClientBranding",
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
  private serialize(input: DescribeClientBrandingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeClientBrandingCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeClientBrandingCommandOutput> {
    return de_DescribeClientBrandingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
