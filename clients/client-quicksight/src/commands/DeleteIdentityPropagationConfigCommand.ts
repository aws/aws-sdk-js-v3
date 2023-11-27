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

import { DeleteIdentityPropagationConfigRequest, DeleteIdentityPropagationConfigResponse } from "../models/models_3";
import {
  de_DeleteIdentityPropagationConfigCommand,
  se_DeleteIdentityPropagationConfigCommand,
} from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteIdentityPropagationConfigCommand}.
 */
export interface DeleteIdentityPropagationConfigCommandInput extends DeleteIdentityPropagationConfigRequest {}
/**
 * @public
 *
 * The output of {@link DeleteIdentityPropagationConfigCommand}.
 */
export interface DeleteIdentityPropagationConfigCommandOutput
  extends DeleteIdentityPropagationConfigResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Deletes all access scopes and authorized targets that are associated with a service from the Amazon QuickSight IAM Identity Center application.</p>
 *          <p>This operation is only supported for Amazon QuickSight accounts that use IAM Identity Center.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DeleteIdentityPropagationConfigCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DeleteIdentityPropagationConfigCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // DeleteIdentityPropagationConfigRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   Service: "REDSHIFT", // required
 * };
 * const command = new DeleteIdentityPropagationConfigCommand(input);
 * const response = await client.send(command);
 * // { // DeleteIdentityPropagationConfigResponse
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param DeleteIdentityPropagationConfigCommandInput - {@link DeleteIdentityPropagationConfigCommandInput}
 * @returns {@link DeleteIdentityPropagationConfigCommandOutput}
 * @see {@link DeleteIdentityPropagationConfigCommandInput} for command's `input` shape.
 * @see {@link DeleteIdentityPropagationConfigCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 */
export class DeleteIdentityPropagationConfigCommand extends $Command<
  DeleteIdentityPropagationConfigCommandInput,
  DeleteIdentityPropagationConfigCommandOutput,
  QuickSightClientResolvedConfig
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
  constructor(readonly input: DeleteIdentityPropagationConfigCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteIdentityPropagationConfigCommandInput, DeleteIdentityPropagationConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteIdentityPropagationConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "DeleteIdentityPropagationConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "QuickSight_20180401",
        operation: "DeleteIdentityPropagationConfig",
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
    input: DeleteIdentityPropagationConfigCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DeleteIdentityPropagationConfigCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteIdentityPropagationConfigCommandOutput> {
    return de_DeleteIdentityPropagationConfigCommand(output, context);
  }
}
