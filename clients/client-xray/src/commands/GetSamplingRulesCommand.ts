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

import { GetSamplingRulesRequest, GetSamplingRulesResult } from "../models/models_0";
import { de_GetSamplingRulesCommand, se_GetSamplingRulesCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSamplingRulesCommand}.
 */
export interface GetSamplingRulesCommandInput extends GetSamplingRulesRequest {}
/**
 * @public
 *
 * The output of {@link GetSamplingRulesCommand}.
 */
export interface GetSamplingRulesCommandOutput extends GetSamplingRulesResult, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves all sampling rules.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, GetSamplingRulesCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, GetSamplingRulesCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const input = { // GetSamplingRulesRequest
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetSamplingRulesCommand(input);
 * const response = await client.send(command);
 * // { // GetSamplingRulesResult
 * //   SamplingRuleRecords: [ // SamplingRuleRecordList
 * //     { // SamplingRuleRecord
 * //       SamplingRule: { // SamplingRule
 * //         RuleName: "STRING_VALUE",
 * //         RuleARN: "STRING_VALUE",
 * //         ResourceARN: "STRING_VALUE", // required
 * //         Priority: Number("int"), // required
 * //         FixedRate: Number("double"), // required
 * //         ReservoirSize: Number("int"), // required
 * //         ServiceName: "STRING_VALUE", // required
 * //         ServiceType: "STRING_VALUE", // required
 * //         Host: "STRING_VALUE", // required
 * //         HTTPMethod: "STRING_VALUE", // required
 * //         URLPath: "STRING_VALUE", // required
 * //         Version: Number("int"), // required
 * //         Attributes: { // AttributeMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       ModifiedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetSamplingRulesCommandInput - {@link GetSamplingRulesCommandInput}
 * @returns {@link GetSamplingRulesCommandOutput}
 * @see {@link GetSamplingRulesCommandInput} for command's `input` shape.
 * @see {@link GetSamplingRulesCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for XRayClient's `config` shape.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is missing required parameters or has invalid parameters.</p>
 *
 * @throws {@link ThrottledException} (client fault)
 *  <p>The request exceeds the maximum number of requests per second.</p>
 *
 * @throws {@link XRayServiceException}
 * <p>Base exception class for all service exceptions from XRay service.</p>
 *
 */
export class GetSamplingRulesCommand extends $Command<
  GetSamplingRulesCommandInput,
  GetSamplingRulesCommandOutput,
  XRayClientResolvedConfig
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
  constructor(readonly input: GetSamplingRulesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: XRayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSamplingRulesCommandInput, GetSamplingRulesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSamplingRulesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "XRayClient";
    const commandName = "GetSamplingRulesCommand";
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
  private serialize(input: GetSamplingRulesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetSamplingRulesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSamplingRulesCommandOutput> {
    return de_GetSamplingRulesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
