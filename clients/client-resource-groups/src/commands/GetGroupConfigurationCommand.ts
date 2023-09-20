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

import { GetGroupConfigurationInput, GetGroupConfigurationOutput } from "../models/models_0";
import { de_GetGroupConfigurationCommand, se_GetGroupConfigurationCommand } from "../protocols/Aws_restJson1";
import { ResourceGroupsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResourceGroupsClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetGroupConfigurationCommand}.
 */
export interface GetGroupConfigurationCommandInput extends GetGroupConfigurationInput {}
/**
 * @public
 *
 * The output of {@link GetGroupConfigurationCommand}.
 */
export interface GetGroupConfigurationCommandOutput extends GetGroupConfigurationOutput, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the service configuration associated with the specified resource group. For
 *             details about the service configuration syntax, see <a href="https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html">Service configurations for Resource Groups</a>.</p>
 *          <p>
 *             <b>Minimum permissions</b>
 *          </p>
 *          <p>To run this command, you must have the following permissions:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>resource-groups:GetGroupConfiguration</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceGroupsClient, GetGroupConfigurationCommand } from "@aws-sdk/client-resource-groups"; // ES Modules import
 * // const { ResourceGroupsClient, GetGroupConfigurationCommand } = require("@aws-sdk/client-resource-groups"); // CommonJS import
 * const client = new ResourceGroupsClient(config);
 * const input = { // GetGroupConfigurationInput
 *   Group: "STRING_VALUE",
 * };
 * const command = new GetGroupConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetGroupConfigurationOutput
 * //   GroupConfiguration: { // GroupConfiguration
 * //     Configuration: [ // GroupConfigurationList
 * //       { // GroupConfigurationItem
 * //         Type: "STRING_VALUE", // required
 * //         Parameters: [ // GroupParameterList
 * //           { // GroupConfigurationParameter
 * //             Name: "STRING_VALUE", // required
 * //             Values: [ // GroupConfigurationParameterValueList
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     ProposedConfiguration: [
 * //       {
 * //         Type: "STRING_VALUE", // required
 * //         Parameters: [
 * //           {
 * //             Name: "STRING_VALUE", // required
 * //             Values: [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     Status: "UPDATING" || "UPDATE_COMPLETE" || "UPDATE_FAILED",
 * //     FailureReason: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetGroupConfigurationCommandInput - {@link GetGroupConfigurationCommandInput}
 * @returns {@link GetGroupConfigurationCommandOutput}
 * @see {@link GetGroupConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetGroupConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ResourceGroupsClientResolvedConfig | config} for ResourceGroupsClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request includes one or more parameters that violate validation rules.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The caller isn't authorized to make the request. Check permissions.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal error occurred while processing the request. Try again later.</p>
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *  <p>The request uses an HTTP method that isn't allowed for the specified resource.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the specified resources don't exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>You've exceeded throttling limits by making too many requests in a period of
 *             time.</p>
 *
 * @throws {@link ResourceGroupsServiceException}
 * <p>Base exception class for all service exceptions from ResourceGroups service.</p>
 *
 */
export class GetGroupConfigurationCommand extends $Command<
  GetGroupConfigurationCommandInput,
  GetGroupConfigurationCommandOutput,
  ResourceGroupsClientResolvedConfig
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
  constructor(readonly input: GetGroupConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ResourceGroupsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetGroupConfigurationCommandInput, GetGroupConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetGroupConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResourceGroupsClient";
    const commandName = "GetGroupConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Ardi",
        operation: "GetGroupConfiguration",
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
  private serialize(input: GetGroupConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetGroupConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetGroupConfigurationCommandOutput> {
    return de_GetGroupConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
