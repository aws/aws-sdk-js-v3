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

import { LaunchWizardClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LaunchWizardClient";
import { GetWorkloadInput, GetWorkloadOutput } from "../models/models_0";
import { de_GetWorkloadCommand, se_GetWorkloadCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetWorkloadCommand}.
 */
export interface GetWorkloadCommandInput extends GetWorkloadInput {}
/**
 * @public
 *
 * The output of {@link GetWorkloadCommand}.
 */
export interface GetWorkloadCommandOutput extends GetWorkloadOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about a workload.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LaunchWizardClient, GetWorkloadCommand } from "@aws-sdk/client-launch-wizard"; // ES Modules import
 * // const { LaunchWizardClient, GetWorkloadCommand } = require("@aws-sdk/client-launch-wizard"); // CommonJS import
 * const client = new LaunchWizardClient(config);
 * const input = { // GetWorkloadInput
 *   workloadName: "STRING_VALUE", // required
 * };
 * const command = new GetWorkloadCommand(input);
 * const response = await client.send(command);
 * // { // GetWorkloadOutput
 * //   workload: { // WorkloadData
 * //     workloadName: "STRING_VALUE",
 * //     displayName: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     documentationUrl: "STRING_VALUE",
 * //     iconUrl: "STRING_VALUE",
 * //     status: "ACTIVE" || "INACTIVE" || "DISABLED" || "DELETED",
 * //     statusMessage: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetWorkloadCommandInput - {@link GetWorkloadCommandInput}
 * @returns {@link GetWorkloadCommandOutput}
 * @see {@link GetWorkloadCommandInput} for command's `input` shape.
 * @see {@link GetWorkloadCommandOutput} for command's `response` shape.
 * @see {@link LaunchWizardClientResolvedConfig | config} for LaunchWizardClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred. Retry your request, but if the problem persists, contact
 *          us with details by posting a question on <a href="https://repost.aws/">re:Post</a>.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified workload or deployment resource can't be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link LaunchWizardServiceException}
 * <p>Base exception class for all service exceptions from LaunchWizard service.</p>
 *
 */
export class GetWorkloadCommand extends $Command<
  GetWorkloadCommandInput,
  GetWorkloadCommandOutput,
  LaunchWizardClientResolvedConfig
> {
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
  constructor(readonly input: GetWorkloadCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LaunchWizardClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetWorkloadCommandInput, GetWorkloadCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetWorkloadCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LaunchWizardClient";
    const commandName = "GetWorkloadCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "LaunchWizard",
        operation: "GetWorkload",
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
  private serialize(input: GetWorkloadCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetWorkloadCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetWorkloadCommandOutput> {
    return de_GetWorkloadCommand(output, context);
  }
}
