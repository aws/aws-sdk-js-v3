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

import { BillingconductorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BillingconductorClient";
import {
  UpdatePricingPlanInput,
  UpdatePricingPlanInputFilterSensitiveLog,
  UpdatePricingPlanOutput,
  UpdatePricingPlanOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_UpdatePricingPlanCommand, se_UpdatePricingPlanCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdatePricingPlanCommand}.
 */
export interface UpdatePricingPlanCommandInput extends UpdatePricingPlanInput {}
/**
 * @public
 *
 * The output of {@link UpdatePricingPlanCommand}.
 */
export interface UpdatePricingPlanCommandOutput extends UpdatePricingPlanOutput, __MetadataBearer {}

/**
 * @public
 * <p>This updates an existing pricing plan.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingconductorClient, UpdatePricingPlanCommand } from "@aws-sdk/client-billingconductor"; // ES Modules import
 * // const { BillingconductorClient, UpdatePricingPlanCommand } = require("@aws-sdk/client-billingconductor"); // CommonJS import
 * const client = new BillingconductorClient(config);
 * const input = { // UpdatePricingPlanInput
 *   Arn: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 * };
 * const command = new UpdatePricingPlanCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePricingPlanOutput
 * //   Arn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   Size: Number("long"),
 * //   LastModifiedTime: Number("long"),
 * // };
 *
 * ```
 *
 * @param UpdatePricingPlanCommandInput - {@link UpdatePricingPlanCommandInput}
 * @returns {@link UpdatePricingPlanCommandOutput}
 * @see {@link UpdatePricingPlanCommandInput} for command's `input` shape.
 * @see {@link UpdatePricingPlanCommandOutput} for command's `response` shape.
 * @see {@link BillingconductorClientResolvedConfig | config} for BillingconductorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.
 *     </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You can cause an inconsistent state by updating or deleting a resource.
 *     </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing a request.
 *     </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that doesn't exist.
 *     </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.
 *     </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input doesn't match with the constraints specified by Amazon Web Services.</p>
 *
 * @throws {@link BillingconductorServiceException}
 * <p>Base exception class for all service exceptions from Billingconductor service.</p>
 *
 */
export class UpdatePricingPlanCommand extends $Command<
  UpdatePricingPlanCommandInput,
  UpdatePricingPlanCommandOutput,
  BillingconductorClientResolvedConfig
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
  constructor(readonly input: UpdatePricingPlanCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BillingconductorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdatePricingPlanCommandInput, UpdatePricingPlanCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdatePricingPlanCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BillingconductorClient";
    const commandName = "UpdatePricingPlanCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdatePricingPlanInputFilterSensitiveLog,
      outputFilterSensitiveLog: UpdatePricingPlanOutputFilterSensitiveLog,
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
  private serialize(input: UpdatePricingPlanCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdatePricingPlanCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdatePricingPlanCommandOutput> {
    return de_UpdatePricingPlanCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
