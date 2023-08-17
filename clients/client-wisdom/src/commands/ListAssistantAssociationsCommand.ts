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

import { ListAssistantAssociationsRequest, ListAssistantAssociationsResponse } from "../models/models_0";
import { de_ListAssistantAssociationsCommand, se_ListAssistantAssociationsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WisdomClientResolvedConfig } from "../WisdomClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAssistantAssociationsCommand}.
 */
export interface ListAssistantAssociationsCommandInput extends ListAssistantAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListAssistantAssociationsCommand}.
 */
export interface ListAssistantAssociationsCommandOutput extends ListAssistantAssociationsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists information about assistant associations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WisdomClient, ListAssistantAssociationsCommand } from "@aws-sdk/client-wisdom"; // ES Modules import
 * // const { WisdomClient, ListAssistantAssociationsCommand } = require("@aws-sdk/client-wisdom"); // CommonJS import
 * const client = new WisdomClient(config);
 * const input = { // ListAssistantAssociationsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   assistantId: "STRING_VALUE", // required
 * };
 * const command = new ListAssistantAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListAssistantAssociationsResponse
 * //   assistantAssociationSummaries: [ // AssistantAssociationSummaryList // required
 * //     { // AssistantAssociationSummary
 * //       assistantAssociationId: "STRING_VALUE", // required
 * //       assistantAssociationArn: "STRING_VALUE", // required
 * //       assistantId: "STRING_VALUE", // required
 * //       assistantArn: "STRING_VALUE", // required
 * //       associationType: "STRING_VALUE", // required
 * //       associationData: { // AssistantAssociationOutputData Union: only one key present
 * //         knowledgeBaseAssociation: { // KnowledgeBaseAssociationData
 * //           knowledgeBaseId: "STRING_VALUE",
 * //           knowledgeBaseArn: "STRING_VALUE",
 * //         },
 * //       },
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
 * @param ListAssistantAssociationsCommandInput - {@link ListAssistantAssociationsCommandInput}
 * @returns {@link ListAssistantAssociationsCommandOutput}
 * @see {@link ListAssistantAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListAssistantAssociationsCommandOutput} for command's `response` shape.
 * @see {@link WisdomClientResolvedConfig | config} for WisdomClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by a service.</p>
 *
 * @throws {@link WisdomServiceException}
 * <p>Base exception class for all service exceptions from Wisdom service.</p>
 *
 */
export class ListAssistantAssociationsCommand extends $Command<
  ListAssistantAssociationsCommandInput,
  ListAssistantAssociationsCommandOutput,
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
  constructor(readonly input: ListAssistantAssociationsCommandInput) {
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
  ): Handler<ListAssistantAssociationsCommandInput, ListAssistantAssociationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAssistantAssociationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WisdomClient";
    const commandName = "ListAssistantAssociationsCommand";
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
  private serialize(input: ListAssistantAssociationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListAssistantAssociationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAssistantAssociationsCommandOutput> {
    return de_ListAssistantAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
