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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  GetNetworkInsightsAccessScopeContentRequest,
  GetNetworkInsightsAccessScopeContentResult,
} from "../models/models_5";
import {
  de_GetNetworkInsightsAccessScopeContentCommand,
  se_GetNetworkInsightsAccessScopeContentCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetNetworkInsightsAccessScopeContentCommand}.
 */
export interface GetNetworkInsightsAccessScopeContentCommandInput extends GetNetworkInsightsAccessScopeContentRequest {}
/**
 * @public
 *
 * The output of {@link GetNetworkInsightsAccessScopeContentCommand}.
 */
export interface GetNetworkInsightsAccessScopeContentCommandOutput
  extends GetNetworkInsightsAccessScopeContentResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets the content for the specified Network Access Scope.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetNetworkInsightsAccessScopeContentCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetNetworkInsightsAccessScopeContentCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // GetNetworkInsightsAccessScopeContentRequest
 *   NetworkInsightsAccessScopeId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new GetNetworkInsightsAccessScopeContentCommand(input);
 * const response = await client.send(command);
 * // { // GetNetworkInsightsAccessScopeContentResult
 * //   NetworkInsightsAccessScopeContent: { // NetworkInsightsAccessScopeContent
 * //     NetworkInsightsAccessScopeId: "STRING_VALUE",
 * //     MatchPaths: [ // AccessScopePathList
 * //       { // AccessScopePath
 * //         Source: { // PathStatement
 * //           PacketHeaderStatement: { // PacketHeaderStatement
 * //             SourceAddresses: [ // ValueStringList
 * //               "STRING_VALUE",
 * //             ],
 * //             DestinationAddresses: [
 * //               "STRING_VALUE",
 * //             ],
 * //             SourcePorts: [
 * //               "STRING_VALUE",
 * //             ],
 * //             DestinationPorts: [
 * //               "STRING_VALUE",
 * //             ],
 * //             SourcePrefixLists: [
 * //               "STRING_VALUE",
 * //             ],
 * //             DestinationPrefixLists: "<ValueStringList>",
 * //             Protocols: [ // ProtocolList
 * //               "tcp" || "udp",
 * //             ],
 * //           },
 * //           ResourceStatement: { // ResourceStatement
 * //             Resources: "<ValueStringList>",
 * //             ResourceTypes: "<ValueStringList>",
 * //           },
 * //         },
 * //         Destination: {
 * //           PacketHeaderStatement: {
 * //             SourceAddresses: "<ValueStringList>",
 * //             DestinationAddresses: "<ValueStringList>",
 * //             SourcePorts: "<ValueStringList>",
 * //             DestinationPorts: "<ValueStringList>",
 * //             SourcePrefixLists: "<ValueStringList>",
 * //             DestinationPrefixLists: "<ValueStringList>",
 * //             Protocols: [
 * //               "tcp" || "udp",
 * //             ],
 * //           },
 * //           ResourceStatement: {
 * //             Resources: "<ValueStringList>",
 * //             ResourceTypes: "<ValueStringList>",
 * //           },
 * //         },
 * //         ThroughResources: [ // ThroughResourcesStatementList
 * //           { // ThroughResourcesStatement
 * //             ResourceStatement: {
 * //               Resources: "<ValueStringList>",
 * //               ResourceTypes: "<ValueStringList>",
 * //             },
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     ExcludePaths: [
 * //       {
 * //         Source: {
 * //           PacketHeaderStatement: {
 * //             SourceAddresses: "<ValueStringList>",
 * //             DestinationAddresses: "<ValueStringList>",
 * //             SourcePorts: "<ValueStringList>",
 * //             DestinationPorts: "<ValueStringList>",
 * //             SourcePrefixLists: "<ValueStringList>",
 * //             DestinationPrefixLists: "<ValueStringList>",
 * //             Protocols: [
 * //               "tcp" || "udp",
 * //             ],
 * //           },
 * //           ResourceStatement: {
 * //             Resources: "<ValueStringList>",
 * //             ResourceTypes: "<ValueStringList>",
 * //           },
 * //         },
 * //         Destination: {
 * //           PacketHeaderStatement: {
 * //             SourceAddresses: "<ValueStringList>",
 * //             DestinationAddresses: "<ValueStringList>",
 * //             SourcePorts: "<ValueStringList>",
 * //             DestinationPorts: "<ValueStringList>",
 * //             SourcePrefixLists: "<ValueStringList>",
 * //             DestinationPrefixLists: "<ValueStringList>",
 * //             Protocols: [
 * //               "tcp" || "udp",
 * //             ],
 * //           },
 * //           ResourceStatement: {
 * //             Resources: "<ValueStringList>",
 * //             ResourceTypes: "<ValueStringList>",
 * //           },
 * //         },
 * //         ThroughResources: [
 * //           {
 * //             ResourceStatement: "<ResourceStatement>",
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetNetworkInsightsAccessScopeContentCommandInput - {@link GetNetworkInsightsAccessScopeContentCommandInput}
 * @returns {@link GetNetworkInsightsAccessScopeContentCommandOutput}
 * @see {@link GetNetworkInsightsAccessScopeContentCommandInput} for command's `input` shape.
 * @see {@link GetNetworkInsightsAccessScopeContentCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class GetNetworkInsightsAccessScopeContentCommand extends $Command<
  GetNetworkInsightsAccessScopeContentCommandInput,
  GetNetworkInsightsAccessScopeContentCommandOutput,
  EC2ClientResolvedConfig
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
  constructor(readonly input: GetNetworkInsightsAccessScopeContentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetNetworkInsightsAccessScopeContentCommandInput, GetNetworkInsightsAccessScopeContentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetNetworkInsightsAccessScopeContentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetNetworkInsightsAccessScopeContentCommand";
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
  private serialize(
    input: GetNetworkInsightsAccessScopeContentCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetNetworkInsightsAccessScopeContentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetNetworkInsightsAccessScopeContentCommandOutput> {
    return de_GetNetworkInsightsAccessScopeContentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
