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

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { GetSimilarProfilesRequest, GetSimilarProfilesResponse } from "../models/models_0";
import { de_GetSimilarProfilesCommand, se_GetSimilarProfilesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSimilarProfilesCommand}.
 */
export interface GetSimilarProfilesCommandInput extends GetSimilarProfilesRequest {}
/**
 * @public
 *
 * The output of {@link GetSimilarProfilesCommand}.
 */
export interface GetSimilarProfilesCommandOutput extends GetSimilarProfilesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a set of profiles that belong to the same matching group using the <code>matchId</code> or
 *          <code>profileId</code>. You can also specify the type of matching that you want for finding similar profiles using
 *          either <code>RULE_BASED_MATCHING</code> or <code>ML_BASED_MATCHING</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, GetSimilarProfilesCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, GetSimilarProfilesCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const input = { // GetSimilarProfilesRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   DomainName: "STRING_VALUE", // required
 *   MatchType: "RULE_BASED_MATCHING" || "ML_BASED_MATCHING", // required
 *   SearchKey: "STRING_VALUE", // required
 *   SearchValue: "STRING_VALUE", // required
 * };
 * const command = new GetSimilarProfilesCommand(input);
 * const response = await client.send(command);
 * // { // GetSimilarProfilesResponse
 * //   ProfileIds: [ // ProfileIdList
 * //     "STRING_VALUE",
 * //   ],
 * //   MatchId: "STRING_VALUE",
 * //   MatchType: "RULE_BASED_MATCHING" || "ML_BASED_MATCHING",
 * //   RuleLevel: Number("int"),
 * //   ConfidenceScore: Number("double"),
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetSimilarProfilesCommandInput - {@link GetSimilarProfilesCommandInput}
 * @returns {@link GetSimilarProfilesCommandOutput}
 * @see {@link GetSimilarProfilesCommandInput} for command's `input` shape.
 * @see {@link GetSimilarProfilesCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for CustomerProfilesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource does not exist, or access was denied.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>You exceeded the maximum number of requests.</p>
 *
 * @throws {@link CustomerProfilesServiceException}
 * <p>Base exception class for all service exceptions from CustomerProfiles service.</p>
 *
 */
export class GetSimilarProfilesCommand extends $Command<
  GetSimilarProfilesCommandInput,
  GetSimilarProfilesCommandOutput,
  CustomerProfilesClientResolvedConfig
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
  constructor(readonly input: GetSimilarProfilesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CustomerProfilesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSimilarProfilesCommandInput, GetSimilarProfilesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSimilarProfilesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CustomerProfilesClient";
    const commandName = "GetSimilarProfilesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CustomerProfiles_20200815",
        operation: "GetSimilarProfiles",
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
  private serialize(input: GetSimilarProfilesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetSimilarProfilesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSimilarProfilesCommandOutput> {
    return de_GetSimilarProfilesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
