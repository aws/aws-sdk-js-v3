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

import { DeleteLensInput } from "../models/models_0";
import { de_DeleteLensCommand, se_DeleteLensCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteLensCommand}.
 */
export interface DeleteLensCommandInput extends DeleteLensInput {}
/**
 * @public
 *
 * The output of {@link DeleteLensCommand}.
 */
export interface DeleteLensCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Delete an existing lens.</p>
 *          <p>Only the owner of a lens can delete it.  After the lens is deleted,  Amazon Web Services accounts and users
 *               that you shared the lens with can continue to use it, but they will no longer be able to apply it to new workloads.
 *         </p>
 *          <note>
 *             <p>
 *                <b>Disclaimer</b>
 *             </p>
 *             <p>By sharing your custom lenses with other Amazon Web Services accounts,
 *                 you acknowledge that Amazon Web Services will make your custom lenses available to those
 *                 other accounts. Those other accounts may continue to access and use your
 *                 shared custom lenses even if you delete the custom lenses
 *                 from your own Amazon Web Services account or terminate
 *                 your Amazon Web Services account.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, DeleteLensCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, DeleteLensCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const input = { // DeleteLensInput
 *   LensAlias: "STRING_VALUE", // required
 *   ClientRequestToken: "STRING_VALUE", // required
 *   LensStatus: "ALL" || "DRAFT" || "PUBLISHED", // required
 * };
 * const command = new DeleteLensCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteLensCommandInput - {@link DeleteLensCommandInput}
 * @returns {@link DeleteLensCommandOutput}
 * @see {@link DeleteLensCommandInput} for command's `input` shape.
 * @see {@link DeleteLensCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The resource has already been processed, was deleted, or is too large.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is a problem with the Well-Architected Tool API service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The user input is not valid.</p>
 *
 * @throws {@link WellArchitectedServiceException}
 * <p>Base exception class for all service exceptions from WellArchitected service.</p>
 *
 */
export class DeleteLensCommand extends $Command<
  DeleteLensCommandInput,
  DeleteLensCommandOutput,
  WellArchitectedClientResolvedConfig
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
  constructor(readonly input: DeleteLensCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WellArchitectedClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteLensCommandInput, DeleteLensCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteLensCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WellArchitectedClient";
    const commandName = "DeleteLensCommand";
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
  private serialize(input: DeleteLensCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteLensCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteLensCommandOutput> {
    return de_DeleteLensCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
