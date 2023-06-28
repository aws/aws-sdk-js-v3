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

import { ListStageDevicesRequest, ListStageDevicesResponse } from "../models/models_3";
import { de_ListStageDevicesCommand, se_ListStageDevicesCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListStageDevicesCommand}.
 */
export interface ListStageDevicesCommandInput extends ListStageDevicesRequest {}
/**
 * @public
 *
 * The output of {@link ListStageDevicesCommand}.
 */
export interface ListStageDevicesCommandOutput extends ListStageDevicesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists devices allocated to the stage, containing detailed device information and deployment status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListStageDevicesCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListStageDevicesCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // ListStageDevicesRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   EdgeDeploymentPlanName: "STRING_VALUE", // required
 *   ExcludeDevicesDeployedInOtherStage: true || false,
 *   StageName: "STRING_VALUE", // required
 * };
 * const command = new ListStageDevicesCommand(input);
 * const response = await client.send(command);
 * // { // ListStageDevicesResponse
 * //   DeviceDeploymentSummaries: [ // DeviceDeploymentSummaries // required
 * //     { // DeviceDeploymentSummary
 * //       EdgeDeploymentPlanArn: "STRING_VALUE", // required
 * //       EdgeDeploymentPlanName: "STRING_VALUE", // required
 * //       StageName: "STRING_VALUE", // required
 * //       DeployedStageName: "STRING_VALUE",
 * //       DeviceFleetName: "STRING_VALUE",
 * //       DeviceName: "STRING_VALUE", // required
 * //       DeviceArn: "STRING_VALUE", // required
 * //       DeviceDeploymentStatus: "READYTODEPLOY" || "INPROGRESS" || "DEPLOYED" || "FAILED" || "STOPPING" || "STOPPED",
 * //       DeviceDeploymentStatusMessage: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       DeploymentStartTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListStageDevicesCommandInput - {@link ListStageDevicesCommandInput}
 * @returns {@link ListStageDevicesCommandOutput}
 * @see {@link ListStageDevicesCommandInput} for command's `input` shape.
 * @see {@link ListStageDevicesCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class ListStageDevicesCommand extends $Command<
  ListStageDevicesCommandInput,
  ListStageDevicesCommandOutput,
  SageMakerClientResolvedConfig
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
  constructor(readonly input: ListStageDevicesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListStageDevicesCommandInput, ListStageDevicesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListStageDevicesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListStageDevicesCommand";
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
  private serialize(input: ListStageDevicesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListStageDevicesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListStageDevicesCommandOutput> {
    return de_ListStageDevicesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
