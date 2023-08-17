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

import { CreateLongTermPricingRequest, CreateLongTermPricingResult } from "../models/models_0";
import { de_CreateLongTermPricingCommand, se_CreateLongTermPricingCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateLongTermPricingCommand}.
 */
export interface CreateLongTermPricingCommandInput extends CreateLongTermPricingRequest {}
/**
 * @public
 *
 * The output of {@link CreateLongTermPricingCommand}.
 */
export interface CreateLongTermPricingCommandOutput extends CreateLongTermPricingResult, __MetadataBearer {}

/**
 * @public
 * <p>Creates a job with the long-term usage option for a device. The long-term usage is a
 *       1-year or 3-year long-term pricing type for the device. You are billed upfront, and Amazon Web Services provides discounts for long-term pricing.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, CreateLongTermPricingCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, CreateLongTermPricingCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const input = { // CreateLongTermPricingRequest
 *   LongTermPricingType: "OneYear" || "ThreeYear" || "OneMonth", // required
 *   IsLongTermPricingAutoRenew: true || false,
 *   SnowballType: "STANDARD" || "EDGE" || "EDGE_C" || "EDGE_CG" || "EDGE_S" || "SNC1_HDD" || "SNC1_SSD" || "V3_5C" || "V3_5S" || "RACK_5U_C", // required
 * };
 * const command = new CreateLongTermPricingCommand(input);
 * const response = await client.send(command);
 * // { // CreateLongTermPricingResult
 * //   LongTermPricingId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateLongTermPricingCommandInput - {@link CreateLongTermPricingCommandInput}
 * @returns {@link CreateLongTermPricingCommandOutput}
 * @see {@link CreateLongTermPricingCommandInput} for command's `input` shape.
 * @see {@link CreateLongTermPricingCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for SnowballClient's `config` shape.
 *
 * @throws {@link InvalidResourceException} (client fault)
 *  <p>The specified resource can't be found. Check the information you provided in your last
 *       request, and try again.</p>
 *
 * @throws {@link SnowballServiceException}
 * <p>Base exception class for all service exceptions from Snowball service.</p>
 *
 */
export class CreateLongTermPricingCommand extends $Command<
  CreateLongTermPricingCommandInput,
  CreateLongTermPricingCommandOutput,
  SnowballClientResolvedConfig
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
  constructor(readonly input: CreateLongTermPricingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SnowballClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateLongTermPricingCommandInput, CreateLongTermPricingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateLongTermPricingCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SnowballClient";
    const commandName = "CreateLongTermPricingCommand";
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
  private serialize(input: CreateLongTermPricingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateLongTermPricingCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateLongTermPricingCommandOutput> {
    return de_CreateLongTermPricingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
