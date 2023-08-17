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

import { ListEdgeDeploymentPlansRequest, ListEdgeDeploymentPlansResponse } from "../models/models_3";
import { de_ListEdgeDeploymentPlansCommand, se_ListEdgeDeploymentPlansCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListEdgeDeploymentPlansCommand}.
 */
export interface ListEdgeDeploymentPlansCommandInput extends ListEdgeDeploymentPlansRequest {}
/**
 * @public
 *
 * The output of {@link ListEdgeDeploymentPlansCommand}.
 */
export interface ListEdgeDeploymentPlansCommandOutput extends ListEdgeDeploymentPlansResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists all edge deployment plans.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListEdgeDeploymentPlansCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListEdgeDeploymentPlansCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // ListEdgeDeploymentPlansRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   LastModifiedTimeAfter: new Date("TIMESTAMP"),
 *   LastModifiedTimeBefore: new Date("TIMESTAMP"),
 *   NameContains: "STRING_VALUE",
 *   DeviceFleetNameContains: "STRING_VALUE",
 *   SortBy: "NAME" || "DEVICE_FLEET_NAME" || "CREATION_TIME" || "LAST_MODIFIED_TIME",
 *   SortOrder: "Ascending" || "Descending",
 * };
 * const command = new ListEdgeDeploymentPlansCommand(input);
 * const response = await client.send(command);
 * // { // ListEdgeDeploymentPlansResponse
 * //   EdgeDeploymentPlanSummaries: [ // EdgeDeploymentPlanSummaries // required
 * //     { // EdgeDeploymentPlanSummary
 * //       EdgeDeploymentPlanArn: "STRING_VALUE", // required
 * //       EdgeDeploymentPlanName: "STRING_VALUE", // required
 * //       DeviceFleetName: "STRING_VALUE", // required
 * //       EdgeDeploymentSuccess: Number("int"), // required
 * //       EdgeDeploymentPending: Number("int"), // required
 * //       EdgeDeploymentFailed: Number("int"), // required
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEdgeDeploymentPlansCommandInput - {@link ListEdgeDeploymentPlansCommandInput}
 * @returns {@link ListEdgeDeploymentPlansCommandOutput}
 * @see {@link ListEdgeDeploymentPlansCommandInput} for command's `input` shape.
 * @see {@link ListEdgeDeploymentPlansCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class ListEdgeDeploymentPlansCommand extends $Command<
  ListEdgeDeploymentPlansCommandInput,
  ListEdgeDeploymentPlansCommandOutput,
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
  constructor(readonly input: ListEdgeDeploymentPlansCommandInput) {
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
  ): Handler<ListEdgeDeploymentPlansCommandInput, ListEdgeDeploymentPlansCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListEdgeDeploymentPlansCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListEdgeDeploymentPlansCommand";
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
  private serialize(input: ListEdgeDeploymentPlansCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListEdgeDeploymentPlansCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListEdgeDeploymentPlansCommandOutput> {
    return de_ListEdgeDeploymentPlansCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
