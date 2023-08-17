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

import { UpdateVpcAttachmentRequest, UpdateVpcAttachmentResponse } from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { de_UpdateVpcAttachmentCommand, se_UpdateVpcAttachmentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateVpcAttachmentCommand}.
 */
export interface UpdateVpcAttachmentCommandInput extends UpdateVpcAttachmentRequest {}
/**
 * @public
 *
 * The output of {@link UpdateVpcAttachmentCommand}.
 */
export interface UpdateVpcAttachmentCommandOutput extends UpdateVpcAttachmentResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates a VPC attachment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, UpdateVpcAttachmentCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, UpdateVpcAttachmentCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const input = { // UpdateVpcAttachmentRequest
 *   AttachmentId: "STRING_VALUE", // required
 *   AddSubnetArns: [ // SubnetArnList
 *     "STRING_VALUE",
 *   ],
 *   RemoveSubnetArns: [
 *     "STRING_VALUE",
 *   ],
 *   Options: { // VpcOptions
 *     Ipv6Support: true || false,
 *     ApplianceModeSupport: true || false,
 *   },
 * };
 * const command = new UpdateVpcAttachmentCommand(input);
 * const response = await client.send(command);
 * // { // UpdateVpcAttachmentResponse
 * //   VpcAttachment: { // VpcAttachment
 * //     Attachment: { // Attachment
 * //       CoreNetworkId: "STRING_VALUE",
 * //       CoreNetworkArn: "STRING_VALUE",
 * //       AttachmentId: "STRING_VALUE",
 * //       OwnerAccountId: "STRING_VALUE",
 * //       AttachmentType: "CONNECT" || "SITE_TO_SITE_VPN" || "VPC" || "TRANSIT_GATEWAY_ROUTE_TABLE",
 * //       State: "REJECTED" || "PENDING_ATTACHMENT_ACCEPTANCE" || "CREATING" || "FAILED" || "AVAILABLE" || "UPDATING" || "PENDING_NETWORK_UPDATE" || "PENDING_TAG_ACCEPTANCE" || "DELETING",
 * //       EdgeLocation: "STRING_VALUE",
 * //       ResourceArn: "STRING_VALUE",
 * //       AttachmentPolicyRuleNumber: Number("int"),
 * //       SegmentName: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       ProposedSegmentChange: { // ProposedSegmentChange
 * //         Tags: [
 * //           {
 * //             Key: "STRING_VALUE",
 * //             Value: "STRING_VALUE",
 * //           },
 * //         ],
 * //         AttachmentPolicyRuleNumber: Number("int"),
 * //         SegmentName: "STRING_VALUE",
 * //       },
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //     },
 * //     SubnetArns: [ // SubnetArnList
 * //       "STRING_VALUE",
 * //     ],
 * //     Options: { // VpcOptions
 * //       Ipv6Support: true || false,
 * //       ApplianceModeSupport: true || false,
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateVpcAttachmentCommandInput - {@link UpdateVpcAttachmentCommandInput}
 * @returns {@link UpdateVpcAttachmentCommandOutput}
 * @see {@link UpdateVpcAttachmentCommandInput} for command's `input` shape.
 * @see {@link UpdateVpcAttachmentCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict processing the request. Updating or deleting the resource can
 *             cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints.</p>
 *
 * @throws {@link NetworkManagerServiceException}
 * <p>Base exception class for all service exceptions from NetworkManager service.</p>
 *
 */
export class UpdateVpcAttachmentCommand extends $Command<
  UpdateVpcAttachmentCommandInput,
  UpdateVpcAttachmentCommandOutput,
  NetworkManagerClientResolvedConfig
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
  constructor(readonly input: UpdateVpcAttachmentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NetworkManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateVpcAttachmentCommandInput, UpdateVpcAttachmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateVpcAttachmentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkManagerClient";
    const commandName = "UpdateVpcAttachmentCommand";
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
  private serialize(input: UpdateVpcAttachmentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateVpcAttachmentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateVpcAttachmentCommandOutput> {
    return de_UpdateVpcAttachmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
