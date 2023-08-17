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

import { ListMobileDeviceAccessRulesRequest, ListMobileDeviceAccessRulesResponse } from "../models/models_0";
import { de_ListMobileDeviceAccessRulesCommand, se_ListMobileDeviceAccessRulesCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListMobileDeviceAccessRulesCommand}.
 */
export interface ListMobileDeviceAccessRulesCommandInput extends ListMobileDeviceAccessRulesRequest {}
/**
 * @public
 *
 * The output of {@link ListMobileDeviceAccessRulesCommand}.
 */
export interface ListMobileDeviceAccessRulesCommandOutput
  extends ListMobileDeviceAccessRulesResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Lists the mobile device access rules for the specified WorkMail organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, ListMobileDeviceAccessRulesCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, ListMobileDeviceAccessRulesCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const input = { // ListMobileDeviceAccessRulesRequest
 *   OrganizationId: "STRING_VALUE", // required
 * };
 * const command = new ListMobileDeviceAccessRulesCommand(input);
 * const response = await client.send(command);
 * // { // ListMobileDeviceAccessRulesResponse
 * //   Rules: [ // MobileDeviceAccessRulesList
 * //     { // MobileDeviceAccessRule
 * //       MobileDeviceAccessRuleId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Effect: "ALLOW" || "DENY",
 * //       DeviceTypes: [ // DeviceTypeList
 * //         "STRING_VALUE",
 * //       ],
 * //       NotDeviceTypes: [
 * //         "STRING_VALUE",
 * //       ],
 * //       DeviceModels: [ // DeviceModelList
 * //         "STRING_VALUE",
 * //       ],
 * //       NotDeviceModels: [
 * //         "STRING_VALUE",
 * //       ],
 * //       DeviceOperatingSystems: [ // DeviceOperatingSystemList
 * //         "STRING_VALUE",
 * //       ],
 * //       NotDeviceOperatingSystems: [
 * //         "STRING_VALUE",
 * //       ],
 * //       DeviceUserAgents: [ // DeviceUserAgentList
 * //         "STRING_VALUE",
 * //       ],
 * //       NotDeviceUserAgents: [
 * //         "STRING_VALUE",
 * //       ],
 * //       DateCreated: new Date("TIMESTAMP"),
 * //       DateModified: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListMobileDeviceAccessRulesCommandInput - {@link ListMobileDeviceAccessRulesCommandInput}
 * @returns {@link ListMobileDeviceAccessRulesCommandOutput}
 * @see {@link ListMobileDeviceAccessRulesCommandInput} for command's `input` shape.
 * @see {@link ListMobileDeviceAccessRulesCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *  <p>An operation received a valid organization identifier that either doesn't belong or
 *          exist in the system.</p>
 *
 * @throws {@link OrganizationStateException} (client fault)
 *  <p>The organization must have a valid state to perform certain
 *          operations on the organization or its members.</p>
 *
 * @throws {@link WorkMailServiceException}
 * <p>Base exception class for all service exceptions from WorkMail service.</p>
 *
 */
export class ListMobileDeviceAccessRulesCommand extends $Command<
  ListMobileDeviceAccessRulesCommandInput,
  ListMobileDeviceAccessRulesCommandOutput,
  WorkMailClientResolvedConfig
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
  constructor(readonly input: ListMobileDeviceAccessRulesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkMailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListMobileDeviceAccessRulesCommandInput, ListMobileDeviceAccessRulesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListMobileDeviceAccessRulesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkMailClient";
    const commandName = "ListMobileDeviceAccessRulesCommand";
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
  private serialize(input: ListMobileDeviceAccessRulesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListMobileDeviceAccessRulesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListMobileDeviceAccessRulesCommandOutput> {
    return de_ListMobileDeviceAccessRulesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
