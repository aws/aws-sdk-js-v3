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

import { CreateAssistantAssociationRequest, CreateAssistantAssociationResponse } from "../models/models_0";
import { de_CreateAssistantAssociationCommand, se_CreateAssistantAssociationCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WisdomClientResolvedConfig } from "../WisdomClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateAssistantAssociationCommand}.
 */
export interface CreateAssistantAssociationCommandInput extends CreateAssistantAssociationRequest {}
/**
 * @public
 *
 * The output of {@link CreateAssistantAssociationCommand}.
 */
export interface CreateAssistantAssociationCommandOutput extends CreateAssistantAssociationResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates an association between an Amazon Connect Wisdom assistant and another resource. Currently, the
 *       only supported association is with a knowledge base. An assistant can have only a single
 *       association.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WisdomClient, CreateAssistantAssociationCommand } from "@aws-sdk/client-wisdom"; // ES Modules import
 * // const { WisdomClient, CreateAssistantAssociationCommand } = require("@aws-sdk/client-wisdom"); // CommonJS import
 * const client = new WisdomClient(config);
 * const input = { // CreateAssistantAssociationRequest
 *   assistantId: "STRING_VALUE", // required
 *   associationType: "STRING_VALUE", // required
 *   association: { // AssistantAssociationInputData Union: only one key present
 *     knowledgeBaseId: "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE",
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateAssistantAssociationCommand(input);
 * const response = await client.send(command);
 * // { // CreateAssistantAssociationResponse
 * //   assistantAssociation: { // AssistantAssociationData
 * //     assistantAssociationId: "STRING_VALUE", // required
 * //     assistantAssociationArn: "STRING_VALUE", // required
 * //     assistantId: "STRING_VALUE", // required
 * //     assistantArn: "STRING_VALUE", // required
 * //     associationType: "STRING_VALUE", // required
 * //     associationData: { // AssistantAssociationOutputData Union: only one key present
 * //       knowledgeBaseAssociation: { // KnowledgeBaseAssociationData
 * //         knowledgeBaseId: "STRING_VALUE",
 * //         knowledgeBaseArn: "STRING_VALUE",
 * //       },
 * //     },
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateAssistantAssociationCommandInput - {@link CreateAssistantAssociationCommandInput}
 * @returns {@link CreateAssistantAssociationCommandOutput}
 * @see {@link CreateAssistantAssociationCommandInput} for command's `input` shape.
 * @see {@link CreateAssistantAssociationCommandOutput} for command's `response` shape.
 * @see {@link WisdomClientResolvedConfig | config} for WisdomClient's `config` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You've exceeded your service quota. To perform the requested action, remove some of the
 *       relevant resources, or use service quotas to request a service quota increase.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by a service.</p>
 *
 * @throws {@link WisdomServiceException}
 * <p>Base exception class for all service exceptions from Wisdom service.</p>
 *
 */
export class CreateAssistantAssociationCommand extends $Command<
  CreateAssistantAssociationCommandInput,
  CreateAssistantAssociationCommandOutput,
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
  constructor(readonly input: CreateAssistantAssociationCommandInput) {
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
  ): Handler<CreateAssistantAssociationCommandInput, CreateAssistantAssociationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateAssistantAssociationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WisdomClient";
    const commandName = "CreateAssistantAssociationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "WisdomService",
        operation: "CreateAssistantAssociation",
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
  private serialize(input: CreateAssistantAssociationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateAssistantAssociationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateAssistantAssociationCommandOutput> {
    return de_CreateAssistantAssociationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
