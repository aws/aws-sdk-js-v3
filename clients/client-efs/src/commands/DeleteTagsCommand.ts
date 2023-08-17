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

import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import { DeleteTagsRequest } from "../models/models_0";
import { de_DeleteTagsCommand, se_DeleteTagsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteTagsCommand}.
 */
export interface DeleteTagsCommandInput extends DeleteTagsRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTagsCommand}.
 */
export interface DeleteTagsCommandOutput extends __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <note>
 *             <p>DEPRECATED - <code>DeleteTags</code> is deprecated and not maintained. To remove tags from EFS
 *         resources, use the  API action.</p>
 *          </note>
 *          <p>Deletes the specified tags from a file system. If the <code>DeleteTags</code> request
 *       includes a tag key that doesn't exist, Amazon EFS ignores it and doesn't cause an
 *       error. For more information about tags and related restrictions, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Tag restrictions</a> in the
 *         <i>Billing and Cost Management User Guide</i>.</p>
 *          <p>This operation requires permissions for the <code>elasticfilesystem:DeleteTags</code>
 *       action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, DeleteTagsCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, DeleteTagsCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const input = { // DeleteTagsRequest
 *   FileSystemId: "STRING_VALUE", // required
 *   TagKeys: [ // TagKeys // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DeleteTagsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTagsCommandInput - {@link DeleteTagsCommandInput}
 * @returns {@link DeleteTagsCommandOutput}
 * @see {@link DeleteTagsCommandInput} for command's `input` shape.
 * @see {@link DeleteTagsCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for EFSClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>Returned if the request is malformed or contains an error such as an invalid
 *             parameter value or a missing required parameter.</p>
 *
 * @throws {@link FileSystemNotFound} (client fault)
 *  <p>Returned if the specified <code>FileSystemId</code> value doesn't exist in the
 *             requester's Amazon Web Services account.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Returned if an error occurred on the server side.</p>
 *
 * @throws {@link EFSServiceException}
 * <p>Base exception class for all service exceptions from EFS service.</p>
 *
 * @example To delete tags for an EFS file system
 * ```javascript
 * // This operation deletes tags for an EFS file system.
 * const input = {
 *   "FileSystemId": "fs-01234567",
 *   "TagKeys": [
 *     "Name"
 *   ]
 * };
 * const command = new DeleteTagsCommand(input);
 * await client.send(command);
 * // example id: to-delete-tags-for-an-efs-file-system-1481848189061
 * ```
 *
 */
export class DeleteTagsCommand extends $Command<
  DeleteTagsCommandInput,
  DeleteTagsCommandOutput,
  EFSClientResolvedConfig
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
  constructor(readonly input: DeleteTagsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EFSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteTagsCommandInput, DeleteTagsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteTagsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EFSClient";
    const commandName = "DeleteTagsCommand";
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
  private serialize(input: DeleteTagsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteTagsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteTagsCommandOutput> {
    return de_DeleteTagsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
