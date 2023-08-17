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

import { DeleteNetworkSiteRequest, DeleteNetworkSiteResponse } from "../models/models_0";
import { PrivateNetworksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PrivateNetworksClient";
import { de_DeleteNetworkSiteCommand, se_DeleteNetworkSiteCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteNetworkSiteCommand}.
 */
export interface DeleteNetworkSiteCommandInput extends DeleteNetworkSiteRequest {}
/**
 * @public
 *
 * The output of {@link DeleteNetworkSiteCommand}.
 */
export interface DeleteNetworkSiteCommandOutput extends DeleteNetworkSiteResponse, __MetadataBearer {}

/**
 * @public
 * <p>Deletes the specified network site. Return the hardware after you delete the network
 *             site. You are responsible for minimum charges. For more information, see <a href="https://docs.aws.amazon.com/private-networks/latest/userguide/hardware-maintenance.html">Hardware
 *                 returns</a> in the <i>Amazon Web Services Private 5G User
 *             Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PrivateNetworksClient, DeleteNetworkSiteCommand } from "@aws-sdk/client-privatenetworks"; // ES Modules import
 * // const { PrivateNetworksClient, DeleteNetworkSiteCommand } = require("@aws-sdk/client-privatenetworks"); // CommonJS import
 * const client = new PrivateNetworksClient(config);
 * const input = { // DeleteNetworkSiteRequest
 *   networkSiteArn: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new DeleteNetworkSiteCommand(input);
 * const response = await client.send(command);
 * // { // DeleteNetworkSiteResponse
 * //   networkSite: { // NetworkSite
 * //     networkSiteArn: "STRING_VALUE", // required
 * //     networkSiteName: "STRING_VALUE", // required
 * //     description: "STRING_VALUE",
 * //     status: "STRING_VALUE", // required
 * //     statusReason: "STRING_VALUE",
 * //     networkArn: "STRING_VALUE", // required
 * //     pendingPlan: { // SitePlan
 * //       resourceDefinitions: [ // NetworkResourceDefinitions
 * //         { // NetworkResourceDefinition
 * //           type: "STRING_VALUE", // required
 * //           options: [ // Options
 * //             { // NameValuePair
 * //               name: "STRING_VALUE", // required
 * //               value: "STRING_VALUE",
 * //             },
 * //           ],
 * //           count: Number("int"), // required
 * //         },
 * //       ],
 * //       options: [
 * //         {
 * //           name: "STRING_VALUE", // required
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //     currentPlan: {
 * //       resourceDefinitions: [
 * //         {
 * //           type: "STRING_VALUE", // required
 * //           options: [
 * //             {
 * //               name: "STRING_VALUE", // required
 * //               value: "STRING_VALUE",
 * //             },
 * //           ],
 * //           count: Number("int"), // required
 * //         },
 * //       ],
 * //       options: [
 * //         {
 * //           name: "STRING_VALUE", // required
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //     createdAt: new Date("TIMESTAMP"),
 * //     availabilityZone: "STRING_VALUE",
 * //     availabilityZoneId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteNetworkSiteCommandInput - {@link DeleteNetworkSiteCommandInput}
 * @returns {@link DeleteNetworkSiteCommandOutput}
 * @see {@link DeleteNetworkSiteCommandInput} for command's `input` shape.
 * @see {@link DeleteNetworkSiteCommandOutput} for command's `response` shape.
 * @see {@link PrivateNetworksClientResolvedConfig | config} for PrivateNetworksClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have permission to perform this operation.</p>
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
 * @throws {@link PrivateNetworksServiceException}
 * <p>Base exception class for all service exceptions from PrivateNetworks service.</p>
 *
 */
export class DeleteNetworkSiteCommand extends $Command<
  DeleteNetworkSiteCommandInput,
  DeleteNetworkSiteCommandOutput,
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
  constructor(readonly input: DeleteNetworkSiteCommandInput) {
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
  ): Handler<DeleteNetworkSiteCommandInput, DeleteNetworkSiteCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteNetworkSiteCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PrivateNetworksClient";
    const commandName = "DeleteNetworkSiteCommand";
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
  private serialize(input: DeleteNetworkSiteCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteNetworkSiteCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteNetworkSiteCommandOutput> {
    return de_DeleteNetworkSiteCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
