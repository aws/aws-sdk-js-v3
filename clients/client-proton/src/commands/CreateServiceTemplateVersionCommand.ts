// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  CreateServiceTemplateVersionInput,
  CreateServiceTemplateVersionInputFilterSensitiveLog,
  CreateServiceTemplateVersionOutput,
  CreateServiceTemplateVersionOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0CreateServiceTemplateVersionCommand,
  serializeAws_json1_0CreateServiceTemplateVersionCommand,
} from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

/**
 * @public
 *
 * The input for {@link CreateServiceTemplateVersionCommand}.
 */
export interface CreateServiceTemplateVersionCommandInput extends CreateServiceTemplateVersionInput {}
/**
 * @public
 *
 * The output of {@link CreateServiceTemplateVersionCommand}.
 */
export interface CreateServiceTemplateVersionCommandOutput
  extends CreateServiceTemplateVersionOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Create a new major or minor version of a service template. A major version of a service template is a version that <i>isn't</i> backward
 *       compatible. A minor version of a service template is a version that's backward compatible within its major version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, CreateServiceTemplateVersionCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, CreateServiceTemplateVersionCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const input = {
 *   clientToken: "STRING_VALUE",
 *   templateName: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   majorVersion: "STRING_VALUE",
 *   source: { // Union: only one key present
 *     s3: {
 *       bucket: "STRING_VALUE", // required
 *       key: "STRING_VALUE", // required
 *     },
 *   },
 *   compatibleEnvironmentTemplates: [ // required
 *     {
 *       templateName: "STRING_VALUE", // required
 *       majorVersion: "STRING_VALUE", // required
 *     },
 *   ],
 *   tags: [
 *     {
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 *   supportedComponentSources: [
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new CreateServiceTemplateVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateServiceTemplateVersionCommandInput - {@link CreateServiceTemplateVersionCommandInput}
 * @returns {@link CreateServiceTemplateVersionCommandOutput}
 * @see {@link CreateServiceTemplateVersionCommandInput} for command's `input` shape.
 * @see {@link CreateServiceTemplateVersionCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>A quota was exceeded. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-limits.html">Proton Quotas</a> in
 *       the <i>Proton User Guide</i>.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input is invalid or an out-of-range value was supplied for the input parameter.</p>
 *
 *
 */
export class CreateServiceTemplateVersionCommand extends $Command<
  CreateServiceTemplateVersionCommandInput,
  CreateServiceTemplateVersionCommandOutput,
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
  constructor(readonly input: CreateServiceTemplateVersionCommandInput) {
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
  ): Handler<CreateServiceTemplateVersionCommandInput, CreateServiceTemplateVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateServiceTemplateVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ProtonClient";
    const commandName = "CreateServiceTemplateVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateServiceTemplateVersionInputFilterSensitiveLog,
      outputFilterSensitiveLog: CreateServiceTemplateVersionOutputFilterSensitiveLog,
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
  private serialize(input: CreateServiceTemplateVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0CreateServiceTemplateVersionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateServiceTemplateVersionCommandOutput> {
    return deserializeAws_json1_0CreateServiceTemplateVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
