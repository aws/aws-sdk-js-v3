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
import { DescribeAddonVersionsRequest, DescribeAddonVersionsResponse } from "../models/models_0";
import { de_DescribeAddonVersionsCommand, se_DescribeAddonVersionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAddonVersionsCommand}.
 */
export interface DescribeAddonVersionsCommandInput extends DescribeAddonVersionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAddonVersionsCommand}.
 */
export interface DescribeAddonVersionsCommandOutput extends DescribeAddonVersionsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes the versions for an add-on. Information such as the Kubernetes versions that you
 *             can use the add-on with, the <code>owner</code>, <code>publisher</code>, and the
 *                 <code>type</code> of the add-on are returned. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, DescribeAddonVersionsCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, DescribeAddonVersionsCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const input = { // DescribeAddonVersionsRequest
 *   kubernetesVersion: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   addonName: "STRING_VALUE",
 *   types: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   publishers: [
 *     "STRING_VALUE",
 *   ],
 *   owners: [
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeAddonVersionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAddonVersionsResponse
 * //   addons: [ // Addons
 * //     { // AddonInfo
 * //       addonName: "STRING_VALUE",
 * //       type: "STRING_VALUE",
 * //       addonVersions: [ // AddonVersionInfoList
 * //         { // AddonVersionInfo
 * //           addonVersion: "STRING_VALUE",
 * //           architecture: [ // StringList
 * //             "STRING_VALUE",
 * //           ],
 * //           compatibilities: [ // Compatibilities
 * //             { // Compatibility
 * //               clusterVersion: "STRING_VALUE",
 * //               platformVersions: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               defaultVersion: true || false,
 * //             },
 * //           ],
 * //           requiresConfiguration: true || false,
 * //         },
 * //       ],
 * //       publisher: "STRING_VALUE",
 * //       owner: "STRING_VALUE",
 * //       marketplaceInformation: { // MarketplaceInformation
 * //         productId: "STRING_VALUE",
 * //         productUrl: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeAddonVersionsCommandInput - {@link DescribeAddonVersionsCommandInput}
 * @returns {@link DescribeAddonVersionsCommandOutput}
 * @see {@link DescribeAddonVersionsCommandInput} for command's `input` shape.
 * @see {@link DescribeAddonVersionsCommandOutput} for command's `response` shape.
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
export class DescribeAddonVersionsCommand extends $Command<
  DescribeAddonVersionsCommandInput,
  DescribeAddonVersionsCommandOutput,
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
  constructor(readonly input: DescribeAddonVersionsCommandInput) {
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
  ): Handler<DescribeAddonVersionsCommandInput, DescribeAddonVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAddonVersionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EKSClient";
    const commandName = "DescribeAddonVersionsCommand";
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
  private serialize(input: DescribeAddonVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeAddonVersionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAddonVersionsCommandOutput> {
    return de_DescribeAddonVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
