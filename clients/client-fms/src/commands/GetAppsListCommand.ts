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

import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { GetAppsListRequest, GetAppsListResponse } from "../models/models_0";
import { de_GetAppsListCommand, se_GetAppsListCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetAppsListCommand}.
 */
export interface GetAppsListCommandInput extends GetAppsListRequest {}
/**
 * @public
 *
 * The output of {@link GetAppsListCommand}.
 */
export interface GetAppsListCommandOutput extends GetAppsListResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about the specified Firewall Manager applications list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, GetAppsListCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, GetAppsListCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const input = { // GetAppsListRequest
 *   ListId: "STRING_VALUE", // required
 *   DefaultList: true || false,
 * };
 * const command = new GetAppsListCommand(input);
 * const response = await client.send(command);
 * // { // GetAppsListResponse
 * //   AppsList: { // AppsListData
 * //     ListId: "STRING_VALUE",
 * //     ListName: "STRING_VALUE", // required
 * //     ListUpdateToken: "STRING_VALUE",
 * //     CreateTime: new Date("TIMESTAMP"),
 * //     LastUpdateTime: new Date("TIMESTAMP"),
 * //     AppsList: [ // AppsList // required
 * //       { // App
 * //         AppName: "STRING_VALUE", // required
 * //         Protocol: "STRING_VALUE", // required
 * //         Port: Number("long"), // required
 * //       },
 * //     ],
 * //     PreviousAppsList: { // PreviousAppsList
 * //       "<keys>": [
 * //         {
 * //           AppName: "STRING_VALUE", // required
 * //           Protocol: "STRING_VALUE", // required
 * //           Port: Number("long"), // required
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   AppsListArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetAppsListCommandInput - {@link GetAppsListCommandInput}
 * @returns {@link GetAppsListCommandOutput}
 * @see {@link GetAppsListCommandInput} for command's `input` shape.
 * @see {@link GetAppsListCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for FMSClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (client fault)
 *  <p>The operation failed because of a system problem, even though the request was valid. Retry
 *       your request.</p>
 *
 * @throws {@link InvalidOperationException} (client fault)
 *  <p>The operation failed because there was nothing to do or the operation wasn't possible. For example, you might have
 *         submitted an <code>AssociateAdminAccount</code> request for an account ID that
 *             was already set as the Firewall Manager administrator. Or you might have tried to access a Region
 *   that's disabled by default, and that you need to enable for the Firewall Manager
 *   administrator account and for Organizations before you can access it.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link FMSServiceException}
 * <p>Base exception class for all service exceptions from FMS service.</p>
 *
 */
export class GetAppsListCommand extends $Command<
  GetAppsListCommandInput,
  GetAppsListCommandOutput,
  FMSClientResolvedConfig
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
  constructor(readonly input: GetAppsListCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAppsListCommandInput, GetAppsListCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetAppsListCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FMSClient";
    const commandName = "GetAppsListCommand";
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
  private serialize(input: GetAppsListCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetAppsListCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAppsListCommandOutput> {
    return de_GetAppsListCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
