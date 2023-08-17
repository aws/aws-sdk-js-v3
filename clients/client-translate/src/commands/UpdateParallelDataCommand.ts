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

import { UpdateParallelDataRequest, UpdateParallelDataResponse } from "../models/models_0";
import { de_UpdateParallelDataCommand, se_UpdateParallelDataCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TranslateClientResolvedConfig } from "../TranslateClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateParallelDataCommand}.
 */
export interface UpdateParallelDataCommandInput extends UpdateParallelDataRequest {}
/**
 * @public
 *
 * The output of {@link UpdateParallelDataCommand}.
 */
export interface UpdateParallelDataCommandOutput extends UpdateParallelDataResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates a previously created parallel data resource by importing a new input file from
 *       Amazon S3.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranslateClient, UpdateParallelDataCommand } from "@aws-sdk/client-translate"; // ES Modules import
 * // const { TranslateClient, UpdateParallelDataCommand } = require("@aws-sdk/client-translate"); // CommonJS import
 * const client = new TranslateClient(config);
 * const input = { // UpdateParallelDataRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   ParallelDataConfig: { // ParallelDataConfig
 *     S3Uri: "STRING_VALUE", // required
 *     Format: "TSV" || "CSV" || "TMX", // required
 *   },
 *   ClientToken: "STRING_VALUE", // required
 * };
 * const command = new UpdateParallelDataCommand(input);
 * const response = await client.send(command);
 * // { // UpdateParallelDataResponse
 * //   Name: "STRING_VALUE",
 * //   Status: "CREATING" || "UPDATING" || "ACTIVE" || "DELETING" || "FAILED",
 * //   LatestUpdateAttemptStatus: "CREATING" || "UPDATING" || "ACTIVE" || "DELETING" || "FAILED",
 * //   LatestUpdateAttemptAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdateParallelDataCommandInput - {@link UpdateParallelDataCommandInput}
 * @returns {@link UpdateParallelDataCommandOutput}
 * @see {@link UpdateParallelDataCommandInput} for command's `input` shape.
 * @see {@link UpdateParallelDataCommandOutput} for command's `response` shape.
 * @see {@link TranslateClientResolvedConfig | config} for TranslateClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Another modification is being made. That modification must complete before you can make
 *       your change.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict processing the request. Try your request again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value of the parameter is not valid. Review the value of the parameter you are using
 *       to correct it, and then retry your operation.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p> The request that you made is not valid. Check your request to determine why it's not
 *       valid and then retry the request. </p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The specified limit has been exceeded. Review your request and retry it with a quantity
 *       below the stated limit.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you are looking for has not been found. Review the resource you're looking
 *       for and see if a different resource will accomplish your needs before retrying the revised
 *       request.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p> You have made too many requests within a short period of time. Wait for a short time and
 *       then try your request again.</p>
 *
 * @throws {@link TranslateServiceException}
 * <p>Base exception class for all service exceptions from Translate service.</p>
 *
 */
export class UpdateParallelDataCommand extends $Command<
  UpdateParallelDataCommandInput,
  UpdateParallelDataCommandOutput,
  TranslateClientResolvedConfig
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
  constructor(readonly input: UpdateParallelDataCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TranslateClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateParallelDataCommandInput, UpdateParallelDataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateParallelDataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranslateClient";
    const commandName = "UpdateParallelDataCommand";
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
  private serialize(input: UpdateParallelDataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateParallelDataCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateParallelDataCommandOutput> {
    return de_UpdateParallelDataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
