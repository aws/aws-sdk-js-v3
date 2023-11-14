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

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { ListDeviceInstancesRequest, ListDeviceInstancesResult } from "../models/models_0";
import { de_ListDeviceInstancesCommand, se_ListDeviceInstancesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListDeviceInstancesCommand}.
 */
export interface ListDeviceInstancesCommandInput extends ListDeviceInstancesRequest {}
/**
 * @public
 *
 * The output of {@link ListDeviceInstancesCommand}.
 */
export interface ListDeviceInstancesCommandOutput extends ListDeviceInstancesResult, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about the private device instances associated with one or more AWS
 *             accounts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListDeviceInstancesCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ListDeviceInstancesCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const input = { // ListDeviceInstancesRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListDeviceInstancesCommand(input);
 * const response = await client.send(command);
 * // { // ListDeviceInstancesResult
 * //   deviceInstances: [ // DeviceInstances
 * //     { // DeviceInstance
 * //       arn: "STRING_VALUE",
 * //       deviceArn: "STRING_VALUE",
 * //       labels: [ // InstanceLabels
 * //         "STRING_VALUE",
 * //       ],
 * //       status: "IN_USE" || "PREPARING" || "AVAILABLE" || "NOT_AVAILABLE",
 * //       udid: "STRING_VALUE",
 * //       instanceProfile: { // InstanceProfile
 * //         arn: "STRING_VALUE",
 * //         packageCleanup: true || false,
 * //         excludeAppPackagesFromCleanup: [ // PackageIds
 * //           "STRING_VALUE",
 * //         ],
 * //         rebootAfterUse: true || false,
 * //         name: "STRING_VALUE",
 * //         description: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDeviceInstancesCommandInput - {@link ListDeviceInstancesCommandInput}
 * @returns {@link ListDeviceInstancesCommandOutput}
 * @see {@link ListDeviceInstancesCommandInput} for command's `input` shape.
 * @see {@link ListDeviceInstancesCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for DeviceFarmClient's `config` shape.
 *
 * @throws {@link ArgumentException} (client fault)
 *  <p>An invalid argument was specified.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit was exceeded.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified entity was not found.</p>
 *
 * @throws {@link ServiceAccountException} (client fault)
 *  <p>There was a problem with the service account.</p>
 *
 * @throws {@link DeviceFarmServiceException}
 * <p>Base exception class for all service exceptions from DeviceFarm service.</p>
 *
 */
export class ListDeviceInstancesCommand extends $Command<
  ListDeviceInstancesCommandInput,
  ListDeviceInstancesCommandOutput,
  DeviceFarmClientResolvedConfig
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
  constructor(readonly input: ListDeviceInstancesCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DeviceFarmClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDeviceInstancesCommandInput, ListDeviceInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListDeviceInstancesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "ListDeviceInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "DeviceFarm_20150623",
        operation: "ListDeviceInstances",
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
  private serialize(input: ListDeviceInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListDeviceInstancesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDeviceInstancesCommandOutput> {
    return de_ListDeviceInstancesCommand(output, context);
  }
}
