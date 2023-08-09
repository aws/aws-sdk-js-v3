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

import { ListSigningJobsRequest, ListSigningJobsResponse } from "../models/models_0";
import { de_ListSigningJobsCommand, se_ListSigningJobsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SignerClientResolvedConfig } from "../SignerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListSigningJobsCommand}.
 */
export interface ListSigningJobsCommandInput extends ListSigningJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListSigningJobsCommand}.
 */
export interface ListSigningJobsCommandOutput extends ListSigningJobsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists all your signing jobs. You can use the <code>maxResults</code> parameter to
 * 			limit the number of signing jobs that are returned in the response. If additional jobs
 * 			remain to be listed, code signing returns a <code>nextToken</code> value. Use this value in
 * 			subsequent calls to <code>ListSigningJobs</code> to fetch the remaining values. You can
 * 			continue calling <code>ListSigningJobs</code> with your <code>maxResults</code>
 * 			parameter and with new values that code signing returns in the <code>nextToken</code>
 * 			parameter until all of your signing jobs have been returned. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, ListSigningJobsCommand } from "@aws-sdk/client-signer"; // ES Modules import
 * // const { SignerClient, ListSigningJobsCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * const client = new SignerClient(config);
 * const input = { // ListSigningJobsRequest
 *   status: "InProgress" || "Failed" || "Succeeded",
 *   platformId: "STRING_VALUE",
 *   requestedBy: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   isRevoked: true || false,
 *   signatureExpiresBefore: new Date("TIMESTAMP"),
 *   signatureExpiresAfter: new Date("TIMESTAMP"),
 *   jobInvoker: "STRING_VALUE",
 * };
 * const command = new ListSigningJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListSigningJobsResponse
 * //   jobs: [ // SigningJobs
 * //     { // SigningJob
 * //       jobId: "STRING_VALUE",
 * //       source: { // Source
 * //         s3: { // S3Source
 * //           bucketName: "STRING_VALUE", // required
 * //           key: "STRING_VALUE", // required
 * //           version: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       signedObject: { // SignedObject
 * //         s3: { // S3SignedObject
 * //           bucketName: "STRING_VALUE",
 * //           key: "STRING_VALUE",
 * //         },
 * //       },
 * //       signingMaterial: { // SigningMaterial
 * //         certificateArn: "STRING_VALUE", // required
 * //       },
 * //       createdAt: new Date("TIMESTAMP"),
 * //       status: "InProgress" || "Failed" || "Succeeded",
 * //       isRevoked: true || false,
 * //       profileName: "STRING_VALUE",
 * //       profileVersion: "STRING_VALUE",
 * //       platformId: "STRING_VALUE",
 * //       platformDisplayName: "STRING_VALUE",
 * //       signatureExpiresAt: new Date("TIMESTAMP"),
 * //       jobOwner: "STRING_VALUE",
 * //       jobInvoker: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSigningJobsCommandInput - {@link ListSigningJobsCommandInput}
 * @returns {@link ListSigningJobsCommandOutput}
 * @see {@link ListSigningJobsCommandInput} for command's `input` shape.
 * @see {@link ListSigningJobsCommandOutput} for command's `response` shape.
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
 * @throws {@link ValidationException} (client fault)
 *  <p>You signing certificate could not be validated.</p>
 *
 * @throws {@link SignerServiceException}
 * <p>Base exception class for all service exceptions from Signer service.</p>
 *
 */
export class ListSigningJobsCommand extends $Command<
  ListSigningJobsCommandInput,
  ListSigningJobsCommandOutput,
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
  constructor(readonly input: ListSigningJobsCommandInput) {
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
  ): Handler<ListSigningJobsCommandInput, ListSigningJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSigningJobsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SignerClient";
    const commandName = "ListSigningJobsCommand";
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
  private serialize(input: ListSigningJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListSigningJobsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSigningJobsCommandOutput> {
    return de_ListSigningJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
