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

import { AmplifyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyClient";
import { StopJobRequest, StopJobResult } from "../models/models_0";
import { de_StopJobCommand, se_StopJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StopJobCommand}.
 */
export interface StopJobCommandInput extends StopJobRequest {}
/**
 * @public
 *
 * The output of {@link StopJobCommand}.
 */
export interface StopJobCommandOutput extends StopJobResult, __MetadataBearer {}

/**
 * @public
 * <p> Stops a job that is in progress for a branch of an Amplify app. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, StopJobCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, StopJobCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * const client = new AmplifyClient(config);
 * const input = { // StopJobRequest
 *   appId: "STRING_VALUE", // required
 *   branchName: "STRING_VALUE", // required
 *   jobId: "STRING_VALUE", // required
 * };
 * const command = new StopJobCommand(input);
 * const response = await client.send(command);
 * // { // StopJobResult
 * //   jobSummary: { // JobSummary
 * //     jobArn: "STRING_VALUE", // required
 * //     jobId: "STRING_VALUE", // required
 * //     commitId: "STRING_VALUE", // required
 * //     commitMessage: "STRING_VALUE", // required
 * //     commitTime: new Date("TIMESTAMP"), // required
 * //     startTime: new Date("TIMESTAMP"), // required
 * //     status: "PENDING" || "PROVISIONING" || "RUNNING" || "FAILED" || "SUCCEED" || "CANCELLING" || "CANCELLED", // required
 * //     endTime: new Date("TIMESTAMP"),
 * //     jobType: "RELEASE" || "RETRY" || "MANUAL" || "WEB_HOOK", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param StopJobCommandInput - {@link StopJobCommandInput}
 * @returns {@link StopJobCommandOutput}
 * @see {@link StopJobCommandInput} for command's `input` shape.
 * @see {@link StopJobCommandOutput} for command's `response` shape.
 * @see {@link AmplifyClientResolvedConfig | config} for AmplifyClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p> A request contains unexpected data. </p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p> The service failed to perform an operation due to an internal issue. </p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p> A resource could not be created because service quotas were exceeded. </p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p> An entity was not found during an operation. </p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p> An operation failed due to a lack of access. </p>
 *
 * @throws {@link AmplifyServiceException}
 * <p>Base exception class for all service exceptions from Amplify service.</p>
 *
 */
export class StopJobCommand extends $Command<StopJobCommandInput, StopJobCommandOutput, AmplifyClientResolvedConfig> {
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
  constructor(readonly input: StopJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmplifyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopJobCommandInput, StopJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, StopJobCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmplifyClient";
    const commandName = "StopJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Amplify",
        operation: "StopJob",
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
  private serialize(input: StopJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StopJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopJobCommandOutput> {
    return de_StopJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
