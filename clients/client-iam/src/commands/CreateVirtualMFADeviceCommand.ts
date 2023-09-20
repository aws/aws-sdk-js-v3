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

import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import {
  CreateVirtualMFADeviceRequest,
  CreateVirtualMFADeviceResponse,
  CreateVirtualMFADeviceResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateVirtualMFADeviceCommand, se_CreateVirtualMFADeviceCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateVirtualMFADeviceCommand}.
 */
export interface CreateVirtualMFADeviceCommandInput extends CreateVirtualMFADeviceRequest {}
/**
 * @public
 *
 * The output of {@link CreateVirtualMFADeviceCommand}.
 */
export interface CreateVirtualMFADeviceCommandOutput extends CreateVirtualMFADeviceResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new virtual MFA device for the Amazon Web Services account. After creating the virtual
 *             MFA, use <a>EnableMFADevice</a> to attach the MFA device to an IAM user.
 *             For more information about creating and working with virtual MFA devices, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_VirtualMFA.html">Using a virtual MFA
 *                 device</a> in the <i>IAM User Guide</i>.</p>
 *          <p>For information about the maximum number of MFA devices you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS
 *                 quotas</a> in the <i>IAM User Guide</i>.</p>
 *          <important>
 *             <p>The seed information contained in the QR code and the Base32 string should be
 *                 treated like any other secret access information. In other words, protect the seed
 *                 information as you would your Amazon Web Services access keys or your passwords. After you
 *                 provision your virtual device, you should ensure that the information is destroyed
 *                 following secure procedures.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, CreateVirtualMFADeviceCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, CreateVirtualMFADeviceCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // CreateVirtualMFADeviceRequest
 *   Path: "STRING_VALUE",
 *   VirtualMFADeviceName: "STRING_VALUE", // required
 *   Tags: [ // tagListType
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateVirtualMFADeviceCommand(input);
 * const response = await client.send(command);
 * // { // CreateVirtualMFADeviceResponse
 * //   VirtualMFADevice: { // VirtualMFADevice
 * //     SerialNumber: "STRING_VALUE", // required
 * //     Base32StringSeed: "BLOB_VALUE",
 * //     QRCodePNG: "BLOB_VALUE",
 * //     User: { // User
 * //       Path: "STRING_VALUE", // required
 * //       UserName: "STRING_VALUE", // required
 * //       UserId: "STRING_VALUE", // required
 * //       Arn: "STRING_VALUE", // required
 * //       CreateDate: new Date("TIMESTAMP"), // required
 * //       PasswordLastUsed: new Date("TIMESTAMP"),
 * //       PermissionsBoundary: { // AttachedPermissionsBoundary
 * //         PermissionsBoundaryType: "PermissionsBoundaryPolicy",
 * //         PermissionsBoundaryArn: "STRING_VALUE",
 * //       },
 * //       Tags: [ // tagListType
 * //         { // Tag
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //     EnableDate: new Date("TIMESTAMP"),
 * //     Tags: [
 * //       {
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateVirtualMFADeviceCommandInput - {@link CreateVirtualMFADeviceCommandInput}
 * @returns {@link CreateVirtualMFADeviceCommandOutput}
 * @see {@link CreateVirtualMFADeviceCommandInput} for command's `input` shape.
 * @see {@link CreateVirtualMFADeviceCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>The request was rejected because multiple requests to change this object were submitted
 *       simultaneously. Wait a few minutes and submit your request again.</p>
 *
 * @throws {@link EntityAlreadyExistsException} (client fault)
 *  <p>The request was rejected because it attempted to create a resource that already
 *       exists.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *       input parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current
 *       Amazon Web Services account limits. The error message describes the limit exceeded.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 */
export class CreateVirtualMFADeviceCommand extends $Command<
  CreateVirtualMFADeviceCommandInput,
  CreateVirtualMFADeviceCommandOutput,
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
  constructor(readonly input: CreateVirtualMFADeviceCommandInput) {
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
  ): Handler<CreateVirtualMFADeviceCommandInput, CreateVirtualMFADeviceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateVirtualMFADeviceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "CreateVirtualMFADeviceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: CreateVirtualMFADeviceResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIdentityManagementV20100508",
        operation: "CreateVirtualMFADevice",
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
  private serialize(input: CreateVirtualMFADeviceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateVirtualMFADeviceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateVirtualMFADeviceCommandOutput> {
    return de_CreateVirtualMFADeviceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
