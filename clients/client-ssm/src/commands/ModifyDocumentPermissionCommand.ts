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

import { ModifyDocumentPermissionRequest, ModifyDocumentPermissionResponse } from "../models/models_1";
import { de_ModifyDocumentPermissionCommand, se_ModifyDocumentPermissionCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyDocumentPermissionCommand}.
 */
export interface ModifyDocumentPermissionCommandInput extends ModifyDocumentPermissionRequest {}
/**
 * @public
 *
 * The output of {@link ModifyDocumentPermissionCommand}.
 */
export interface ModifyDocumentPermissionCommandOutput extends ModifyDocumentPermissionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Shares a Amazon Web Services Systems Manager document (SSM document)publicly or privately. If you share a document
 *    privately, you must specify the Amazon Web Services user IDs for those people who can use the document. If
 *    you share a document publicly, you must specify <i>All</i> as the account
 *    ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ModifyDocumentPermissionCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ModifyDocumentPermissionCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // ModifyDocumentPermissionRequest
 *   Name: "STRING_VALUE", // required
 *   PermissionType: "Share", // required
 *   AccountIdsToAdd: [ // AccountIdList
 *     "STRING_VALUE",
 *   ],
 *   AccountIdsToRemove: [
 *     "STRING_VALUE",
 *   ],
 *   SharedDocumentVersion: "STRING_VALUE",
 * };
 * const command = new ModifyDocumentPermissionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ModifyDocumentPermissionCommandInput - {@link ModifyDocumentPermissionCommandInput}
 * @returns {@link ModifyDocumentPermissionCommandOutput}
 * @see {@link ModifyDocumentPermissionCommandInput} for command's `input` shape.
 * @see {@link ModifyDocumentPermissionCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link DocumentLimitExceeded} (client fault)
 *  <p>You can have at most 500 active SSM documents.</p>
 *
 * @throws {@link DocumentPermissionLimit} (client fault)
 *  <p>The document can't be shared with more Amazon Web Services accounts. You can specify a maximum of 20
 *    accounts per API operation to share a private document.</p>
 *          <p>By default, you can share a private document with a maximum of 1,000 accounts and publicly
 *    share up to five documents.</p>
 *          <p>If you need to increase the quota for privately or publicly shared Systems Manager documents, contact
 *    Amazon Web Services Support.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidDocument} (client fault)
 *  <p>The specified SSM document doesn't exist.</p>
 *
 * @throws {@link InvalidPermissionType} (client fault)
 *  <p>The permission type isn't supported. <i>Share</i> is the only supported
 *    permission type.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export class ModifyDocumentPermissionCommand extends $Command<
  ModifyDocumentPermissionCommandInput,
  ModifyDocumentPermissionCommandOutput,
  SSMClientResolvedConfig
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
  constructor(readonly input: ModifyDocumentPermissionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyDocumentPermissionCommandInput, ModifyDocumentPermissionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyDocumentPermissionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "ModifyDocumentPermissionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonSSM",
        operation: "ModifyDocumentPermission",
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
  private serialize(input: ModifyDocumentPermissionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifyDocumentPermissionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyDocumentPermissionCommandOutput> {
    return de_ModifyDocumentPermissionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
