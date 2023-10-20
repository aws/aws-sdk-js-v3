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

import { DeleteOpsItemRequest, DeleteOpsItemResponse } from "../models/models_0";
import { de_DeleteOpsItemCommand, se_DeleteOpsItemCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteOpsItemCommand}.
 */
export interface DeleteOpsItemCommandInput extends DeleteOpsItemRequest {}
/**
 * @public
 *
 * The output of {@link DeleteOpsItemCommand}.
 */
export interface DeleteOpsItemCommandOutput extends DeleteOpsItemResponse, __MetadataBearer {}

/**
 * @public
 * <p>Delete an OpsItem. You must have permission in Identity and Access Management (IAM) to
 *    delete an OpsItem. </p>
 *          <important>
 *             <p>Note the following important information about this operation.</p>
 *             <ul>
 *                <li>
 *                   <p>Deleting an OpsItem is irreversible. You can't restore a deleted OpsItem.</p>
 *                </li>
 *                <li>
 *                   <p>This operation uses an <i>eventual consistency model</i>, which means the
 *       system can take a few minutes to complete this operation. If you delete an OpsItem and
 *       immediately call, for example, <a>GetOpsItem</a>, the deleted OpsItem might still
 *       appear in the response. </p>
 *                </li>
 *                <li>
 *                   <p>This operation is idempotent. The system doesn't throw an exception if you repeatedly
 *       call this operation for the same OpsItem. If the first call is successful, all additional calls
 *       return the same successful response as the first call.</p>
 *                </li>
 *                <li>
 *                   <p>This operation doesn't support cross-account calls. A delegated administrator or
 *       management account can't delete OpsItems in other accounts, even if OpsCenter has been set up for
 *       cross-account administration. For more information about cross-account administration, see
 *        <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-setting-up-cross-account.html">Setting up
 *        OpsCenter to centrally manage OpsItems across accounts</a> in the <i>Systems Manager User Guide</i>.</p>
 *                </li>
 *             </ul>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeleteOpsItemCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DeleteOpsItemCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // DeleteOpsItemRequest
 *   OpsItemId: "STRING_VALUE", // required
 * };
 * const command = new DeleteOpsItemCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteOpsItemCommandInput - {@link DeleteOpsItemCommandInput}
 * @returns {@link DeleteOpsItemCommandOutput}
 * @see {@link DeleteOpsItemCommandInput} for command's `input` shape.
 * @see {@link DeleteOpsItemCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link OpsItemInvalidParameterException} (client fault)
 *  <p>A specified parameter argument isn't valid. Verify the available arguments and try
 *    again.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export class DeleteOpsItemCommand extends $Command<
  DeleteOpsItemCommandInput,
  DeleteOpsItemCommandOutput,
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
  constructor(readonly input: DeleteOpsItemCommandInput) {
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
  ): Handler<DeleteOpsItemCommandInput, DeleteOpsItemCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteOpsItemCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "DeleteOpsItemCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonSSM",
        operation: "DeleteOpsItem",
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
  private serialize(input: DeleteOpsItemCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteOpsItemCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteOpsItemCommandOutput> {
    return de_DeleteOpsItemCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
