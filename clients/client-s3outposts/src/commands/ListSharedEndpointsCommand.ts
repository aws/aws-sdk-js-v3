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

import { ListSharedEndpointsRequest, ListSharedEndpointsResult } from "../models/models_0";
import { de_ListSharedEndpointsCommand, se_ListSharedEndpointsCommand } from "../protocols/Aws_restJson1";
import { S3OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3OutpostsClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListSharedEndpointsCommand}.
 */
export interface ListSharedEndpointsCommandInput extends ListSharedEndpointsRequest {}
/**
 * @public
 *
 * The output of {@link ListSharedEndpointsCommand}.
 */
export interface ListSharedEndpointsCommandOutput extends ListSharedEndpointsResult, __MetadataBearer {}

/**
 * @public
 * <p>Lists all endpoints associated with an Outpost that has been shared by Amazon Web Services Resource Access Manager (RAM).</p>
 *          <p>Related actions include:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_CreateEndpoint.html">CreateEndpoint</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_DeleteEndpoint.html">DeleteEndpoint</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3OutpostsClient, ListSharedEndpointsCommand } from "@aws-sdk/client-s3outposts"; // ES Modules import
 * // const { S3OutpostsClient, ListSharedEndpointsCommand } = require("@aws-sdk/client-s3outposts"); // CommonJS import
 * const client = new S3OutpostsClient(config);
 * const input = { // ListSharedEndpointsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   OutpostId: "STRING_VALUE", // required
 * };
 * const command = new ListSharedEndpointsCommand(input);
 * const response = await client.send(command);
 * // { // ListSharedEndpointsResult
 * //   Endpoints: [ // Endpoints
 * //     { // Endpoint
 * //       EndpointArn: "STRING_VALUE",
 * //       OutpostsId: "STRING_VALUE",
 * //       CidrBlock: "STRING_VALUE",
 * //       Status: "Pending" || "Available" || "Deleting" || "Create_Failed" || "Delete_Failed",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       NetworkInterfaces: [ // NetworkInterfaces
 * //         { // NetworkInterface
 * //           NetworkInterfaceId: "STRING_VALUE",
 * //         },
 * //       ],
 * //       VpcId: "STRING_VALUE",
 * //       SubnetId: "STRING_VALUE",
 * //       SecurityGroupId: "STRING_VALUE",
 * //       AccessType: "Private" || "CustomerOwnedIp",
 * //       CustomerOwnedIpv4Pool: "STRING_VALUE",
 * //       FailedReason: { // FailedReason
 * //         ErrorCode: "STRING_VALUE",
 * //         Message: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSharedEndpointsCommandInput - {@link ListSharedEndpointsCommandInput}
 * @returns {@link ListSharedEndpointsCommandOutput}
 * @see {@link ListSharedEndpointsCommandInput} for command's `input` shape.
 * @see {@link ListSharedEndpointsCommandOutput} for command's `response` shape.
 * @see {@link S3OutpostsClientResolvedConfig | config} for S3OutpostsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access was denied for this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There was an exception with the internal server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There was an exception validating this data.</p>
 *
 * @throws {@link S3OutpostsServiceException}
 * <p>Base exception class for all service exceptions from S3Outposts service.</p>
 *
 */
export class ListSharedEndpointsCommand extends $Command<
  ListSharedEndpointsCommandInput,
  ListSharedEndpointsCommandOutput,
  S3OutpostsClientResolvedConfig
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
  constructor(readonly input: ListSharedEndpointsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3OutpostsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSharedEndpointsCommandInput, ListSharedEndpointsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSharedEndpointsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3OutpostsClient";
    const commandName = "ListSharedEndpointsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "S3Outposts",
        operation: "ListSharedEndpoints",
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
  private serialize(input: ListSharedEndpointsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListSharedEndpointsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSharedEndpointsCommandOutput> {
    return de_ListSharedEndpointsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
