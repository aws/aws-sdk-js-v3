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
  UpdateServiceTemplateVersionInput,
  UpdateServiceTemplateVersionInputFilterSensitiveLog,
  UpdateServiceTemplateVersionOutput,
  UpdateServiceTemplateVersionOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  de_UpdateServiceTemplateVersionCommand,
  se_UpdateServiceTemplateVersionCommand,
} from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateServiceTemplateVersionCommand}.
 */
export interface UpdateServiceTemplateVersionCommandInput extends UpdateServiceTemplateVersionInput {}
/**
 * @public
 *
 * The output of {@link UpdateServiceTemplateVersionCommand}.
 */
export interface UpdateServiceTemplateVersionCommandOutput
  extends UpdateServiceTemplateVersionOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Update a major or minor version of a service template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, UpdateServiceTemplateVersionCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, UpdateServiceTemplateVersionCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const input = { // UpdateServiceTemplateVersionInput
 *   templateName: "STRING_VALUE", // required
 *   majorVersion: "STRING_VALUE", // required
 *   minorVersion: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   status: "STRING_VALUE",
 *   compatibleEnvironmentTemplates: [ // CompatibleEnvironmentTemplateInputList
 *     { // CompatibleEnvironmentTemplateInput
 *       templateName: "STRING_VALUE", // required
 *       majorVersion: "STRING_VALUE", // required
 *     },
 *   ],
 *   supportedComponentSources: [ // ServiceTemplateSupportedComponentSourceInputList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateServiceTemplateVersionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateServiceTemplateVersionOutput
 * //   serviceTemplateVersion: { // ServiceTemplateVersion
 * //     templateName: "STRING_VALUE", // required
 * //     majorVersion: "STRING_VALUE", // required
 * //     minorVersion: "STRING_VALUE", // required
 * //     recommendedMinorVersion: "STRING_VALUE",
 * //     status: "STRING_VALUE", // required
 * //     statusMessage: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     arn: "STRING_VALUE", // required
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     lastModifiedAt: new Date("TIMESTAMP"), // required
 * //     compatibleEnvironmentTemplates: [ // CompatibleEnvironmentTemplateList // required
 * //       { // CompatibleEnvironmentTemplate
 * //         templateName: "STRING_VALUE", // required
 * //         majorVersion: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     schema: "STRING_VALUE",
 * //     supportedComponentSources: [ // ServiceTemplateSupportedComponentSourceInputList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateServiceTemplateVersionCommandInput - {@link UpdateServiceTemplateVersionCommandInput}
 * @returns {@link UpdateServiceTemplateVersionCommandOutput}
 * @see {@link UpdateServiceTemplateVersionCommandInput} for command's `input` shape.
 * @see {@link UpdateServiceTemplateVersionCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>There <i>isn't</i> sufficient access for performing this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request <i>couldn't</i> be made due to a conflicting operation or resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed to register with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource <i>wasn't</i> found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input is invalid or an out-of-range value was supplied for the input parameter.</p>
 *
 * @throws {@link ProtonServiceException}
 * <p>Base exception class for all service exceptions from Proton service.</p>
 *
 */
export class UpdateServiceTemplateVersionCommand extends $Command<
  UpdateServiceTemplateVersionCommandInput,
  UpdateServiceTemplateVersionCommandOutput,
  ProtonClientResolvedConfig
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
  constructor(readonly input: UpdateServiceTemplateVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ProtonClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateServiceTemplateVersionCommandInput, UpdateServiceTemplateVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateServiceTemplateVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ProtonClient";
    const commandName = "UpdateServiceTemplateVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateServiceTemplateVersionInputFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateServiceTemplateVersionOutputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AwsProton20200720",
        operation: "UpdateServiceTemplateVersion",
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
  private serialize(input: UpdateServiceTemplateVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateServiceTemplateVersionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateServiceTemplateVersionCommandOutput> {
    return de_UpdateServiceTemplateVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
