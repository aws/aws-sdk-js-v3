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

import { GetPoliciesStatsRequest, GetPoliciesStatsResponse } from "../models/models_0";
import {
  OpenSearchServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../OpenSearchServerlessClient";
import { de_GetPoliciesStatsCommand, se_GetPoliciesStatsCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetPoliciesStatsCommand}.
 */
export interface GetPoliciesStatsCommandInput extends GetPoliciesStatsRequest {}
/**
 * @public
 *
 * The output of {@link GetPoliciesStatsCommand}.
 */
export interface GetPoliciesStatsCommandOutput extends GetPoliciesStatsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns statistical information about your OpenSearch Serverless access policies, security
 *             configurations, and security policies.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchServerlessClient, GetPoliciesStatsCommand } from "@aws-sdk/client-opensearchserverless"; // ES Modules import
 * // const { OpenSearchServerlessClient, GetPoliciesStatsCommand } = require("@aws-sdk/client-opensearchserverless"); // CommonJS import
 * const client = new OpenSearchServerlessClient(config);
 * const input = {};
 * const command = new GetPoliciesStatsCommand(input);
 * const response = await client.send(command);
 * // { // GetPoliciesStatsResponse
 * //   AccessPolicyStats: { // AccessPolicyStats
 * //     DataPolicyCount: Number("long"),
 * //   },
 * //   SecurityPolicyStats: { // SecurityPolicyStats
 * //     EncryptionPolicyCount: Number("long"),
 * //     NetworkPolicyCount: Number("long"),
 * //   },
 * //   SecurityConfigStats: { // SecurityConfigStats
 * //     SamlConfigCount: Number("long"),
 * //   },
 * //   TotalPolicyCount: Number("long"),
 * // };
 *
 * ```
 *
 * @param GetPoliciesStatsCommandInput - {@link GetPoliciesStatsCommandInput}
 * @returns {@link GetPoliciesStatsCommandOutput}
 * @see {@link GetPoliciesStatsCommandInput} for command's `input` shape.
 * @see {@link GetPoliciesStatsCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchServerlessClientResolvedConfig | config} for OpenSearchServerlessClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Thrown when an error internal to the service occurs while processing a request.</p>
 *
 * @throws {@link OpenSearchServerlessServiceException}
 * <p>Base exception class for all service exceptions from OpenSearchServerless service.</p>
 *
 */
export class GetPoliciesStatsCommand extends $Command<
  GetPoliciesStatsCommandInput,
  GetPoliciesStatsCommandOutput,
  OpenSearchServerlessClientResolvedConfig
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
  constructor(readonly input: GetPoliciesStatsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpenSearchServerlessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetPoliciesStatsCommandInput, GetPoliciesStatsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetPoliciesStatsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpenSearchServerlessClient";
    const commandName = "GetPoliciesStatsCommand";
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
  private serialize(input: GetPoliciesStatsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetPoliciesStatsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetPoliciesStatsCommandOutput> {
    return de_GetPoliciesStatsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
