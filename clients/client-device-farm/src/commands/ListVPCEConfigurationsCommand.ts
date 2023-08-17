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

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { ListVPCEConfigurationsRequest, ListVPCEConfigurationsResult } from "../models/models_0";
import { de_ListVPCEConfigurationsCommand, se_ListVPCEConfigurationsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListVPCEConfigurationsCommand}.
 */
export interface ListVPCEConfigurationsCommandInput extends ListVPCEConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListVPCEConfigurationsCommand}.
 */
export interface ListVPCEConfigurationsCommandOutput extends ListVPCEConfigurationsResult, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about all Amazon Virtual Private Cloud (VPC) endpoint
 *             configurations in the AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListVPCEConfigurationsCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ListVPCEConfigurationsCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const input = { // ListVPCEConfigurationsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListVPCEConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListVPCEConfigurationsResult
 * //   vpceConfigurations: [ // VPCEConfigurations
 * //     { // VPCEConfiguration
 * //       arn: "STRING_VALUE",
 * //       vpceConfigurationName: "STRING_VALUE",
 * //       vpceServiceName: "STRING_VALUE",
 * //       serviceDnsName: "STRING_VALUE",
 * //       vpceConfigurationDescription: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListVPCEConfigurationsCommandInput - {@link ListVPCEConfigurationsCommandInput}
 * @returns {@link ListVPCEConfigurationsCommandOutput}
 * @see {@link ListVPCEConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListVPCEConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for DeviceFarmClient's `config` shape.
 *
 * @throws {@link ArgumentException} (client fault)
 *  <p>An invalid argument was specified.</p>
 *
 * @throws {@link ServiceAccountException} (client fault)
 *  <p>There was a problem with the service account.</p>
 *
 * @throws {@link DeviceFarmServiceException}
 * <p>Base exception class for all service exceptions from DeviceFarm service.</p>
 *
 */
export class ListVPCEConfigurationsCommand extends $Command<
  ListVPCEConfigurationsCommandInput,
  ListVPCEConfigurationsCommandOutput,
  DeviceFarmClientResolvedConfig
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
  constructor(readonly input: ListVPCEConfigurationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DeviceFarmClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListVPCEConfigurationsCommandInput, ListVPCEConfigurationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListVPCEConfigurationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "ListVPCEConfigurationsCommand";
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
  private serialize(input: ListVPCEConfigurationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListVPCEConfigurationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListVPCEConfigurationsCommandOutput> {
    return de_ListVPCEConfigurationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
