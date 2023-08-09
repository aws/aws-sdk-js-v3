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

import { ListSigningProfilesRequest, ListSigningProfilesResponse } from "../models/models_0";
import { de_ListSigningProfilesCommand, se_ListSigningProfilesCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SignerClientResolvedConfig } from "../SignerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListSigningProfilesCommand}.
 */
export interface ListSigningProfilesCommandInput extends ListSigningProfilesRequest {}
/**
 * @public
 *
 * The output of {@link ListSigningProfilesCommand}.
 */
export interface ListSigningProfilesCommandOutput extends ListSigningProfilesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists all available signing profiles in your AWS account. Returns only profiles with
 * 			an <code>ACTIVE</code> status unless the <code>includeCanceled</code> request field is
 * 			set to <code>true</code>. If additional jobs remain to be listed, code signing returns a
 * 				<code>nextToken</code> value. Use this value in subsequent calls to
 * 				<code>ListSigningJobs</code> to fetch the remaining values. You can continue calling
 * 				<code>ListSigningJobs</code> with your <code>maxResults</code> parameter and with
 * 			new values that code signing returns in the <code>nextToken</code> parameter until all of your
 * 			signing jobs have been returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, ListSigningProfilesCommand } from "@aws-sdk/client-signer"; // ES Modules import
 * // const { SignerClient, ListSigningProfilesCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * const client = new SignerClient(config);
 * const input = { // ListSigningProfilesRequest
 *   includeCanceled: true || false,
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   platformId: "STRING_VALUE",
 *   statuses: [ // Statuses
 *     "Active" || "Canceled" || "Revoked",
 *   ],
 * };
 * const command = new ListSigningProfilesCommand(input);
 * const response = await client.send(command);
 * // { // ListSigningProfilesResponse
 * //   profiles: [ // SigningProfiles
 * //     { // SigningProfile
 * //       profileName: "STRING_VALUE",
 * //       profileVersion: "STRING_VALUE",
 * //       profileVersionArn: "STRING_VALUE",
 * //       signingMaterial: { // SigningMaterial
 * //         certificateArn: "STRING_VALUE", // required
 * //       },
 * //       signatureValidityPeriod: { // SignatureValidityPeriod
 * //         value: Number("int"),
 * //         type: "DAYS" || "MONTHS" || "YEARS",
 * //       },
 * //       platformId: "STRING_VALUE",
 * //       platformDisplayName: "STRING_VALUE",
 * //       signingParameters: { // SigningParameters
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       status: "Active" || "Canceled" || "Revoked",
 * //       arn: "STRING_VALUE",
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSigningProfilesCommandInput - {@link ListSigningProfilesCommandInput}
 * @returns {@link ListSigningProfilesCommandOutput}
 * @see {@link ListSigningProfilesCommandInput} for command's `input` shape.
 * @see {@link ListSigningProfilesCommandOutput} for command's `response` shape.
 * @see {@link SignerClientResolvedConfig | config} for SignerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The allowed number of job-signing requests has been exceeded.</p>
 * 		       <p>This error supersedes the error <code>ThrottlingException</code>.</p>
 *
 * @throws {@link SignerServiceException}
 * <p>Base exception class for all service exceptions from Signer service.</p>
 *
 */
export class ListSigningProfilesCommand extends $Command<
  ListSigningProfilesCommandInput,
  ListSigningProfilesCommandOutput,
  SignerClientResolvedConfig
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
  constructor(readonly input: ListSigningProfilesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SignerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSigningProfilesCommandInput, ListSigningProfilesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSigningProfilesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SignerClient";
    const commandName = "ListSigningProfilesCommand";
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
  private serialize(input: ListSigningProfilesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListSigningProfilesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSigningProfilesCommandOutput> {
    return de_ListSigningProfilesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
