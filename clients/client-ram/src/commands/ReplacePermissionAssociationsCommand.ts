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

import { ReplacePermissionAssociationsRequest, ReplacePermissionAssociationsResponse } from "../models/models_0";
import {
  de_ReplacePermissionAssociationsCommand,
  se_ReplacePermissionAssociationsCommand,
} from "../protocols/Aws_restJson1";
import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ReplacePermissionAssociationsCommand}.
 */
export interface ReplacePermissionAssociationsCommandInput extends ReplacePermissionAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ReplacePermissionAssociationsCommand}.
 */
export interface ReplacePermissionAssociationsCommandOutput
  extends ReplacePermissionAssociationsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Updates all resource shares that use a managed permission to a different managed
 *             permission. This operation always applies the default version of the target managed
 *             permission. You can optionally specify that the update applies to only resource shares that
 *             currently use a specified version. This enables you to update to the latest version,
 *             without changing the which managed permission is used.</p>
 *          <p>You can use this operation to update all of your resource shares to use the current
 *             default version of the permission by specifying the same value for the
 *                 <code>fromPermissionArn</code> and <code>toPermissionArn</code> parameters.</p>
 *          <p>You can use the optional <code>fromPermissionVersion</code> parameter to update only
 *             those resources that use a specified version of the managed permission to the new managed
 *             permission.</p>
 *          <important>
 *             <p>To successfully perform this operation, you must have permission to update the
 *                 resource-based policy on all affected resource types.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, ReplacePermissionAssociationsCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, ReplacePermissionAssociationsCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const input = { // ReplacePermissionAssociationsRequest
 *   fromPermissionArn: "STRING_VALUE", // required
 *   fromPermissionVersion: Number("int"),
 *   toPermissionArn: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new ReplacePermissionAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ReplacePermissionAssociationsResponse
 * //   replacePermissionAssociationsWork: { // ReplacePermissionAssociationsWork
 * //     id: "STRING_VALUE",
 * //     fromPermissionArn: "STRING_VALUE",
 * //     fromPermissionVersion: "STRING_VALUE",
 * //     toPermissionArn: "STRING_VALUE",
 * //     toPermissionVersion: "STRING_VALUE",
 * //     status: "IN_PROGRESS" || "COMPLETED" || "FAILED",
 * //     statusMessage: "STRING_VALUE",
 * //     creationTime: new Date("TIMESTAMP"),
 * //     lastUpdatedTime: new Date("TIMESTAMP"),
 * //   },
 * //   clientToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ReplacePermissionAssociationsCommandInput - {@link ReplacePermissionAssociationsCommandInput}
 * @returns {@link ReplacePermissionAssociationsCommandOutput}
 * @see {@link ReplacePermissionAssociationsCommandInput} for command's `input` shape.
 * @see {@link ReplacePermissionAssociationsCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for RAMClient's `config` shape.
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *  <p>The operation failed because the client token input parameter matched one that was
 *             used with a previous call to the operation, but at least one of the other input
 *             parameters is different from the previous call.</p>
 *
 * @throws {@link InvalidClientTokenException} (client fault)
 *  <p>The operation failed because the specified client token isn't valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The operation failed because a parameter you specified isn't valid.</p>
 *
 * @throws {@link MalformedArnException} (client fault)
 *  <p>The operation failed because the specified <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> has a format that isn't
 *             valid.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The operation failed because the requested operation isn't permitted.</p>
 *
 * @throws {@link ServerInternalException} (server fault)
 *  <p>The operation failed because the service could not respond to the request due to an
 *             internal problem. Try again later.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The operation failed because the service isn't available. Try again later.</p>
 *
 * @throws {@link UnknownResourceException} (client fault)
 *  <p>The operation failed because a specified resource couldn't be found.</p>
 *
 * @throws {@link RAMServiceException}
 * <p>Base exception class for all service exceptions from RAM service.</p>
 *
 */
export class ReplacePermissionAssociationsCommand extends $Command<
  ReplacePermissionAssociationsCommandInput,
  ReplacePermissionAssociationsCommandOutput,
  RAMClientResolvedConfig
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
  constructor(readonly input: ReplacePermissionAssociationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ReplacePermissionAssociationsCommandInput, ReplacePermissionAssociationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ReplacePermissionAssociationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RAMClient";
    const commandName = "ReplacePermissionAssociationsCommand";
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
  private serialize(input: ReplacePermissionAssociationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ReplacePermissionAssociationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ReplacePermissionAssociationsCommandOutput> {
    return de_ReplacePermissionAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
