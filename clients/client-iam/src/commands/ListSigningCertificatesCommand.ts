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
import { ListSigningCertificatesRequest, ListSigningCertificatesResponse } from "../models/models_0";
import { de_ListSigningCertificatesCommand, se_ListSigningCertificatesCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListSigningCertificatesCommand}.
 */
export interface ListSigningCertificatesCommandInput extends ListSigningCertificatesRequest {}
/**
 * @public
 *
 * The output of {@link ListSigningCertificatesCommand}.
 */
export interface ListSigningCertificatesCommandOutput extends ListSigningCertificatesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about the signing certificates associated with the specified IAM
 *             user. If none exists, the operation returns an empty list.</p>
 *          <p>Although each user is limited to a small number of signing certificates, you can still
 *             paginate the results using the <code>MaxItems</code> and <code>Marker</code>
 *             parameters.</p>
 *          <p>If the <code>UserName</code> field is not specified, the user name is determined
 *             implicitly based on the Amazon Web Services access key ID used to sign the request for this operation.
 *             This operation works for access keys under the Amazon Web Services account. Consequently, you can use
 *             this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no
 *             associated users.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListSigningCertificatesCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListSigningCertificatesCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // ListSigningCertificatesRequest
 *   UserName: "STRING_VALUE",
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListSigningCertificatesCommand(input);
 * const response = await client.send(command);
 * // { // ListSigningCertificatesResponse
 * //   Certificates: [ // certificateListType // required
 * //     { // SigningCertificate
 * //       UserName: "STRING_VALUE", // required
 * //       CertificateId: "STRING_VALUE", // required
 * //       CertificateBody: "STRING_VALUE", // required
 * //       Status: "Active" || "Inactive", // required
 * //       UploadDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   IsTruncated: true || false,
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSigningCertificatesCommandInput - {@link ListSigningCertificatesCommandInput}
 * @returns {@link ListSigningCertificatesCommandOutput}
 * @see {@link ListSigningCertificatesCommandInput} for command's `input` shape.
 * @see {@link ListSigningCertificatesCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 * @example To list the signing certificates for an IAM user
 * ```javascript
 * // The following command lists the signing certificates for the IAM user named Bob.
 * const input = {
 *   "UserName": "Bob"
 * };
 * const command = new ListSigningCertificatesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Certificates": [
 *     {
 *       "CertificateBody": "-----BEGIN CERTIFICATE-----<certificate-body>-----END CERTIFICATE-----",
 *       "CertificateId": "TA7SMP42TDN5Z26OBPJE7EXAMPLE",
 *       "Status": "Active",
 *       "UploadDate": "2013-06-06T21:40:08Z",
 *       "UserName": "Bob"
 *     }
 *   ]
 * }
 * *\/
 * // example id: b4c10256-4fc9-457e-b3fd-4a110d4d73dc
 * ```
 *
 */
export class ListSigningCertificatesCommand extends $Command<
  ListSigningCertificatesCommandInput,
  ListSigningCertificatesCommandOutput,
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
  constructor(readonly input: ListSigningCertificatesCommandInput) {
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
  ): Handler<ListSigningCertificatesCommandInput, ListSigningCertificatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSigningCertificatesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "ListSigningCertificatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIdentityManagementV20100508",
        operation: "ListSigningCertificates",
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
  private serialize(input: ListSigningCertificatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListSigningCertificatesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSigningCertificatesCommandOutput> {
    return de_ListSigningCertificatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
