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

import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import { DescribeAccessPointsRequest, DescribeAccessPointsResponse } from "../models/models_0";
import { de_DescribeAccessPointsCommand, se_DescribeAccessPointsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAccessPointsCommand}.
 */
export interface DescribeAccessPointsCommandInput extends DescribeAccessPointsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAccessPointsCommand}.
 */
export interface DescribeAccessPointsCommandOutput extends DescribeAccessPointsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns the description of a specific Amazon EFS access point if the <code>AccessPointId</code> is provided.
 *       If you provide an EFS <code>FileSystemId</code>, it returns descriptions of all access points for that file system.
 *       You can provide either an <code>AccessPointId</code> or a <code>FileSystemId</code> in the request, but not both. </p>
 *          <p>This operation requires permissions for the <code>elasticfilesystem:DescribeAccessPoints</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, DescribeAccessPointsCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, DescribeAccessPointsCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const input = { // DescribeAccessPointsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   AccessPointId: "STRING_VALUE",
 *   FileSystemId: "STRING_VALUE",
 * };
 * const command = new DescribeAccessPointsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAccessPointsResponse
 * //   AccessPoints: [ // AccessPointDescriptions
 * //     { // AccessPointDescription
 * //       ClientToken: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Tags: [ // Tags
 * //         { // Tag
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       AccessPointId: "STRING_VALUE",
 * //       AccessPointArn: "STRING_VALUE",
 * //       FileSystemId: "STRING_VALUE",
 * //       PosixUser: { // PosixUser
 * //         Uid: Number("long"), // required
 * //         Gid: Number("long"), // required
 * //         SecondaryGids: [ // SecondaryGids
 * //           Number("long"),
 * //         ],
 * //       },
 * //       RootDirectory: { // RootDirectory
 * //         Path: "STRING_VALUE",
 * //         CreationInfo: { // CreationInfo
 * //           OwnerUid: Number("long"), // required
 * //           OwnerGid: Number("long"), // required
 * //           Permissions: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       OwnerId: "STRING_VALUE",
 * //       LifeCycleState: "creating" || "available" || "updating" || "deleting" || "deleted" || "error",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeAccessPointsCommandInput - {@link DescribeAccessPointsCommandInput}
 * @returns {@link DescribeAccessPointsCommandOutput}
 * @see {@link DescribeAccessPointsCommandInput} for command's `input` shape.
 * @see {@link DescribeAccessPointsCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for EFSClient's `config` shape.
 *
 * @throws {@link AccessPointNotFound} (client fault)
 *  <p>Returned if the specified <code>AccessPointId</code> value doesn't exist in the
 *             requester's Amazon Web Services account.</p>
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>Returned if the request is malformed or contains an error such as an invalid
 *             parameter value or a missing required parameter.</p>
 *
 * @throws {@link FileSystemNotFound} (client fault)
 *  <p>Returned if the specified <code>FileSystemId</code> value doesn't exist in the
 *             requester's Amazon Web Services account.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Returned if an error occurred on the server side.</p>
 *
 * @throws {@link EFSServiceException}
 * <p>Base exception class for all service exceptions from EFS service.</p>
 *
 */
export class DescribeAccessPointsCommand extends $Command<
  DescribeAccessPointsCommandInput,
  DescribeAccessPointsCommandOutput,
  EFSClientResolvedConfig
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
  constructor(readonly input: DescribeAccessPointsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EFSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAccessPointsCommandInput, DescribeAccessPointsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAccessPointsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EFSClient";
    const commandName = "DescribeAccessPointsCommand";
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
  private serialize(input: DescribeAccessPointsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeAccessPointsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAccessPointsCommandOutput> {
    return de_DescribeAccessPointsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
