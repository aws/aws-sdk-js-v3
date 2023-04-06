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
  ListEnvironmentTemplateVersionsInput,
  ListEnvironmentTemplateVersionsOutput,
  ListEnvironmentTemplateVersionsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  de_ListEnvironmentTemplateVersionsCommand,
  se_ListEnvironmentTemplateVersionsCommand,
} from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

/**
 * @public
 *
 * The input for {@link ListEnvironmentTemplateVersionsCommand}.
 */
export interface ListEnvironmentTemplateVersionsCommandInput extends ListEnvironmentTemplateVersionsInput {}
/**
 * @public
 *
 * The output of {@link ListEnvironmentTemplateVersionsCommand}.
 */
export interface ListEnvironmentTemplateVersionsCommandOutput
  extends ListEnvironmentTemplateVersionsOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>List major or minor versions of an environment template with detail data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, ListEnvironmentTemplateVersionsCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, ListEnvironmentTemplateVersionsCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const input = { // ListEnvironmentTemplateVersionsInput
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   templateName: "STRING_VALUE", // required
 *   majorVersion: "STRING_VALUE",
 * };
 * const command = new ListEnvironmentTemplateVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListEnvironmentTemplateVersionsCommandInput - {@link ListEnvironmentTemplateVersionsCommandInput}
 * @returns {@link ListEnvironmentTemplateVersionsCommandOutput}
 * @see {@link ListEnvironmentTemplateVersionsCommandInput} for command's `input` shape.
 * @see {@link ListEnvironmentTemplateVersionsCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>There <i>isn't</i> sufficient access for performing this action.</p>
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
 *
 */
export class ListEnvironmentTemplateVersionsCommand extends $Command<
  ListEnvironmentTemplateVersionsCommandInput,
  ListEnvironmentTemplateVersionsCommandOutput,
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
  constructor(readonly input: ListEnvironmentTemplateVersionsCommandInput) {
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
  ): Handler<ListEnvironmentTemplateVersionsCommandInput, ListEnvironmentTemplateVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListEnvironmentTemplateVersionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ProtonClient";
    const commandName = "ListEnvironmentTemplateVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: ListEnvironmentTemplateVersionsOutputFilterSensitiveLog,
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
    input: ListEnvironmentTemplateVersionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListEnvironmentTemplateVersionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListEnvironmentTemplateVersionsCommandOutput> {
    return de_ListEnvironmentTemplateVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
