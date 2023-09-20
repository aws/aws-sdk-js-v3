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
 */
export { __MetadataBearer, $Command };
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
 * // { // ListEnvironmentTemplateVersionsOutput
 * //   nextToken: "STRING_VALUE",
 * //   templateVersions: [ // EnvironmentTemplateVersionSummaryList // required
 * //     { // EnvironmentTemplateVersionSummary
 * //       templateName: "STRING_VALUE", // required
 * //       majorVersion: "STRING_VALUE", // required
 * //       minorVersion: "STRING_VALUE", // required
 * //       recommendedMinorVersion: "STRING_VALUE",
 * //       status: "STRING_VALUE", // required
 * //       statusMessage: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       arn: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       lastModifiedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * // };
 *
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
 * @throws {@link ProtonServiceException}
 * <p>Base exception class for all service exceptions from Proton service.</p>
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
      [SMITHY_CONTEXT_KEY]: {
        service: "AwsProton20200720",
        operation: "ListEnvironmentTemplateVersions",
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
