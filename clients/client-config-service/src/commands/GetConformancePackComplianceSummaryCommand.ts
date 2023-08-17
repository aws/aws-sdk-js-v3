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

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import {
  GetConformancePackComplianceSummaryRequest,
  GetConformancePackComplianceSummaryResponse,
} from "../models/models_0";
import {
  de_GetConformancePackComplianceSummaryCommand,
  se_GetConformancePackComplianceSummaryCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetConformancePackComplianceSummaryCommand}.
 */
export interface GetConformancePackComplianceSummaryCommandInput extends GetConformancePackComplianceSummaryRequest {}
/**
 * @public
 *
 * The output of {@link GetConformancePackComplianceSummaryCommand}.
 */
export interface GetConformancePackComplianceSummaryCommandOutput
  extends GetConformancePackComplianceSummaryResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns compliance details for the conformance pack based on the cumulative compliance results of all the rules in that conformance pack.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, GetConformancePackComplianceSummaryCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, GetConformancePackComplianceSummaryCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const input = { // GetConformancePackComplianceSummaryRequest
 *   ConformancePackNames: [ // ConformancePackNamesToSummarizeList // required
 *     "STRING_VALUE",
 *   ],
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetConformancePackComplianceSummaryCommand(input);
 * const response = await client.send(command);
 * // { // GetConformancePackComplianceSummaryResponse
 * //   ConformancePackComplianceSummaryList: [ // ConformancePackComplianceSummaryList
 * //     { // ConformancePackComplianceSummary
 * //       ConformancePackName: "STRING_VALUE", // required
 * //       ConformancePackComplianceStatus: "COMPLIANT" || "NON_COMPLIANT" || "INSUFFICIENT_DATA", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetConformancePackComplianceSummaryCommandInput - {@link GetConformancePackComplianceSummaryCommandInput}
 * @returns {@link GetConformancePackComplianceSummaryCommandOutput}
 * @see {@link GetConformancePackComplianceSummaryCommandInput} for command's `input` shape.
 * @see {@link GetConformancePackComplianceSummaryCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link InvalidLimitException} (client fault)
 *  <p>The specified limit is outside the allowable range.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The specified next token is not valid. Specify the
 * 				<code>nextToken</code> string that was returned in the previous
 * 			response to get the next page of results.</p>
 *
 * @throws {@link NoSuchConformancePackException} (client fault)
 *  <p>You specified one or more conformance packs that do not exist.</p>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 */
export class GetConformancePackComplianceSummaryCommand extends $Command<
  GetConformancePackComplianceSummaryCommandInput,
  GetConformancePackComplianceSummaryCommandOutput,
  ConfigServiceClientResolvedConfig
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
  constructor(readonly input: GetConformancePackComplianceSummaryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetConformancePackComplianceSummaryCommandInput, GetConformancePackComplianceSummaryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetConformancePackComplianceSummaryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "GetConformancePackComplianceSummaryCommand";
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
  private serialize(
    input: GetConformancePackComplianceSummaryCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetConformancePackComplianceSummaryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetConformancePackComplianceSummaryCommandOutput> {
    return de_GetConformancePackComplianceSummaryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
