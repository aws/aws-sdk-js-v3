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
import { DescribeMountTargetsRequest, DescribeMountTargetsResponse } from "../models/models_0";
import { de_DescribeMountTargetsCommand, se_DescribeMountTargetsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeMountTargetsCommand}.
 */
export interface DescribeMountTargetsCommandInput extends DescribeMountTargetsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeMountTargetsCommand}.
 */
export interface DescribeMountTargetsCommandOutput extends DescribeMountTargetsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns the descriptions of all the current mount targets, or a specific mount target,
 *       for a file system. When requesting all of the current mount targets, the order of mount
 *       targets returned in the response is unspecified.</p>
 *          <p>This operation requires permissions for the
 *         <code>elasticfilesystem:DescribeMountTargets</code> action, on either the file system ID
 *       that you specify in <code>FileSystemId</code>, or on the file system of the mount target that
 *       you specify in <code>MountTargetId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, DescribeMountTargetsCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, DescribeMountTargetsCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const input = { // DescribeMountTargetsRequest
 *   MaxItems: Number("int"),
 *   Marker: "STRING_VALUE",
 *   FileSystemId: "STRING_VALUE",
 *   MountTargetId: "STRING_VALUE",
 *   AccessPointId: "STRING_VALUE",
 * };
 * const command = new DescribeMountTargetsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMountTargetsResponse
 * //   Marker: "STRING_VALUE",
 * //   MountTargets: [ // MountTargetDescriptions
 * //     { // MountTargetDescription
 * //       OwnerId: "STRING_VALUE",
 * //       MountTargetId: "STRING_VALUE", // required
 * //       FileSystemId: "STRING_VALUE", // required
 * //       SubnetId: "STRING_VALUE", // required
 * //       LifeCycleState: "creating" || "available" || "updating" || "deleting" || "deleted" || "error", // required
 * //       IpAddress: "STRING_VALUE",
 * //       NetworkInterfaceId: "STRING_VALUE",
 * //       AvailabilityZoneId: "STRING_VALUE",
 * //       AvailabilityZoneName: "STRING_VALUE",
 * //       VpcId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextMarker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeMountTargetsCommandInput - {@link DescribeMountTargetsCommandInput}
 * @returns {@link DescribeMountTargetsCommandOutput}
 * @see {@link DescribeMountTargetsCommandInput} for command's `input` shape.
 * @see {@link DescribeMountTargetsCommandOutput} for command's `response` shape.
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
 * @throws {@link MountTargetNotFound} (client fault)
 *  <p>Returned if there is no mount target with the specified ID found in the
 *             caller's Amazon Web Services account.</p>
 *
 * @throws {@link EFSServiceException}
 * <p>Base exception class for all service exceptions from EFS service.</p>
 *
 * @example To describe the mount targets for a file system
 * ```javascript
 * // This operation describes all of a file system's mount targets.
 * const input = {
 *   "FileSystemId": "fs-01234567"
 * };
 * const command = new DescribeMountTargetsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "MountTargets": [
 *     {
 *       "FileSystemId": "fs-01234567",
 *       "IpAddress": "192.0.0.2",
 *       "LifeCycleState": "available",
 *       "MountTargetId": "fsmt-12340abc",
 *       "NetworkInterfaceId": "eni-cedf6789",
 *       "OwnerId": "012345678912",
 *       "SubnetId": "subnet-1234abcd"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-the-mount-targets-for-a-file-system-1481849958584
 * ```
 *
 */
export class DescribeMountTargetsCommand extends $Command<
  DescribeMountTargetsCommandInput,
  DescribeMountTargetsCommandOutput,
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
  constructor(readonly input: DescribeMountTargetsCommandInput) {
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
  ): Handler<DescribeMountTargetsCommandInput, DescribeMountTargetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeMountTargetsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EFSClient";
    const commandName = "DescribeMountTargetsCommand";
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
  private serialize(input: DescribeMountTargetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeMountTargetsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeMountTargetsCommandOutput> {
    return de_DescribeMountTargetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
