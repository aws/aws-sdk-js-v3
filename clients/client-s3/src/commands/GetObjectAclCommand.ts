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

import { GetObjectAclOutput, GetObjectAclRequest } from "../models/models_0";
import { de_GetObjectAclCommand, se_GetObjectAclCommand } from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetObjectAclCommand}.
 */
export interface GetObjectAclCommandInput extends GetObjectAclRequest {}
/**
 * @public
 *
 * The output of {@link GetObjectAclCommand}.
 */
export interface GetObjectAclCommandOutput extends GetObjectAclOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns the access control list (ACL) of an object. To use this operation, you must have
 *             <code>s3:GetObjectAcl</code> permissions or <code>READ_ACP</code> access to the object.
 *          For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#acl-access-policy-permission-mapping">Mapping of ACL permissions and access policy permissions</a> in the <i>Amazon S3
 *             User Guide</i>
 *          </p>
 *          <p>This action is not supported by Amazon S3 on Outposts.</p>
 *          <p>By default, GET returns ACL information about the current version of an object. To
 *          return ACL information about a different version, use the versionId subresource.</p>
 *          <note>
 *             <p>If your bucket uses the bucket owner enforced setting for S3 Object Ownership,
 *             requests to read ACLs are still supported and return the
 *                <code>bucket-owner-full-control</code> ACL with the owner being the account that
 *             created the bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html"> Controlling object
 *                ownership and disabling ACLs</a> in the
 *             <i>Amazon S3 User Guide</i>.</p>
 *          </note>
 *          <p>The following operations are related to <code>GetObjectAcl</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html">GetObject</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAttributes.html">GetObjectAttributes</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html">DeleteObject</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html">PutObject</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetObjectAclCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetObjectAclCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // GetObjectAclRequest
 *   Bucket: "STRING_VALUE", // required
 *   Key: "STRING_VALUE", // required
 *   VersionId: "STRING_VALUE",
 *   RequestPayer: "requester",
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new GetObjectAclCommand(input);
 * const response = await client.send(command);
 * // { // GetObjectAclOutput
 * //   Owner: { // Owner
 * //     DisplayName: "STRING_VALUE",
 * //     ID: "STRING_VALUE",
 * //   },
 * //   Grants: [ // Grants
 * //     { // Grant
 * //       Grantee: { // Grantee
 * //         DisplayName: "STRING_VALUE",
 * //         EmailAddress: "STRING_VALUE",
 * //         ID: "STRING_VALUE",
 * //         URI: "STRING_VALUE",
 * //         Type: "CanonicalUser" || "AmazonCustomerByEmail" || "Group", // required
 * //       },
 * //       Permission: "FULL_CONTROL" || "WRITE" || "WRITE_ACP" || "READ" || "READ_ACP",
 * //     },
 * //   ],
 * //   RequestCharged: "requester",
 * // };
 *
 * ```
 *
 * @param GetObjectAclCommandInput - {@link GetObjectAclCommandInput}
 * @returns {@link GetObjectAclCommandOutput}
 * @see {@link GetObjectAclCommandInput} for command's `input` shape.
 * @see {@link GetObjectAclCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link NoSuchKey} (client fault)
 *  <p>The specified key does not exist.</p>
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 * @example To retrieve object ACL
 * ```javascript
 * // The following example retrieves access control list (ACL) of an object.
 * const input = {
 *   "Bucket": "examplebucket",
 *   "Key": "HappyFace.jpg"
 * };
 * const command = new GetObjectAclCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Grants": [
 *     {
 *       "Grantee": {
 *         "DisplayName": "owner-display-name",
 *         "ID": "examplee7a2f25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc",
 *         "Type": "CanonicalUser"
 *       },
 *       "Permission": "WRITE"
 *     },
 *     {
 *       "Grantee": {
 *         "DisplayName": "owner-display-name",
 *         "ID": "examplee7a2f25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc",
 *         "Type": "CanonicalUser"
 *       },
 *       "Permission": "WRITE_ACP"
 *     },
 *     {
 *       "Grantee": {
 *         "DisplayName": "owner-display-name",
 *         "ID": "examplee7a2f25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc",
 *         "Type": "CanonicalUser"
 *       },
 *       "Permission": "READ"
 *     },
 *     {
 *       "Grantee": {
 *         "DisplayName": "owner-display-name",
 *         "ID": "852b113eexamplee7a2f25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc7a2f25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc",
 *         "Type": "CanonicalUser"
 *       },
 *       "Permission": "READ_ACP"
 *     }
 *   ],
 *   "Owner": {
 *     "DisplayName": "owner-display-name",
 *     "ID": "examplee7a2f25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc"
 *   }
 * }
 * *\/
 * // example id: to-retrieve-object-acl-1481833557740
 * ```
 *
 */
export class GetObjectAclCommand extends $Command<
  GetObjectAclCommandInput,
  GetObjectAclCommandOutput,
  S3ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      Bucket: { type: "contextParams", name: "Bucket" },
      ForcePathStyle: { type: "clientContextParams", name: "forcePathStyle" },
      UseArnRegion: { type: "clientContextParams", name: "useArnRegion" },
      DisableMultiRegionAccessPoints: { type: "clientContextParams", name: "disableMultiregionAccessPoints" },
      Accelerate: { type: "clientContextParams", name: "useAccelerateEndpoint" },
      UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" },
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: GetObjectAclCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetObjectAclCommandInput, GetObjectAclCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetObjectAclCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3Client";
    const commandName = "GetObjectAclCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonS3",
        operation: "GetObjectAcl",
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
  private serialize(input: GetObjectAclCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetObjectAclCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetObjectAclCommandOutput> {
    return de_GetObjectAclCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
