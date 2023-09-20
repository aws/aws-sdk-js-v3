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

import { UpdateKnowledgeBaseTemplateUriRequest, UpdateKnowledgeBaseTemplateUriResponse } from "../models/models_0";
import {
  de_UpdateKnowledgeBaseTemplateUriCommand,
  se_UpdateKnowledgeBaseTemplateUriCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WisdomClientResolvedConfig } from "../WisdomClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateKnowledgeBaseTemplateUriCommand}.
 */
export interface UpdateKnowledgeBaseTemplateUriCommandInput extends UpdateKnowledgeBaseTemplateUriRequest {}
/**
 * @public
 *
 * The output of {@link UpdateKnowledgeBaseTemplateUriCommand}.
 */
export interface UpdateKnowledgeBaseTemplateUriCommandOutput
  extends UpdateKnowledgeBaseTemplateUriResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Updates the template URI of a knowledge base. This is only supported for knowledge bases
 *       of type EXTERNAL. Include a single variable in <code>$\{variable\}</code> format; this
 *       interpolated by Wisdom using ingested content. For example, if you ingest a Salesforce
 *       article, it has an <code>Id</code> value, and you can set the template URI to
 *         <code>https://myInstanceName.lightning.force.com/lightning/r/Knowledge__kav/*$\{Id\}*\/view</code>.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WisdomClient, UpdateKnowledgeBaseTemplateUriCommand } from "@aws-sdk/client-wisdom"; // ES Modules import
 * // const { WisdomClient, UpdateKnowledgeBaseTemplateUriCommand } = require("@aws-sdk/client-wisdom"); // CommonJS import
 * const client = new WisdomClient(config);
 * const input = { // UpdateKnowledgeBaseTemplateUriRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   templateUri: "STRING_VALUE", // required
 * };
 * const command = new UpdateKnowledgeBaseTemplateUriCommand(input);
 * const response = await client.send(command);
 * // { // UpdateKnowledgeBaseTemplateUriResponse
 * //   knowledgeBase: { // KnowledgeBaseData
 * //     knowledgeBaseId: "STRING_VALUE", // required
 * //     knowledgeBaseArn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     knowledgeBaseType: "STRING_VALUE", // required
 * //     status: "STRING_VALUE", // required
 * //     lastContentModificationTime: new Date("TIMESTAMP"),
 * //     sourceConfiguration: { // SourceConfiguration Union: only one key present
 * //       appIntegrations: { // AppIntegrationsConfiguration
 * //         appIntegrationArn: "STRING_VALUE", // required
 * //         objectFields: [ // ObjectFieldsList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //     renderingConfiguration: { // RenderingConfiguration
 * //       templateUri: "STRING_VALUE",
 * //     },
 * //     serverSideEncryptionConfiguration: { // ServerSideEncryptionConfiguration
 * //       kmsKeyId: "STRING_VALUE",
 * //     },
 * //     description: "STRING_VALUE",
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateKnowledgeBaseTemplateUriCommandInput - {@link UpdateKnowledgeBaseTemplateUriCommandInput}
 * @returns {@link UpdateKnowledgeBaseTemplateUriCommandOutput}
 * @see {@link UpdateKnowledgeBaseTemplateUriCommandInput} for command's `input` shape.
 * @see {@link UpdateKnowledgeBaseTemplateUriCommandOutput} for command's `response` shape.
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
export class UpdateKnowledgeBaseTemplateUriCommand extends $Command<
  UpdateKnowledgeBaseTemplateUriCommandInput,
  UpdateKnowledgeBaseTemplateUriCommandOutput,
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
  constructor(readonly input: UpdateKnowledgeBaseTemplateUriCommandInput) {
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
  ): Handler<UpdateKnowledgeBaseTemplateUriCommandInput, UpdateKnowledgeBaseTemplateUriCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateKnowledgeBaseTemplateUriCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WisdomClient";
    const commandName = "UpdateKnowledgeBaseTemplateUriCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "WisdomService",
        operation: "UpdateKnowledgeBaseTemplateUri",
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
    input: UpdateKnowledgeBaseTemplateUriCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_UpdateKnowledgeBaseTemplateUriCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateKnowledgeBaseTemplateUriCommandOutput> {
    return de_UpdateKnowledgeBaseTemplateUriCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
