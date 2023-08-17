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

import { CreateSavingsPlanRequest, CreateSavingsPlanResponse } from "../models/models_0";
import { de_CreateSavingsPlanCommand, se_CreateSavingsPlanCommand } from "../protocols/Aws_restJson1";
import { SavingsplansClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SavingsplansClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateSavingsPlanCommand}.
 */
export interface CreateSavingsPlanCommandInput extends CreateSavingsPlanRequest {}
/**
 * @public
 *
 * The output of {@link CreateSavingsPlanCommand}.
 */
export interface CreateSavingsPlanCommandOutput extends CreateSavingsPlanResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a Savings Plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SavingsplansClient, CreateSavingsPlanCommand } from "@aws-sdk/client-savingsplans"; // ES Modules import
 * // const { SavingsplansClient, CreateSavingsPlanCommand } = require("@aws-sdk/client-savingsplans"); // CommonJS import
 * const client = new SavingsplansClient(config);
 * const input = { // CreateSavingsPlanRequest
 *   savingsPlanOfferingId: "STRING_VALUE", // required
 *   commitment: "STRING_VALUE", // required
 *   upfrontPaymentAmount: "STRING_VALUE",
 *   purchaseTime: new Date("TIMESTAMP"),
 *   clientToken: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateSavingsPlanCommand(input);
 * const response = await client.send(command);
 * // { // CreateSavingsPlanResponse
 * //   savingsPlanId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateSavingsPlanCommandInput - {@link CreateSavingsPlanCommandInput}
 * @returns {@link CreateSavingsPlanCommandOutput}
 * @see {@link CreateSavingsPlanCommandInput} for command's `input` shape.
 * @see {@link CreateSavingsPlanCommandOutput} for command's `response` shape.
 * @see {@link SavingsplansClientResolvedConfig | config} for SavingsplansClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>A service quota has been exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the input parameters is not valid.</p>
 *
 * @throws {@link SavingsplansServiceException}
 * <p>Base exception class for all service exceptions from Savingsplans service.</p>
 *
 */
export class CreateSavingsPlanCommand extends $Command<
  CreateSavingsPlanCommandInput,
  CreateSavingsPlanCommandOutput,
  SavingsplansClientResolvedConfig
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
  constructor(readonly input: CreateSavingsPlanCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SavingsplansClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateSavingsPlanCommandInput, CreateSavingsPlanCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateSavingsPlanCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SavingsplansClient";
    const commandName = "CreateSavingsPlanCommand";
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
  private serialize(input: CreateSavingsPlanCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateSavingsPlanCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSavingsPlanCommandOutput> {
    return de_CreateSavingsPlanCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
