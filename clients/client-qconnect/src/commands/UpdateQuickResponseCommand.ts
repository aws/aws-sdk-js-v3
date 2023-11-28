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
  UpdateQuickResponseRequest,
  UpdateQuickResponseRequestFilterSensitiveLog,
  UpdateQuickResponseResponse,
  UpdateQuickResponseResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_UpdateQuickResponseCommand, se_UpdateQuickResponseCommand } from "../protocols/Aws_restJson1";
import { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateQuickResponseCommand}.
 */
export interface UpdateQuickResponseCommandInput extends UpdateQuickResponseRequest {}
/**
 * @public
 *
 * The output of {@link UpdateQuickResponseCommand}.
 */
export interface UpdateQuickResponseCommandOutput extends UpdateQuickResponseResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates an existing Amazon Q quick response.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, UpdateQuickResponseCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, UpdateQuickResponseCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * const client = new QConnectClient(config);
 * const input = { // UpdateQuickResponseRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   quickResponseId: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   content: { // QuickResponseDataProvider Union: only one key present
 *     content: "STRING_VALUE",
 *   },
 *   contentType: "STRING_VALUE",
 *   groupingConfiguration: { // GroupingConfiguration
 *     criteria: "STRING_VALUE",
 *     values: [ // GroupingValues
 *       "STRING_VALUE",
 *     ],
 *   },
 *   removeGroupingConfiguration: true || false,
 *   description: "STRING_VALUE",
 *   removeDescription: true || false,
 *   shortcutKey: "STRING_VALUE",
 *   removeShortcutKey: true || false,
 *   isActive: true || false,
 *   channels: [ // Channels
 *     "STRING_VALUE",
 *   ],
 *   language: "STRING_VALUE",
 * };
 * const command = new UpdateQuickResponseCommand(input);
 * const response = await client.send(command);
 * // { // UpdateQuickResponseResponse
 * //   quickResponse: { // QuickResponseData
 * //     quickResponseArn: "STRING_VALUE", // required
 * //     quickResponseId: "STRING_VALUE", // required
 * //     knowledgeBaseArn: "STRING_VALUE", // required
 * //     knowledgeBaseId: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     contentType: "STRING_VALUE", // required
 * //     status: "STRING_VALUE", // required
 * //     createdTime: new Date("TIMESTAMP"), // required
 * //     lastModifiedTime: new Date("TIMESTAMP"), // required
 * //     contents: { // QuickResponseContents
 * //       plainText: { // QuickResponseContentProvider Union: only one key present
 * //         content: "STRING_VALUE",
 * //       },
 * //       markdown: {//  Union: only one key present
 * //         content: "STRING_VALUE",
 * //       },
 * //     },
 * //     description: "STRING_VALUE",
 * //     groupingConfiguration: { // GroupingConfiguration
 * //       criteria: "STRING_VALUE",
 * //       values: [ // GroupingValues
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     shortcutKey: "STRING_VALUE",
 * //     lastModifiedBy: "STRING_VALUE",
 * //     isActive: true || false,
 * //     channels: [ // Channels
 * //       "STRING_VALUE",
 * //     ],
 * //     language: "STRING_VALUE",
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateQuickResponseCommandInput - {@link UpdateQuickResponseCommandInput}
 * @returns {@link UpdateQuickResponseCommandOutput}
 * @see {@link UpdateQuickResponseCommandInput} for command's `input` shape.
 * @see {@link UpdateQuickResponseCommandOutput} for command's `response` shape.
 * @see {@link QConnectClientResolvedConfig | config} for QConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the
 *       resource. For example, if you're using a <code>Create</code> API (such as
 *         <code>CreateAssistant</code>) that accepts name, a conflicting resource (usually with the
 *       same name) is being created or mutated.</p>
 *
 * @throws {@link PreconditionFailedException} (client fault)
 *  <p>The provided <code>revisionId</code> does not match, indicating the content has been
 *       modified since it was last read.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by a service.</p>
 *
 * @throws {@link QConnectServiceException}
 * <p>Base exception class for all service exceptions from QConnect service.</p>
 *
 */
export class UpdateQuickResponseCommand extends $Command<
  UpdateQuickResponseCommandInput,
  UpdateQuickResponseCommandOutput,
  QConnectClientResolvedConfig
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
  constructor(readonly input: UpdateQuickResponseCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateQuickResponseCommandInput, UpdateQuickResponseCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateQuickResponseCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QConnectClient";
    const commandName = "UpdateQuickResponseCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateQuickResponseRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateQuickResponseResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "WisdomService",
        operation: "UpdateQuickResponse",
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
  private serialize(input: UpdateQuickResponseCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateQuickResponseCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateQuickResponseCommandOutput> {
    return de_UpdateQuickResponseCommand(output, context);
  }
}
