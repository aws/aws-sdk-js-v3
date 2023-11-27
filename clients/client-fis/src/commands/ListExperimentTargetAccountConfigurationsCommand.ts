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

import { FisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FisClient";
import {
  ListExperimentTargetAccountConfigurationsRequest,
  ListExperimentTargetAccountConfigurationsResponse,
} from "../models/models_0";
import {
  de_ListExperimentTargetAccountConfigurationsCommand,
  se_ListExperimentTargetAccountConfigurationsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListExperimentTargetAccountConfigurationsCommand}.
 */
export interface ListExperimentTargetAccountConfigurationsCommandInput
  extends ListExperimentTargetAccountConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListExperimentTargetAccountConfigurationsCommand}.
 */
export interface ListExperimentTargetAccountConfigurationsCommandOutput
  extends ListExperimentTargetAccountConfigurationsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Lists the target account configurations of the specified experiment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FisClient, ListExperimentTargetAccountConfigurationsCommand } from "@aws-sdk/client-fis"; // ES Modules import
 * // const { FisClient, ListExperimentTargetAccountConfigurationsCommand } = require("@aws-sdk/client-fis"); // CommonJS import
 * const client = new FisClient(config);
 * const input = { // ListExperimentTargetAccountConfigurationsRequest
 *   experimentId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListExperimentTargetAccountConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListExperimentTargetAccountConfigurationsResponse
 * //   targetAccountConfigurations: [ // ExperimentTargetAccountConfigurationList
 * //     { // ExperimentTargetAccountConfigurationSummary
 * //       roleArn: "STRING_VALUE",
 * //       accountId: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListExperimentTargetAccountConfigurationsCommandInput - {@link ListExperimentTargetAccountConfigurationsCommandInput}
 * @returns {@link ListExperimentTargetAccountConfigurationsCommandOutput}
 * @see {@link ListExperimentTargetAccountConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListExperimentTargetAccountConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link FisClientResolvedConfig | config} for FisClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The specified input is not valid, or fails to satisfy the constraints for the request.</p>
 *
 * @throws {@link FisServiceException}
 * <p>Base exception class for all service exceptions from Fis service.</p>
 *
 */
export class ListExperimentTargetAccountConfigurationsCommand extends $Command<
  ListExperimentTargetAccountConfigurationsCommandInput,
  ListExperimentTargetAccountConfigurationsCommandOutput,
  FisClientResolvedConfig
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
  constructor(readonly input: ListExperimentTargetAccountConfigurationsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FisClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListExperimentTargetAccountConfigurationsCommandInput,
    ListExperimentTargetAccountConfigurationsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        ListExperimentTargetAccountConfigurationsCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FisClient";
    const commandName = "ListExperimentTargetAccountConfigurationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "FaultInjectionSimulator",
        operation: "ListExperimentTargetAccountConfigurations",
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
    input: ListExperimentTargetAccountConfigurationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListExperimentTargetAccountConfigurationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListExperimentTargetAccountConfigurationsCommandOutput> {
    return de_ListExperimentTargetAccountConfigurationsCommand(output, context);
  }
}
