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

import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { DescribeAddonConfigurationRequest, DescribeAddonConfigurationResponse } from "../models/models_0";
import { de_DescribeAddonConfigurationCommand, se_DescribeAddonConfigurationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAddonConfigurationCommand}.
 */
export interface DescribeAddonConfigurationCommandInput extends DescribeAddonConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAddonConfigurationCommand}.
 */
export interface DescribeAddonConfigurationCommandOutput extends DescribeAddonConfigurationResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns configuration options.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, DescribeAddonConfigurationCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, DescribeAddonConfigurationCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const input = { // DescribeAddonConfigurationRequest
 *   addonName: "STRING_VALUE", // required
 *   addonVersion: "STRING_VALUE", // required
 * };
 * const command = new DescribeAddonConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAddonConfigurationResponse
 * //   addonName: "STRING_VALUE",
 * //   addonVersion: "STRING_VALUE",
 * //   configurationSchema: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeAddonConfigurationCommandInput - {@link DescribeAddonConfigurationCommandInput}
 * @returns {@link DescribeAddonConfigurationCommandOutput}
 * @see {@link DescribeAddonConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeAddonConfigurationCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for EKSClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found. You can view your available clusters with
 *                 <a>ListClusters</a>. You can view your available managed node groups with
 *                 <a>ListNodegroups</a>. Amazon EKS clusters and node groups are
 *             Region-specific.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link EKSServiceException}
 * <p>Base exception class for all service exceptions from EKS service.</p>
 *
 */
export class DescribeAddonConfigurationCommand extends $Command<
  DescribeAddonConfigurationCommandInput,
  DescribeAddonConfigurationCommandOutput,
  EKSClientResolvedConfig
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
  constructor(readonly input: DescribeAddonConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EKSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAddonConfigurationCommandInput, DescribeAddonConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAddonConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EKSClient";
    const commandName = "DescribeAddonConfigurationCommand";
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
  private serialize(input: DescribeAddonConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeAddonConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAddonConfigurationCommandOutput> {
    return de_DescribeAddonConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
