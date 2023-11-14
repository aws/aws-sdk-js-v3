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
  ListEnvironmentTemplatesInput,
  ListEnvironmentTemplatesOutput,
  ListEnvironmentTemplatesOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_ListEnvironmentTemplatesCommand, se_ListEnvironmentTemplatesCommand } from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListEnvironmentTemplatesCommand}.
 */
export interface ListEnvironmentTemplatesCommandInput extends ListEnvironmentTemplatesInput {}
/**
 * @public
 *
 * The output of {@link ListEnvironmentTemplatesCommand}.
 */
export interface ListEnvironmentTemplatesCommandOutput extends ListEnvironmentTemplatesOutput, __MetadataBearer {}

/**
 * @public
 * <p>List environment templates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, ListEnvironmentTemplatesCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, ListEnvironmentTemplatesCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const input = { // ListEnvironmentTemplatesInput
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListEnvironmentTemplatesCommand(input);
 * const response = await client.send(command);
 * // { // ListEnvironmentTemplatesOutput
 * //   nextToken: "STRING_VALUE",
 * //   templates: [ // EnvironmentTemplateSummaryList // required
 * //     { // EnvironmentTemplateSummary
 * //       name: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       lastModifiedAt: new Date("TIMESTAMP"), // required
 * //       displayName: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       recommendedVersion: "STRING_VALUE",
 * //       provisioning: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListEnvironmentTemplatesCommandInput - {@link ListEnvironmentTemplatesCommandInput}
 * @returns {@link ListEnvironmentTemplatesCommandOutput}
 * @see {@link ListEnvironmentTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListEnvironmentTemplatesCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>There <i>isn't</i> sufficient access for performing this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed to register with the service.</p>
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
export class ListEnvironmentTemplatesCommand extends $Command<
  ListEnvironmentTemplatesCommandInput,
  ListEnvironmentTemplatesCommandOutput,
  ProtonClientResolvedConfig
> {
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
  constructor(readonly input: ListEnvironmentTemplatesCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ProtonClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListEnvironmentTemplatesCommandInput, ListEnvironmentTemplatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListEnvironmentTemplatesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ProtonClient";
    const commandName = "ListEnvironmentTemplatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: ListEnvironmentTemplatesOutputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AwsProton20200720",
        operation: "ListEnvironmentTemplates",
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
  private serialize(input: ListEnvironmentTemplatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListEnvironmentTemplatesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListEnvironmentTemplatesCommandOutput> {
    return de_ListEnvironmentTemplatesCommand(output, context);
  }
}
