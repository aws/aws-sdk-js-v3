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
import { ListExperimentResolvedTargetsRequest, ListExperimentResolvedTargetsResponse } from "../models/models_0";
import {
  de_ListExperimentResolvedTargetsCommand,
  se_ListExperimentResolvedTargetsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListExperimentResolvedTargetsCommand}.
 */
export interface ListExperimentResolvedTargetsCommandInput extends ListExperimentResolvedTargetsRequest {}
/**
 * @public
 *
 * The output of {@link ListExperimentResolvedTargetsCommand}.
 */
export interface ListExperimentResolvedTargetsCommandOutput
  extends ListExperimentResolvedTargetsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Lists the resolved targets information of the specified experiment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FisClient, ListExperimentResolvedTargetsCommand } from "@aws-sdk/client-fis"; // ES Modules import
 * // const { FisClient, ListExperimentResolvedTargetsCommand } = require("@aws-sdk/client-fis"); // CommonJS import
 * const client = new FisClient(config);
 * const input = { // ListExperimentResolvedTargetsRequest
 *   experimentId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   targetName: "STRING_VALUE",
 * };
 * const command = new ListExperimentResolvedTargetsCommand(input);
 * const response = await client.send(command);
 * // { // ListExperimentResolvedTargetsResponse
 * //   resolvedTargets: [ // ResolvedTargetList
 * //     { // ResolvedTarget
 * //       resourceType: "STRING_VALUE",
 * //       targetName: "STRING_VALUE",
 * //       targetInformation: { // TargetInformationMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListExperimentResolvedTargetsCommandInput - {@link ListExperimentResolvedTargetsCommandInput}
 * @returns {@link ListExperimentResolvedTargetsCommandOutput}
 * @see {@link ListExperimentResolvedTargetsCommandInput} for command's `input` shape.
 * @see {@link ListExperimentResolvedTargetsCommandOutput} for command's `response` shape.
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
export class ListExperimentResolvedTargetsCommand extends $Command<
  ListExperimentResolvedTargetsCommandInput,
  ListExperimentResolvedTargetsCommandOutput,
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
  constructor(readonly input: ListExperimentResolvedTargetsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FisClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListExperimentResolvedTargetsCommandInput, ListExperimentResolvedTargetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListExperimentResolvedTargetsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FisClient";
    const commandName = "ListExperimentResolvedTargetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "FaultInjectionSimulator",
        operation: "ListExperimentResolvedTargets",
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
  private serialize(input: ListExperimentResolvedTargetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListExperimentResolvedTargetsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListExperimentResolvedTargetsCommandOutput> {
    return de_ListExperimentResolvedTargetsCommand(output, context);
  }
}
