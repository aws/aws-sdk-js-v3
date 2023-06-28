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

import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import {
  ListVirtualMFADevicesRequest,
  ListVirtualMFADevicesResponse,
  ListVirtualMFADevicesResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_ListVirtualMFADevicesCommand, se_ListVirtualMFADevicesCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListVirtualMFADevicesCommand}.
 */
export interface ListVirtualMFADevicesCommandInput extends ListVirtualMFADevicesRequest {}
/**
 * @public
 *
 * The output of {@link ListVirtualMFADevicesCommand}.
 */
export interface ListVirtualMFADevicesCommandOutput extends ListVirtualMFADevicesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the virtual MFA devices defined in the Amazon Web Services account by assignment status. If
 *             you do not specify an assignment status, the operation returns a list of all virtual MFA
 *             devices. Assignment status can be <code>Assigned</code>, <code>Unassigned</code>, or
 *                 <code>Any</code>.</p>
 *          <note>
 *             <p>IAM resource-listing operations return a subset of the available
 *    attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view tag information for a virtual MFA device, see <a>ListMFADeviceTags</a>.</p>
 *          </note>
 *          <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
 *             parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListVirtualMFADevicesCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListVirtualMFADevicesCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // ListVirtualMFADevicesRequest
 *   AssignmentStatus: "Assigned" || "Unassigned" || "Any",
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListVirtualMFADevicesCommand(input);
 * const response = await client.send(command);
 * // { // ListVirtualMFADevicesResponse
 * //   VirtualMFADevices: [ // virtualMFADeviceListType // required
 * //     { // VirtualMFADevice
 * //       SerialNumber: "STRING_VALUE", // required
 * //       Base32StringSeed: "BLOB_VALUE",
 * //       QRCodePNG: "BLOB_VALUE",
 * //       User: { // User
 * //         Path: "STRING_VALUE", // required
 * //         UserName: "STRING_VALUE", // required
 * //         UserId: "STRING_VALUE", // required
 * //         Arn: "STRING_VALUE", // required
 * //         CreateDate: new Date("TIMESTAMP"), // required
 * //         PasswordLastUsed: new Date("TIMESTAMP"),
 * //         PermissionsBoundary: { // AttachedPermissionsBoundary
 * //           PermissionsBoundaryType: "PermissionsBoundaryPolicy",
 * //           PermissionsBoundaryArn: "STRING_VALUE",
 * //         },
 * //         Tags: [ // tagListType
 * //           { // Tag
 * //             Key: "STRING_VALUE", // required
 * //             Value: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //       EnableDate: new Date("TIMESTAMP"),
 * //       Tags: [
 * //         {
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   IsTruncated: true || false,
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListVirtualMFADevicesCommandInput - {@link ListVirtualMFADevicesCommandInput}
 * @returns {@link ListVirtualMFADevicesCommandOutput}
 * @see {@link ListVirtualMFADevicesCommandInput} for command's `input` shape.
 * @see {@link ListVirtualMFADevicesCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 * @example To list virtual MFA devices
 * ```javascript
 * // The following command lists the virtual MFA devices that have been configured for the current account.
 * const input = {};
 * const command = new ListVirtualMFADevicesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "VirtualMFADevices": [
 *     {
 *       "SerialNumber": "arn:aws:iam::123456789012:mfa/ExampleMFADevice"
 *     },
 *     {
 *       "SerialNumber": "arn:aws:iam::123456789012:mfa/Juan"
 *     }
 *   ]
 * }
 * *\/
 * // example id: 54f9ac18-5100-4070-bec4-fe5f612710d5
 * ```
 *
 */
export class ListVirtualMFADevicesCommand extends $Command<
  ListVirtualMFADevicesCommandInput,
  ListVirtualMFADevicesCommandOutput,
  IAMClientResolvedConfig
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
  constructor(readonly input: ListVirtualMFADevicesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListVirtualMFADevicesCommandInput, ListVirtualMFADevicesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListVirtualMFADevicesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "ListVirtualMFADevicesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: ListVirtualMFADevicesResponseFilterSensitiveLog,
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
  private serialize(input: ListVirtualMFADevicesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListVirtualMFADevicesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListVirtualMFADevicesCommandOutput> {
    return de_ListVirtualMFADevicesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
