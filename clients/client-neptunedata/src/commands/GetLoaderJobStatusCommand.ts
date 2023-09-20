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

import { GetLoaderJobStatusInput, GetLoaderJobStatusOutput } from "../models/models_0";
import { NeptunedataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptunedataClient";
import { de_GetLoaderJobStatusCommand, se_GetLoaderJobStatusCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetLoaderJobStatusCommand}.
 */
export interface GetLoaderJobStatusCommandInput extends GetLoaderJobStatusInput {}
/**
 * @public
 *
 * The output of {@link GetLoaderJobStatusCommand}.
 */
export interface GetLoaderJobStatusCommandOutput extends GetLoaderJobStatusOutput, __MetadataBearer {}

/**
 * @public
 * <p>Gets status information about a specified load job.
 *       Neptune keeps track of the most recent 1,024 bulk load jobs,
 *       and stores the last 10,000 error details per job.</p>
 *          <p>See <a href="https://docs.aws.amazon.com/neptune/latest/userguide/load-api-reference-status.htm">Neptune
 *       Loader Get-Status API</a> for more information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptunedataClient, GetLoaderJobStatusCommand } from "@aws-sdk/client-neptunedata"; // ES Modules import
 * // const { NeptunedataClient, GetLoaderJobStatusCommand } = require("@aws-sdk/client-neptunedata"); // CommonJS import
 * const client = new NeptunedataClient(config);
 * const input = { // GetLoaderJobStatusInput
 *   loadId: "STRING_VALUE", // required
 *   details: true || false,
 *   errors: true || false,
 *   page: Number("int"),
 *   errorsPerPage: Number("int"),
 * };
 * const command = new GetLoaderJobStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetLoaderJobStatusOutput
 * //   status: "STRING_VALUE", // required
 * //   payload: "DOCUMENT_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetLoaderJobStatusCommandInput - {@link GetLoaderJobStatusCommandInput}
 * @returns {@link GetLoaderJobStatusCommandOutput}
 * @see {@link GetLoaderJobStatusCommandInput} for command's `input` shape.
 * @see {@link GetLoaderJobStatusCommandOutput} for command's `response` shape.
 * @see {@link NeptunedataClientResolvedConfig | config} for NeptunedataClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Raised when a request is submitted that cannot be processed.</p>
 *
 * @throws {@link BulkLoadIdNotFoundException} (client fault)
 *  <p>Raised when a specified bulk-load job ID cannot be found.</p>
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
 * @throws {@link InternalFailureException} (server fault)
 *  <p>Raised when the processing of the request failed unexpectedly.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>Raised when an argument in a request has an invalid value.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Raised when a parameter value is not valid.</p>
 *
 * @throws {@link LoadUrlAccessDeniedException} (client fault)
 *  <p>Raised when access is denied to a specified load URL.</p>
 *
 * @throws {@link MissingParameterException} (client fault)
 *  <p>Raised when a required parameter is missing.</p>
 *
 * @throws {@link PreconditionsFailedException} (client fault)
 *  <p>Raised when a precondition for processing a request is not satisfied.</p>
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
export class GetLoaderJobStatusCommand extends $Command<
  GetLoaderJobStatusCommandInput,
  GetLoaderJobStatusCommandOutput,
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
  constructor(readonly input: GetLoaderJobStatusCommandInput) {
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
  ): Handler<GetLoaderJobStatusCommandInput, GetLoaderJobStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetLoaderJobStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NeptunedataClient";
    const commandName = "GetLoaderJobStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonNeptuneDataplane",
        operation: "GetLoaderJobStatus",
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
  private serialize(input: GetLoaderJobStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetLoaderJobStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetLoaderJobStatusCommandOutput> {
    return de_GetLoaderJobStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
