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

import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { StartPolicyGenerationRequest, StartPolicyGenerationResponse } from "../models/models_0";
import { de_StartPolicyGenerationCommand, se_StartPolicyGenerationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartPolicyGenerationCommand}.
 */
export interface StartPolicyGenerationCommandInput extends StartPolicyGenerationRequest {}
/**
 * @public
 *
 * The output of {@link StartPolicyGenerationCommand}.
 */
export interface StartPolicyGenerationCommandOutput extends StartPolicyGenerationResponse, __MetadataBearer {}

/**
 * @public
 * <p>Starts the policy generation request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, StartPolicyGenerationCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, StartPolicyGenerationCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * const client = new AccessAnalyzerClient(config);
 * const input = { // StartPolicyGenerationRequest
 *   policyGenerationDetails: { // PolicyGenerationDetails
 *     principalArn: "STRING_VALUE", // required
 *   },
 *   cloudTrailDetails: { // CloudTrailDetails
 *     trails: [ // TrailList // required
 *       { // Trail
 *         cloudTrailArn: "STRING_VALUE", // required
 *         regions: [ // RegionList
 *           "STRING_VALUE",
 *         ],
 *         allRegions: true || false,
 *       },
 *     ],
 *     accessRole: "STRING_VALUE", // required
 *     startTime: new Date("TIMESTAMP"), // required
 *     endTime: new Date("TIMESTAMP"),
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new StartPolicyGenerationCommand(input);
 * const response = await client.send(command);
 * // { // StartPolicyGenerationResponse
 * //   jobId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StartPolicyGenerationCommandInput - {@link StartPolicyGenerationCommandInput}
 * @returns {@link StartPolicyGenerationCommandOutput}
 * @see {@link StartPolicyGenerationCommandInput} for command's `input` shape.
 * @see {@link StartPolicyGenerationCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for AccessAnalyzerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflict exception error.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Service quote met error.</p>
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
export class StartPolicyGenerationCommand extends $Command<
  StartPolicyGenerationCommandInput,
  StartPolicyGenerationCommandOutput,
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
  constructor(readonly input: StartPolicyGenerationCommandInput) {
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
  ): Handler<StartPolicyGenerationCommandInput, StartPolicyGenerationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartPolicyGenerationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AccessAnalyzerClient";
    const commandName = "StartPolicyGenerationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AccessAnalyzer",
        operation: "StartPolicyGeneration",
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
  private serialize(input: StartPolicyGenerationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartPolicyGenerationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartPolicyGenerationCommandOutput> {
    return de_StartPolicyGenerationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
