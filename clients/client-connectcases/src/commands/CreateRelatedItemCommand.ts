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

import { ConnectCasesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectCasesClient";
import { CreateRelatedItemRequest, CreateRelatedItemResponse } from "../models/models_0";
import { de_CreateRelatedItemCommand, se_CreateRelatedItemCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateRelatedItemCommand}.
 */
export interface CreateRelatedItemCommandInput extends CreateRelatedItemRequest {}
/**
 * @public
 *
 * The output of {@link CreateRelatedItemCommand}.
 */
export interface CreateRelatedItemCommandOutput extends CreateRelatedItemResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a related item (comments, tasks, and contacts) and associates it with a
 *       case.</p>
 *          <note>
 *             <p>A Related Item is a resource that is associated with a case. It may or may not have an
 *         external identifier linking it to an external resource (for example, a
 *           <code>contactArn</code>). All Related Items have their own internal identifier, the
 *           <code>relatedItemArn</code>. Examples of related items include <code>comments</code> and
 *           <code>contacts</code>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCasesClient, CreateRelatedItemCommand } from "@aws-sdk/client-connectcases"; // ES Modules import
 * // const { ConnectCasesClient, CreateRelatedItemCommand } = require("@aws-sdk/client-connectcases"); // CommonJS import
 * const client = new ConnectCasesClient(config);
 * const input = { // CreateRelatedItemRequest
 *   domainId: "STRING_VALUE", // required
 *   caseId: "STRING_VALUE", // required
 *   type: "STRING_VALUE", // required
 *   content: { // RelatedItemInputContent Union: only one key present
 *     contact: { // Contact
 *       contactArn: "STRING_VALUE", // required
 *     },
 *     comment: { // CommentContent
 *       body: "STRING_VALUE", // required
 *       contentType: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new CreateRelatedItemCommand(input);
 * const response = await client.send(command);
 * // { // CreateRelatedItemResponse
 * //   relatedItemId: "STRING_VALUE", // required
 * //   relatedItemArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateRelatedItemCommandInput - {@link CreateRelatedItemCommandInput}
 * @returns {@link CreateRelatedItemCommandOutput}
 * @see {@link CreateRelatedItemCommandInput} for command's `input` shape.
 * @see {@link CreateRelatedItemCommandOutput} for command's `response` shape.
 * @see {@link ConnectCasesClientResolvedConfig | config} for ConnectCasesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>We couldn't process your request because of an issue with the server. Try again
 *       later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We couldn't find the requested resource. Check that your resources exists and were created
 *       in the same Amazon Web Services Region as your request, and try your request again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota has been exceeded. For a list of service quotas, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html">Amazon Connect Service Quotas</a> in the <i>Amazon Connect
 *         Administrator Guide</i>.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate has been exceeded for this API. Please try again after a few minutes.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. Check the syntax and try again.</p>
 *
 * @throws {@link ConnectCasesServiceException}
 * <p>Base exception class for all service exceptions from ConnectCases service.</p>
 *
 */
export class CreateRelatedItemCommand extends $Command<
  CreateRelatedItemCommandInput,
  CreateRelatedItemCommandOutput,
  ConnectCasesClientResolvedConfig
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
  constructor(readonly input: CreateRelatedItemCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectCasesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateRelatedItemCommandInput, CreateRelatedItemCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateRelatedItemCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectCasesClient";
    const commandName = "CreateRelatedItemCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonConnectCases",
        operation: "CreateRelatedItem",
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
  private serialize(input: CreateRelatedItemCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateRelatedItemCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateRelatedItemCommandOutput> {
    return de_CreateRelatedItemCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
