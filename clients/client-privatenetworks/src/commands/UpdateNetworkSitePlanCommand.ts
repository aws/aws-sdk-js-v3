// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  UpdateNetworkSitePlanRequest,
  UpdateNetworkSiteResponse,
  UpdateNetworkSiteResponseFilterSensitiveLog,
} from "../models/models_0";
import { PrivateNetworksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PrivateNetworksClient";
import { de_UpdateNetworkSitePlanCommand, se_UpdateNetworkSitePlanCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link UpdateNetworkSitePlanCommand}.
 */
export interface UpdateNetworkSitePlanCommandInput extends UpdateNetworkSitePlanRequest {}
/**
 * @public
 *
 * The output of {@link UpdateNetworkSitePlanCommand}.
 */
export interface UpdateNetworkSitePlanCommandOutput extends UpdateNetworkSiteResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates the specified network site plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PrivateNetworksClient, UpdateNetworkSitePlanCommand } from "@aws-sdk/client-privatenetworks"; // ES Modules import
 * // const { PrivateNetworksClient, UpdateNetworkSitePlanCommand } = require("@aws-sdk/client-privatenetworks"); // CommonJS import
 * const client = new PrivateNetworksClient(config);
 * const input = { // UpdateNetworkSitePlanRequest
 *   networkSiteArn: "STRING_VALUE", // required
 *   pendingPlan: { // SitePlan
 *     resourceDefinitions: [ // NetworkResourceDefinitions
 *       { // NetworkResourceDefinition
 *         type: "STRING_VALUE", // required
 *         options: [ // Options
 *           { // NameValuePair
 *             name: "STRING_VALUE", // required
 *             value: "STRING_VALUE",
 *           },
 *         ],
 *         count: Number("int"), // required
 *       },
 *     ],
 *     options: [
 *       {
 *         name: "STRING_VALUE", // required
 *         value: "STRING_VALUE",
 *       },
 *     ],
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdateNetworkSitePlanCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateNetworkSitePlanCommandInput - {@link UpdateNetworkSitePlanCommandInput}
 * @returns {@link UpdateNetworkSitePlanCommandOutput}
 * @see {@link UpdateNetworkSitePlanCommandInput} for command's `input` shape.
 * @see {@link UpdateNetworkSitePlanCommandOutput} for command's `response` shape.
 * @see {@link PrivateNetworksClientResolvedConfig | config} for PrivateNetworksClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Information about an internal error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed validation.</p>
 *
 *
 */
export class UpdateNetworkSitePlanCommand extends $Command<
  UpdateNetworkSitePlanCommandInput,
  UpdateNetworkSitePlanCommandOutput,
  PrivateNetworksClientResolvedConfig
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
  constructor(readonly input: UpdateNetworkSitePlanCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PrivateNetworksClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateNetworkSitePlanCommandInput, UpdateNetworkSitePlanCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateNetworkSitePlanCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PrivateNetworksClient";
    const commandName = "UpdateNetworkSitePlanCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: UpdateNetworkSiteResponseFilterSensitiveLog,
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
  private serialize(input: UpdateNetworkSitePlanCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateNetworkSitePlanCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateNetworkSitePlanCommandOutput> {
    return de_UpdateNetworkSitePlanCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
