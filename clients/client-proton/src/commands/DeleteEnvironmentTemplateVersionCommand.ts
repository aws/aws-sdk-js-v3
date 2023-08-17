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
  DeleteEnvironmentTemplateVersionInput,
  DeleteEnvironmentTemplateVersionOutput,
  DeleteEnvironmentTemplateVersionOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  de_DeleteEnvironmentTemplateVersionCommand,
  se_DeleteEnvironmentTemplateVersionCommand,
} from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteEnvironmentTemplateVersionCommand}.
 */
export interface DeleteEnvironmentTemplateVersionCommandInput extends DeleteEnvironmentTemplateVersionInput {}
/**
 * @public
 *
 * The output of {@link DeleteEnvironmentTemplateVersionCommand}.
 */
export interface DeleteEnvironmentTemplateVersionCommandOutput
  extends DeleteEnvironmentTemplateVersionOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>If no other minor versions of an environment template exist, delete a major version of the environment template if it's not the
 *         <code>Recommended</code> version. Delete the <code>Recommended</code> version of the environment template if no other major versions or minor versions
 *       of the environment template exist. A major version of an environment template is a version that's not backward compatible.</p>
 *          <p>Delete a minor version of an environment template if it <i>isn't</i> the <code>Recommended</code> version. Delete a
 *         <code>Recommended</code> minor version of the environment template if no other minor versions of the environment template exist. A minor version of an
 *       environment template is a version that's backward compatible.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, DeleteEnvironmentTemplateVersionCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, DeleteEnvironmentTemplateVersionCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const input = { // DeleteEnvironmentTemplateVersionInput
 *   templateName: "STRING_VALUE", // required
 *   majorVersion: "STRING_VALUE", // required
 *   minorVersion: "STRING_VALUE", // required
 * };
 * const command = new DeleteEnvironmentTemplateVersionCommand(input);
 * const response = await client.send(command);
 * // { // DeleteEnvironmentTemplateVersionOutput
 * //   environmentTemplateVersion: { // EnvironmentTemplateVersion
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
 * //     schema: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteEnvironmentTemplateVersionCommandInput - {@link DeleteEnvironmentTemplateVersionCommandInput}
 * @returns {@link DeleteEnvironmentTemplateVersionCommandOutput}
 * @see {@link DeleteEnvironmentTemplateVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteEnvironmentTemplateVersionCommandOutput} for command's `response` shape.
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
export class DeleteEnvironmentTemplateVersionCommand extends $Command<
  DeleteEnvironmentTemplateVersionCommandInput,
  DeleteEnvironmentTemplateVersionCommandOutput,
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
  constructor(readonly input: DeleteEnvironmentTemplateVersionCommandInput) {
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
  ): Handler<DeleteEnvironmentTemplateVersionCommandInput, DeleteEnvironmentTemplateVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteEnvironmentTemplateVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ProtonClient";
    const commandName = "DeleteEnvironmentTemplateVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DeleteEnvironmentTemplateVersionOutputFilterSensitiveLog,
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
    input: DeleteEnvironmentTemplateVersionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DeleteEnvironmentTemplateVersionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteEnvironmentTemplateVersionCommandOutput> {
    return de_DeleteEnvironmentTemplateVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
