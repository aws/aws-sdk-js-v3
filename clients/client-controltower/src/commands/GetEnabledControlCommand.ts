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

import { ControlTowerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ControlTowerClient";
import { GetEnabledControlInput, GetEnabledControlOutput } from "../models/models_0";
import { de_GetEnabledControlCommand, se_GetEnabledControlCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetEnabledControlCommand}.
 */
export interface GetEnabledControlCommandInput extends GetEnabledControlInput {}
/**
 * @public
 *
 * The output of {@link GetEnabledControlCommand}.
 */
export interface GetEnabledControlCommandOutput extends GetEnabledControlOutput, __MetadataBearer {}

/**
 * @public
 * <p>
 *         Provides details about the enabled control. For usage examples, see <a href="https://docs.aws.amazon.com/controltower/latest/userguide/control-api-examples-short.html">
 *                <i>the AWS Control Tower User Guide</i>
 *             </a>.</p>
 *          <p class="title">
 *             <b>Returned values</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>TargetRegions: Shows target AWS Regions where the enabled control is available to be deployed.</p>
 *             </li>
 *             <li>
 *                <p>StatusSummary: Provides a detailed summary of the deployment status.</p>
 *             </li>
 *             <li>
 *                <p>DriftSummary: Provides a detailed summary of the drifted status.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ControlTowerClient, GetEnabledControlCommand } from "@aws-sdk/client-controltower"; // ES Modules import
 * // const { ControlTowerClient, GetEnabledControlCommand } = require("@aws-sdk/client-controltower"); // CommonJS import
 * const client = new ControlTowerClient(config);
 * const input = { // GetEnabledControlInput
 *   enabledControlIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetEnabledControlCommand(input);
 * const response = await client.send(command);
 * // { // GetEnabledControlOutput
 * //   enabledControlDetails: { // EnabledControlDetails
 * //     arn: "STRING_VALUE",
 * //     controlIdentifier: "STRING_VALUE",
 * //     targetIdentifier: "STRING_VALUE",
 * //     targetRegions: [ // TargetRegions
 * //       { // Region
 * //         name: "STRING_VALUE",
 * //       },
 * //     ],
 * //     statusSummary: { // EnablementStatusSummary
 * //       status: "STRING_VALUE",
 * //       lastOperationIdentifier: "STRING_VALUE",
 * //     },
 * //     driftStatusSummary: { // DriftStatusSummary
 * //       driftStatus: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetEnabledControlCommandInput - {@link GetEnabledControlCommandInput}
 * @returns {@link GetEnabledControlCommandOutput}
 * @see {@link GetEnabledControlCommandInput} for command's `input` shape.
 * @see {@link GetEnabledControlCommandOutput} for command's `response` shape.
 * @see {@link ControlTowerClientResolvedConfig | config} for ControlTowerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p> Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link ControlTowerServiceException}
 * <p>Base exception class for all service exceptions from ControlTower service.</p>
 *
 */
export class GetEnabledControlCommand extends $Command<
  GetEnabledControlCommandInput,
  GetEnabledControlCommandOutput,
  ControlTowerClientResolvedConfig
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
  constructor(readonly input: GetEnabledControlCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ControlTowerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetEnabledControlCommandInput, GetEnabledControlCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetEnabledControlCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ControlTowerClient";
    const commandName = "GetEnabledControlCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSControlTowerApis",
        operation: "GetEnabledControl",
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
  private serialize(input: GetEnabledControlCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetEnabledControlCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetEnabledControlCommandOutput> {
    return de_GetEnabledControlCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
