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

import { ListMobileDeviceAccessOverridesRequest, ListMobileDeviceAccessOverridesResponse } from "../models/models_0";
import {
  de_ListMobileDeviceAccessOverridesCommand,
  se_ListMobileDeviceAccessOverridesCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListMobileDeviceAccessOverridesCommand}.
 */
export interface ListMobileDeviceAccessOverridesCommandInput extends ListMobileDeviceAccessOverridesRequest {}
/**
 * @public
 *
 * The output of {@link ListMobileDeviceAccessOverridesCommand}.
 */
export interface ListMobileDeviceAccessOverridesCommandOutput
  extends ListMobileDeviceAccessOverridesResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Lists all the mobile device access overrides for any given combination of WorkMail organization, user, or device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, ListMobileDeviceAccessOverridesCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, ListMobileDeviceAccessOverridesCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const input = { // ListMobileDeviceAccessOverridesRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   UserId: "STRING_VALUE",
 *   DeviceId: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListMobileDeviceAccessOverridesCommand(input);
 * const response = await client.send(command);
 * // { // ListMobileDeviceAccessOverridesResponse
 * //   Overrides: [ // MobileDeviceAccessOverridesList
 * //     { // MobileDeviceAccessOverride
 * //       UserId: "STRING_VALUE",
 * //       DeviceId: "STRING_VALUE",
 * //       Effect: "ALLOW" || "DENY",
 * //       Description: "STRING_VALUE",
 * //       DateCreated: new Date("TIMESTAMP"),
 * //       DateModified: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMobileDeviceAccessOverridesCommandInput - {@link ListMobileDeviceAccessOverridesCommandInput}
 * @returns {@link ListMobileDeviceAccessOverridesCommandOutput}
 * @see {@link ListMobileDeviceAccessOverridesCommandInput} for command's `input` shape.
 * @see {@link ListMobileDeviceAccessOverridesCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>The identifier supplied for the user, group, or resource does not exist in your
 *          organization.</p>
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
export class ListMobileDeviceAccessOverridesCommand extends $Command<
  ListMobileDeviceAccessOverridesCommandInput,
  ListMobileDeviceAccessOverridesCommandOutput,
  WorkMailClientResolvedConfig
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
  constructor(readonly input: ListMobileDeviceAccessOverridesCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkMailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListMobileDeviceAccessOverridesCommandInput, ListMobileDeviceAccessOverridesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListMobileDeviceAccessOverridesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkMailClient";
    const commandName = "ListMobileDeviceAccessOverridesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "WorkMailService",
        operation: "ListMobileDeviceAccessOverrides",
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
  private serialize(
    input: ListMobileDeviceAccessOverridesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListMobileDeviceAccessOverridesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListMobileDeviceAccessOverridesCommandOutput> {
    return de_ListMobileDeviceAccessOverridesCommand(output, context);
  }
}
