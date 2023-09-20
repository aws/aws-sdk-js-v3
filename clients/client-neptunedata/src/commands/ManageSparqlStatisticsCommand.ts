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

import { ManageSparqlStatisticsInput, ManageSparqlStatisticsOutput } from "../models/models_0";
import { NeptunedataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptunedataClient";
import { de_ManageSparqlStatisticsCommand, se_ManageSparqlStatisticsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ManageSparqlStatisticsCommand}.
 */
export interface ManageSparqlStatisticsCommandInput extends ManageSparqlStatisticsInput {}
/**
 * @public
 *
 * The output of {@link ManageSparqlStatisticsCommand}.
 */
export interface ManageSparqlStatisticsCommandOutput extends ManageSparqlStatisticsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Manages the generation and use of RDF graph statistics.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptunedataClient, ManageSparqlStatisticsCommand } from "@aws-sdk/client-neptunedata"; // ES Modules import
 * // const { NeptunedataClient, ManageSparqlStatisticsCommand } = require("@aws-sdk/client-neptunedata"); // CommonJS import
 * const client = new NeptunedataClient(config);
 * const input = { // ManageSparqlStatisticsInput
 *   mode: "disableAutoCompute" || "enableAutoCompute" || "refresh",
 * };
 * const command = new ManageSparqlStatisticsCommand(input);
 * const response = await client.send(command);
 * // { // ManageSparqlStatisticsOutput
 * //   status: "STRING_VALUE", // required
 * //   payload: { // RefreshStatisticsIdMap
 * //     statisticsId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ManageSparqlStatisticsCommandInput - {@link ManageSparqlStatisticsCommandInput}
 * @returns {@link ManageSparqlStatisticsCommandOutput}
 * @see {@link ManageSparqlStatisticsCommandInput} for command's `input` shape.
 * @see {@link ManageSparqlStatisticsCommandOutput} for command's `response` shape.
 * @see {@link NeptunedataClientResolvedConfig | config} for NeptunedataClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Raised in case of an authentication or authorization failure.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Raised when a request is submitted that cannot be processed.</p>
 *
 * @throws {@link ClientTimeoutException} (client fault)
 *  <p>Raised when a request timed out in the client.</p>
 *
 * @throws {@link ConstraintViolationException} (client fault)
 *  <p>Raised when a value in a request field did not satisfy required constraints.</p>
 *
 * @throws {@link IllegalArgumentException} (client fault)
 *  <p>Raised when an argument in a request is not supported.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>Raised when an argument in a request has an invalid value.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Raised when a parameter value is not valid.</p>
 *
 * @throws {@link MissingParameterException} (client fault)
 *  <p>Raised when a required parameter is missing.</p>
 *
 * @throws {@link PreconditionsFailedException} (client fault)
 *  <p>Raised when a precondition for processing a request is not satisfied.</p>
 *
 * @throws {@link ReadOnlyViolationException} (client fault)
 *  <p>Raised when a request attempts to write to a read-only resource.</p>
 *
 * @throws {@link StatisticsNotAvailableException} (client fault)
 *  <p>Raised when statistics needed to satisfy a request are not available.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Raised when the number of requests being processed exceeds the limit.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>Raised when a request attempts to initiate an operation that is not supported.</p>
 *
 * @throws {@link NeptunedataServiceException}
 * <p>Base exception class for all service exceptions from Neptunedata service.</p>
 *
 */
export class ManageSparqlStatisticsCommand extends $Command<
  ManageSparqlStatisticsCommandInput,
  ManageSparqlStatisticsCommandOutput,
  NeptunedataClientResolvedConfig
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
  constructor(readonly input: ManageSparqlStatisticsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NeptunedataClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ManageSparqlStatisticsCommandInput, ManageSparqlStatisticsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ManageSparqlStatisticsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NeptunedataClient";
    const commandName = "ManageSparqlStatisticsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonNeptuneDataplane",
        operation: "ManageSparqlStatistics",
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
  private serialize(input: ManageSparqlStatisticsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ManageSparqlStatisticsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ManageSparqlStatisticsCommandOutput> {
    return de_ManageSparqlStatisticsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
