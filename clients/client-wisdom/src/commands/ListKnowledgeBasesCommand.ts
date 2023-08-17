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

import { ListKnowledgeBasesRequest, ListKnowledgeBasesResponse } from "../models/models_0";
import { de_ListKnowledgeBasesCommand, se_ListKnowledgeBasesCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WisdomClientResolvedConfig } from "../WisdomClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListKnowledgeBasesCommand}.
 */
export interface ListKnowledgeBasesCommandInput extends ListKnowledgeBasesRequest {}
/**
 * @public
 *
 * The output of {@link ListKnowledgeBasesCommand}.
 */
export interface ListKnowledgeBasesCommandOutput extends ListKnowledgeBasesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the knowledge bases.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WisdomClient, ListKnowledgeBasesCommand } from "@aws-sdk/client-wisdom"; // ES Modules import
 * // const { WisdomClient, ListKnowledgeBasesCommand } = require("@aws-sdk/client-wisdom"); // CommonJS import
 * const client = new WisdomClient(config);
 * const input = { // ListKnowledgeBasesRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListKnowledgeBasesCommand(input);
 * const response = await client.send(command);
 * // { // ListKnowledgeBasesResponse
 * //   knowledgeBaseSummaries: [ // KnowledgeBaseList // required
 * //     { // KnowledgeBaseSummary
 * //       knowledgeBaseId: "STRING_VALUE", // required
 * //       knowledgeBaseArn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       knowledgeBaseType: "STRING_VALUE", // required
 * //       status: "STRING_VALUE", // required
 * //       sourceConfiguration: { // SourceConfiguration Union: only one key present
 * //         appIntegrations: { // AppIntegrationsConfiguration
 * //           appIntegrationArn: "STRING_VALUE", // required
 * //           objectFields: [ // ObjectFieldsList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //       renderingConfiguration: { // RenderingConfiguration
 * //         templateUri: "STRING_VALUE",
 * //       },
 * //       serverSideEncryptionConfiguration: { // ServerSideEncryptionConfiguration
 * //         kmsKeyId: "STRING_VALUE",
 * //       },
 * //       description: "STRING_VALUE",
 * //       tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListKnowledgeBasesCommandInput - {@link ListKnowledgeBasesCommandInput}
 * @returns {@link ListKnowledgeBasesCommandOutput}
 * @see {@link ListKnowledgeBasesCommandInput} for command's `input` shape.
 * @see {@link ListKnowledgeBasesCommandOutput} for command's `response` shape.
 * @see {@link WisdomClientResolvedConfig | config} for WisdomClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by a service.</p>
 *
 * @throws {@link WisdomServiceException}
 * <p>Base exception class for all service exceptions from Wisdom service.</p>
 *
 */
export class ListKnowledgeBasesCommand extends $Command<
  ListKnowledgeBasesCommandInput,
  ListKnowledgeBasesCommandOutput,
  WisdomClientResolvedConfig
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
  constructor(readonly input: ListKnowledgeBasesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WisdomClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListKnowledgeBasesCommandInput, ListKnowledgeBasesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListKnowledgeBasesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WisdomClient";
    const commandName = "ListKnowledgeBasesCommand";
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
  private serialize(input: ListKnowledgeBasesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListKnowledgeBasesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListKnowledgeBasesCommandOutput> {
    return de_ListKnowledgeBasesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
