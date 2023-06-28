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
  SdkStream as __SdkStream,
  SdkStreamSerdeContext as __SdkStreamSerdeContext,
  SerdeContext as __SerdeContext,
  WithSdkStreamMixin as __WithSdkStreamMixin,
} from "@smithy/types";

import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import {
  GetWorkUnitResultsRequest,
  GetWorkUnitResultsRequestFilterSensitiveLog,
  GetWorkUnitResultsResponse,
  GetWorkUnitResultsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetWorkUnitResultsCommand, se_GetWorkUnitResultsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetWorkUnitResultsCommand}.
 */
export interface GetWorkUnitResultsCommandInput extends GetWorkUnitResultsRequest {}
/**
 * @public
 *
 * The output of {@link GetWorkUnitResultsCommand}.
 */
export interface GetWorkUnitResultsCommandOutput
  extends __WithSdkStreamMixin<GetWorkUnitResultsResponse, "ResultStream">,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns the work units resulting from the query. Work units can be executed in any order and in parallel. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, GetWorkUnitResultsCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, GetWorkUnitResultsCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const input = { // GetWorkUnitResultsRequest
 *   QueryId: "STRING_VALUE", // required
 *   WorkUnitId: Number("long"), // required
 *   WorkUnitToken: "STRING_VALUE", // required
 * };
 * const command = new GetWorkUnitResultsCommand(input);
 * const response = await client.send(command);
 * // { // GetWorkUnitResultsResponse
 * //   ResultStream: "STREAMING_BLOB_VALUE",
 * // };
 *
 * ```
 *
 * @param GetWorkUnitResultsCommandInput - {@link GetWorkUnitResultsCommandInput}
 * @returns {@link GetWorkUnitResultsCommandOutput}
 * @see {@link GetWorkUnitResultsCommandInput} for command's `input` shape.
 * @see {@link GetWorkUnitResultsCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link ExpiredException} (client fault)
 *  <p>Contains details about an error where the query request expired.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link ThrottledException} (client fault)
 *  <p>Contains details about an error where the query request was throttled.</p>
 *
 * @throws {@link LakeFormationServiceException}
 * <p>Base exception class for all service exceptions from LakeFormation service.</p>
 *
 */
export class GetWorkUnitResultsCommand extends $Command<
  GetWorkUnitResultsCommandInput,
  GetWorkUnitResultsCommandOutput,
  LakeFormationClientResolvedConfig
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
  constructor(readonly input: GetWorkUnitResultsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LakeFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetWorkUnitResultsCommandInput, GetWorkUnitResultsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetWorkUnitResultsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LakeFormationClient";
    const commandName = "GetWorkUnitResultsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetWorkUnitResultsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetWorkUnitResultsResponseFilterSensitiveLog,
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
  private serialize(input: GetWorkUnitResultsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetWorkUnitResultsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext & __SdkStreamSerdeContext
  ): Promise<GetWorkUnitResultsCommandOutput> {
    return de_GetWorkUnitResultsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
