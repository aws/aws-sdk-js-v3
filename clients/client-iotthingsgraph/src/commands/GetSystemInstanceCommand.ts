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

import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { GetSystemInstanceRequest, GetSystemInstanceResponse } from "../models/models_0";
import { de_GetSystemInstanceCommand, se_GetSystemInstanceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSystemInstanceCommand}.
 */
export interface GetSystemInstanceCommandInput extends GetSystemInstanceRequest {}
/**
 * @public
 *
 * The output of {@link GetSystemInstanceCommand}.
 */
export interface GetSystemInstanceCommandOutput extends GetSystemInstanceResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Gets a system instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, GetSystemInstanceCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, GetSystemInstanceCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const input = { // GetSystemInstanceRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new GetSystemInstanceCommand(input);
 * const response = await client.send(command);
 * // { // GetSystemInstanceResponse
 * //   description: { // SystemInstanceDescription
 * //     summary: { // SystemInstanceSummary
 * //       id: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       target: "STRING_VALUE",
 * //       greengrassGroupName: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       greengrassGroupId: "STRING_VALUE",
 * //       greengrassGroupVersionId: "STRING_VALUE",
 * //     },
 * //     definition: { // DefinitionDocument
 * //       language: "STRING_VALUE", // required
 * //       text: "STRING_VALUE", // required
 * //     },
 * //     s3BucketName: "STRING_VALUE",
 * //     metricsConfiguration: { // MetricsConfiguration
 * //       cloudMetricEnabled: true || false,
 * //       metricRuleRoleArn: "STRING_VALUE",
 * //     },
 * //     validatedNamespaceVersion: Number("long"),
 * //     validatedDependencyRevisions: [ // DependencyRevisions
 * //       { // DependencyRevision
 * //         id: "STRING_VALUE",
 * //         revisionNumber: Number("long"),
 * //       },
 * //     ],
 * //     flowActionsRoleArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSystemInstanceCommandInput - {@link GetSystemInstanceCommandInput}
 * @returns {@link GetSystemInstanceCommandOutput}
 * @see {@link GetSystemInstanceCommandInput} for command's `input` shape.
 * @see {@link GetSystemInstanceCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for IoTThingsGraphClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p></p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p></p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p></p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p></p>
 *
 * @throws {@link IoTThingsGraphServiceException}
 * <p>Base exception class for all service exceptions from IoTThingsGraph service.</p>
 *
 */
export class GetSystemInstanceCommand extends $Command<
  GetSystemInstanceCommandInput,
  GetSystemInstanceCommandOutput,
  IoTThingsGraphClientResolvedConfig
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
  constructor(readonly input: GetSystemInstanceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTThingsGraphClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSystemInstanceCommandInput, GetSystemInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSystemInstanceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTThingsGraphClient";
    const commandName = "GetSystemInstanceCommand";
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
  private serialize(input: GetSystemInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetSystemInstanceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSystemInstanceCommandOutput> {
    return de_GetSystemInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
