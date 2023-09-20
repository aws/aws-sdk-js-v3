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

import {
  CreateNetworkSiteRequest,
  CreateNetworkSiteRequestFilterSensitiveLog,
  CreateNetworkSiteResponse,
  CreateNetworkSiteResponseFilterSensitiveLog,
} from "../models/models_0";
import { PrivateNetworksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PrivateNetworksClient";
import { de_CreateNetworkSiteCommand, se_CreateNetworkSiteCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateNetworkSiteCommand}.
 */
export interface CreateNetworkSiteCommandInput extends CreateNetworkSiteRequest {}
/**
 * @public
 *
 * The output of {@link CreateNetworkSiteCommand}.
 */
export interface CreateNetworkSiteCommandOutput extends CreateNetworkSiteResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a network site.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PrivateNetworksClient, CreateNetworkSiteCommand } from "@aws-sdk/client-privatenetworks"; // ES Modules import
 * // const { PrivateNetworksClient, CreateNetworkSiteCommand } = require("@aws-sdk/client-privatenetworks"); // CommonJS import
 * const client = new PrivateNetworksClient(config);
 * const input = { // CreateNetworkSiteRequest
 *   networkSiteName: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   networkArn: "STRING_VALUE", // required
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
 *   availabilityZone: "STRING_VALUE",
 *   availabilityZoneId: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateNetworkSiteCommand(input);
 * const response = await client.send(command);
 * // { // CreateNetworkSiteResponse
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
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateNetworkSiteCommandInput - {@link CreateNetworkSiteCommandInput}
 * @returns {@link CreateNetworkSiteCommandOutput}
 * @see {@link CreateNetworkSiteCommandInput} for command's `input` shape.
 * @see {@link CreateNetworkSiteCommandOutput} for command's `response` shape.
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
 * @throws {@link PrivateNetworksServiceException}
 * <p>Base exception class for all service exceptions from PrivateNetworks service.</p>
 *
 */
export class CreateNetworkSiteCommand extends $Command<
  CreateNetworkSiteCommandInput,
  CreateNetworkSiteCommandOutput,
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
  constructor(readonly input: CreateNetworkSiteCommandInput) {
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
  ): Handler<CreateNetworkSiteCommandInput, CreateNetworkSiteCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateNetworkSiteCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PrivateNetworksClient";
    const commandName = "CreateNetworkSiteCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateNetworkSiteRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateNetworkSiteResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "E5GNetworkControllerLambda",
        operation: "CreateNetworkSite",
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
  private serialize(input: CreateNetworkSiteCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateNetworkSiteCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateNetworkSiteCommandOutput> {
    return de_CreateNetworkSiteCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
