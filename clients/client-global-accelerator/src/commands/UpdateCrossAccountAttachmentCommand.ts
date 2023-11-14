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
  GlobalAcceleratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlobalAcceleratorClient";
import { UpdateCrossAccountAttachmentRequest, UpdateCrossAccountAttachmentResponse } from "../models/models_0";
import {
  de_UpdateCrossAccountAttachmentCommand,
  se_UpdateCrossAccountAttachmentCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateCrossAccountAttachmentCommand}.
 */
export interface UpdateCrossAccountAttachmentCommandInput extends UpdateCrossAccountAttachmentRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCrossAccountAttachmentCommand}.
 */
export interface UpdateCrossAccountAttachmentCommandOutput
  extends UpdateCrossAccountAttachmentResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Update a cross-account attachment to add or remove principals or resources. When you update
 * 			an attachment to remove a principal (account ID or accelerator) or a resource, Global Accelerator
 * 			revokes the permission for specific resources by doing the following:</p>
 *          <ul>
 *             <li>
 *                <p>If the principal is an account ID, Global Accelerator reviews every accelerator in the account
 * 				and removes cross-account endpoints from all accelerators.</p>
 *             </li>
 *             <li>
 *                <p>If the principal is an accelerator, Global Accelerator reviews just that accelerator
 * 				and removes cross-account endpoints from it.</p>
 *             </li>
 *          </ul>
 *          <p>If there are overlapping permissions provided by multiple cross-account attachments,
 * 			Global Accelerator only removes endpoints if there are no current cross-account attachments that provide
 * 			access permission. For example, if you delete a cross-account attachment that lists an
 * 			accelerator as a principal, but another cross-account attachment includes the account ID
 * 			that owns that accelerator, endpoints will not be removed from the accelerator.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, UpdateCrossAccountAttachmentCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, UpdateCrossAccountAttachmentCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // UpdateCrossAccountAttachmentRequest
 *   AttachmentArn: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   AddPrincipals: [ // Principals
 *     "STRING_VALUE",
 *   ],
 *   RemovePrincipals: [
 *     "STRING_VALUE",
 *   ],
 *   AddResources: [ // Resources
 *     { // Resource
 *       EndpointId: "STRING_VALUE", // required
 *       Region: "STRING_VALUE",
 *     },
 *   ],
 *   RemoveResources: [
 *     {
 *       EndpointId: "STRING_VALUE", // required
 *       Region: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new UpdateCrossAccountAttachmentCommand(input);
 * const response = await client.send(command);
 * // { // UpdateCrossAccountAttachmentResponse
 * //   CrossAccountAttachment: { // Attachment
 * //     AttachmentArn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Principals: [ // Principals
 * //       "STRING_VALUE",
 * //     ],
 * //     Resources: [ // Resources
 * //       { // Resource
 * //         EndpointId: "STRING_VALUE", // required
 * //         Region: "STRING_VALUE",
 * //       },
 * //     ],
 * //     LastModifiedTime: new Date("TIMESTAMP"),
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateCrossAccountAttachmentCommandInput - {@link UpdateCrossAccountAttachmentCommandInput}
 * @returns {@link UpdateCrossAccountAttachmentCommandOutput}
 * @see {@link UpdateCrossAccountAttachmentCommandInput} for command's `input` shape.
 * @see {@link UpdateCrossAccountAttachmentCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access permission.</p>
 *
 * @throws {@link AttachmentNotFoundException} (client fault)
 *  <p>No cross-account attachment was found.</p>
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>There was an internal error for Global Accelerator.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>An argument that you specified is invalid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>Processing your request would cause you to exceed an Global Accelerator limit.</p>
 *
 * @throws {@link TransactionInProgressException} (client fault)
 *  <p>There's already a transaction in progress. Another transaction can't be processed.</p>
 *
 * @throws {@link GlobalAcceleratorServiceException}
 * <p>Base exception class for all service exceptions from GlobalAccelerator service.</p>
 *
 */
export class UpdateCrossAccountAttachmentCommand extends $Command<
  UpdateCrossAccountAttachmentCommandInput,
  UpdateCrossAccountAttachmentCommandOutput,
  GlobalAcceleratorClientResolvedConfig
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
  constructor(readonly input: UpdateCrossAccountAttachmentCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlobalAcceleratorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateCrossAccountAttachmentCommandInput, UpdateCrossAccountAttachmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateCrossAccountAttachmentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlobalAcceleratorClient";
    const commandName = "UpdateCrossAccountAttachmentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "GlobalAccelerator_V20180706",
        operation: "UpdateCrossAccountAttachment",
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
  private serialize(input: UpdateCrossAccountAttachmentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateCrossAccountAttachmentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateCrossAccountAttachmentCommandOutput> {
    return de_UpdateCrossAccountAttachmentCommand(output, context);
  }
}
