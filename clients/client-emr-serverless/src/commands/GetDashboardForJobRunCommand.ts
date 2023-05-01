// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { EMRServerlessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRServerlessClient";
import { GetDashboardForJobRunRequest, GetDashboardForJobRunResponse } from "../models/models_0";
import { de_GetDashboardForJobRunCommand, se_GetDashboardForJobRunCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link GetDashboardForJobRunCommand}.
 */
export interface GetDashboardForJobRunCommandInput extends GetDashboardForJobRunRequest {}
/**
 * @public
 *
 * The output of {@link GetDashboardForJobRunCommand}.
 */
export interface GetDashboardForJobRunCommandOutput extends GetDashboardForJobRunResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a URL to access the job run dashboard. The generated URL is valid for one hour,
 *          after which you must invoke the API again to generate a new URL.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRServerlessClient, GetDashboardForJobRunCommand } from "@aws-sdk/client-emr-serverless"; // ES Modules import
 * // const { EMRServerlessClient, GetDashboardForJobRunCommand } = require("@aws-sdk/client-emr-serverless"); // CommonJS import
 * const client = new EMRServerlessClient(config);
 * const input = { // GetDashboardForJobRunRequest
 *   applicationId: "STRING_VALUE", // required
 *   jobRunId: "STRING_VALUE", // required
 * };
 * const command = new GetDashboardForJobRunCommand(input);
 * const response = await client.send(command);
 * // { // GetDashboardForJobRunResponse
 * //   url: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDashboardForJobRunCommandInput - {@link GetDashboardForJobRunCommandInput}
 * @returns {@link GetDashboardForJobRunCommandOutput}
 * @see {@link GetDashboardForJobRunCommandInput} for command's `input` shape.
 * @see {@link GetDashboardForJobRunCommandOutput} for command's `response` shape.
 * @see {@link EMRServerlessClientResolvedConfig | config} for EMRServerlessClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *          service.</p>
 *
 * @throws {@link EMRServerlessServiceException}
 * <p>Base exception class for all service exceptions from EMRServerless service.</p>
 *
 */
export class GetDashboardForJobRunCommand extends $Command<
  GetDashboardForJobRunCommandInput,
  GetDashboardForJobRunCommandOutput,
  EMRServerlessClientResolvedConfig
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
  constructor(readonly input: GetDashboardForJobRunCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRServerlessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDashboardForJobRunCommandInput, GetDashboardForJobRunCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDashboardForJobRunCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRServerlessClient";
    const commandName = "GetDashboardForJobRunCommand";
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
  private serialize(input: GetDashboardForJobRunCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetDashboardForJobRunCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDashboardForJobRunCommandOutput> {
    return de_GetDashboardForJobRunCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
