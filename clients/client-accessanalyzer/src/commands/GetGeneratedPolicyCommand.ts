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

import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { GetGeneratedPolicyRequest, GetGeneratedPolicyResponse } from "../models/models_0";
import { de_GetGeneratedPolicyCommand, se_GetGeneratedPolicyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetGeneratedPolicyCommand}.
 */
export interface GetGeneratedPolicyCommandInput extends GetGeneratedPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetGeneratedPolicyCommand}.
 */
export interface GetGeneratedPolicyCommandOutput extends GetGeneratedPolicyResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the policy that was generated using <code>StartPolicyGeneration</code>.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, GetGeneratedPolicyCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, GetGeneratedPolicyCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * const client = new AccessAnalyzerClient(config);
 * const input = { // GetGeneratedPolicyRequest
 *   jobId: "STRING_VALUE", // required
 *   includeResourcePlaceholders: true || false,
 *   includeServiceLevelTemplate: true || false,
 * };
 * const command = new GetGeneratedPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetGeneratedPolicyResponse
 * //   jobDetails: { // JobDetails
 * //     jobId: "STRING_VALUE", // required
 * //     status: "STRING_VALUE", // required
 * //     startedOn: new Date("TIMESTAMP"), // required
 * //     completedOn: new Date("TIMESTAMP"),
 * //     jobError: { // JobError
 * //       code: "STRING_VALUE", // required
 * //       message: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   generatedPolicyResult: { // GeneratedPolicyResult
 * //     properties: { // GeneratedPolicyProperties
 * //       isComplete: true || false,
 * //       principalArn: "STRING_VALUE", // required
 * //       cloudTrailProperties: { // CloudTrailProperties
 * //         trailProperties: [ // TrailPropertiesList // required
 * //           { // TrailProperties
 * //             cloudTrailArn: "STRING_VALUE", // required
 * //             regions: [ // RegionList
 * //               "STRING_VALUE",
 * //             ],
 * //             allRegions: true || false,
 * //           },
 * //         ],
 * //         startTime: new Date("TIMESTAMP"), // required
 * //         endTime: new Date("TIMESTAMP"), // required
 * //       },
 * //     },
 * //     generatedPolicies: [ // GeneratedPolicyList
 * //       { // GeneratedPolicy
 * //         policy: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetGeneratedPolicyCommandInput - {@link GetGeneratedPolicyCommandInput}
 * @returns {@link GetGeneratedPolicyCommandOutput}
 * @see {@link GetGeneratedPolicyCommandInput} for command's `input` shape.
 * @see {@link GetGeneratedPolicyCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for AccessAnalyzerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Throttling limit exceeded error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validation exception error.</p>
 *
 * @throws {@link AccessAnalyzerServiceException}
 * <p>Base exception class for all service exceptions from AccessAnalyzer service.</p>
 *
 */
export class GetGeneratedPolicyCommand extends $Command<
  GetGeneratedPolicyCommandInput,
  GetGeneratedPolicyCommandOutput,
  AccessAnalyzerClientResolvedConfig
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
  constructor(readonly input: GetGeneratedPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AccessAnalyzerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetGeneratedPolicyCommandInput, GetGeneratedPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetGeneratedPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AccessAnalyzerClient";
    const commandName = "GetGeneratedPolicyCommand";
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
  private serialize(input: GetGeneratedPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetGeneratedPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetGeneratedPolicyCommandOutput> {
    return de_GetGeneratedPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
