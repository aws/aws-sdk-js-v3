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

import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { GetTestExecutionArtifactsUrlRequest, GetTestExecutionArtifactsUrlResponse } from "../models/models_0";
import {
  de_GetTestExecutionArtifactsUrlCommand,
  se_GetTestExecutionArtifactsUrlCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetTestExecutionArtifactsUrlCommand}.
 */
export interface GetTestExecutionArtifactsUrlCommandInput extends GetTestExecutionArtifactsUrlRequest {}
/**
 * @public
 *
 * The output of {@link GetTestExecutionArtifactsUrlCommand}.
 */
export interface GetTestExecutionArtifactsUrlCommandOutput
  extends GetTestExecutionArtifactsUrlResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>The pre-signed Amazon S3 URL to download the test execution result artifacts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, GetTestExecutionArtifactsUrlCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, GetTestExecutionArtifactsUrlCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const input = { // GetTestExecutionArtifactsUrlRequest
 *   testExecutionId: "STRING_VALUE", // required
 * };
 * const command = new GetTestExecutionArtifactsUrlCommand(input);
 * const response = await client.send(command);
 * // { // GetTestExecutionArtifactsUrlResponse
 * //   testExecutionId: "STRING_VALUE",
 * //   downloadArtifactsUrl: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetTestExecutionArtifactsUrlCommandInput - {@link GetTestExecutionArtifactsUrlCommandInput}
 * @returns {@link GetTestExecutionArtifactsUrlCommandOutput}
 * @see {@link GetTestExecutionArtifactsUrlCommandInput} for command's `input` shape.
 * @see {@link GetTestExecutionArtifactsUrlCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an unexpected condition. Try your request
 *          again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>You asked to describe a resource that doesn't exist. Check the
 *          resource that you are requesting and try again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have reached a quota for your bot. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request rate is too high. Reduce the frequency of
 *          requests.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the input parameters in your request isn't valid. Check the
 *          parameters and try your request again.</p>
 *
 * @throws {@link LexModelsV2ServiceException}
 * <p>Base exception class for all service exceptions from LexModelsV2 service.</p>
 *
 */
export class GetTestExecutionArtifactsUrlCommand extends $Command<
  GetTestExecutionArtifactsUrlCommandInput,
  GetTestExecutionArtifactsUrlCommandOutput,
  LexModelsV2ClientResolvedConfig
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
  constructor(readonly input: GetTestExecutionArtifactsUrlCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexModelsV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetTestExecutionArtifactsUrlCommandInput, GetTestExecutionArtifactsUrlCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetTestExecutionArtifactsUrlCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelsV2Client";
    const commandName = "GetTestExecutionArtifactsUrlCommand";
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
  private serialize(input: GetTestExecutionArtifactsUrlCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetTestExecutionArtifactsUrlCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetTestExecutionArtifactsUrlCommandOutput> {
    return de_GetTestExecutionArtifactsUrlCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
