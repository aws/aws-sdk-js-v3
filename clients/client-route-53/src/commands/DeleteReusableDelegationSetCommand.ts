// smithy-typescript generated code
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
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

import { DeleteReusableDelegationSetRequest, DeleteReusableDelegationSetResponse } from "../models/models_0";
import { de_DeleteReusableDelegationSetCommand, se_DeleteReusableDelegationSetCommand } from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteReusableDelegationSetCommand}.
 */
export interface DeleteReusableDelegationSetCommandInput extends DeleteReusableDelegationSetRequest {}
/**
 * @public
 *
 * The output of {@link DeleteReusableDelegationSetCommand}.
 */
export interface DeleteReusableDelegationSetCommandOutput
  extends DeleteReusableDelegationSetResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Deletes a reusable delegation set.</p>
 *          <important>
 *             <p>You can delete a reusable delegation set only if it isn't associated with any
 * 				hosted zones.</p>
 *          </important>
 *          <p>To verify that the reusable delegation set is not associated with any hosted zones,
 * 			submit a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetReusableDelegationSet.html">GetReusableDelegationSet</a> request and specify the ID of the reusable
 * 			delegation set that you want to delete.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, DeleteReusableDelegationSetCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, DeleteReusableDelegationSetCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const input = { // DeleteReusableDelegationSetRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new DeleteReusableDelegationSetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteReusableDelegationSetCommandInput - {@link DeleteReusableDelegationSetCommandInput}
 * @returns {@link DeleteReusableDelegationSetCommandOutput}
 * @see {@link DeleteReusableDelegationSetCommandInput} for command's `input` shape.
 * @see {@link DeleteReusableDelegationSetCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link DelegationSetInUse} (client fault)
 *  <p>The specified delegation contains associated hosted zones which must be deleted before
 * 			the reusable delegation set can be deleted.</p>
 *
 * @throws {@link DelegationSetNotReusable} (client fault)
 *  <p>A reusable delegation set with the specified ID does not exist.</p>
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link NoSuchDelegationSet} (client fault)
 *  <p>A reusable delegation set with the specified ID does not exist.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 */
export class DeleteReusableDelegationSetCommand extends $Command<
  DeleteReusableDelegationSetCommandInput,
  DeleteReusableDelegationSetCommandOutput,
  Route53ClientResolvedConfig
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
  constructor(readonly input: DeleteReusableDelegationSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteReusableDelegationSetCommandInput, DeleteReusableDelegationSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteReusableDelegationSetCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "DeleteReusableDelegationSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSDnsV20130401",
        operation: "DeleteReusableDelegationSet",
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
  private serialize(input: DeleteReusableDelegationSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteReusableDelegationSetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteReusableDelegationSetCommandOutput> {
    return de_DeleteReusableDelegationSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
