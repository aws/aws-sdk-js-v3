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

import { MediaStoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreClient";
import { GetMetricPolicyInput, GetMetricPolicyOutput } from "../models/models_0";
import { de_GetMetricPolicyCommand, se_GetMetricPolicyCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetMetricPolicyCommand}.
 */
export interface GetMetricPolicyCommandInput extends GetMetricPolicyInput {}
/**
 * @public
 *
 * The output of {@link GetMetricPolicyCommand}.
 */
export interface GetMetricPolicyCommandOutput extends GetMetricPolicyOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns the metric policy for the specified container. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreClient, GetMetricPolicyCommand } from "@aws-sdk/client-mediastore"; // ES Modules import
 * // const { MediaStoreClient, GetMetricPolicyCommand } = require("@aws-sdk/client-mediastore"); // CommonJS import
 * const client = new MediaStoreClient(config);
 * const input = { // GetMetricPolicyInput
 *   ContainerName: "STRING_VALUE", // required
 * };
 * const command = new GetMetricPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetMetricPolicyOutput
 * //   MetricPolicy: { // MetricPolicy
 * //     ContainerLevelMetrics: "STRING_VALUE", // required
 * //     MetricPolicyRules: [ // MetricPolicyRules
 * //       { // MetricPolicyRule
 * //         ObjectGroup: "STRING_VALUE", // required
 * //         ObjectGroupName: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetMetricPolicyCommandInput - {@link GetMetricPolicyCommandInput}
 * @returns {@link GetMetricPolicyCommandOutput}
 * @see {@link GetMetricPolicyCommandInput} for command's `input` shape.
 * @see {@link GetMetricPolicyCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreClientResolvedConfig | config} for MediaStoreClient's `config` shape.
 *
 * @throws {@link ContainerInUseException} (client fault)
 *  <p>The container that you specified in the request already exists or is being
 *          updated.</p>
 *
 * @throws {@link ContainerNotFoundException} (client fault)
 *  <p>The container that you specified in the request does not exist.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link PolicyNotFoundException} (client fault)
 *  <p>The policy that you specified in the request does not exist.</p>
 *
 * @throws {@link MediaStoreServiceException}
 * <p>Base exception class for all service exceptions from MediaStore service.</p>
 *
 */
export class GetMetricPolicyCommand extends $Command<
  GetMetricPolicyCommandInput,
  GetMetricPolicyCommandOutput,
  MediaStoreClientResolvedConfig
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
  constructor(readonly input: GetMetricPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaStoreClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetMetricPolicyCommandInput, GetMetricPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetMetricPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaStoreClient";
    const commandName = "GetMetricPolicyCommand";
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
  private serialize(input: GetMetricPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetMetricPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetMetricPolicyCommandOutput> {
    return de_GetMetricPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
