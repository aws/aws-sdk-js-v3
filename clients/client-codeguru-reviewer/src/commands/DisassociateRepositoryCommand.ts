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

import { CodeGuruReviewerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruReviewerClient";
import { DisassociateRepositoryRequest, DisassociateRepositoryResponse } from "../models/models_0";
import { de_DisassociateRepositoryCommand, se_DisassociateRepositoryCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DisassociateRepositoryCommand}.
 */
export interface DisassociateRepositoryCommandInput extends DisassociateRepositoryRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateRepositoryCommand}.
 */
export interface DisassociateRepositoryCommandOutput extends DisassociateRepositoryResponse, __MetadataBearer {}

/**
 * @public
 * <p>Removes the association between Amazon CodeGuru Reviewer and a repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruReviewerClient, DisassociateRepositoryCommand } from "@aws-sdk/client-codeguru-reviewer"; // ES Modules import
 * // const { CodeGuruReviewerClient, DisassociateRepositoryCommand } = require("@aws-sdk/client-codeguru-reviewer"); // CommonJS import
 * const client = new CodeGuruReviewerClient(config);
 * const input = { // DisassociateRepositoryRequest
 *   AssociationArn: "STRING_VALUE", // required
 * };
 * const command = new DisassociateRepositoryCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateRepositoryResponse
 * //   RepositoryAssociation: { // RepositoryAssociation
 * //     AssociationId: "STRING_VALUE",
 * //     AssociationArn: "STRING_VALUE",
 * //     ConnectionArn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Owner: "STRING_VALUE",
 * //     ProviderType: "CodeCommit" || "GitHub" || "Bitbucket" || "GitHubEnterpriseServer" || "S3Bucket",
 * //     State: "Associated" || "Associating" || "Failed" || "Disassociating" || "Disassociated",
 * //     StateReason: "STRING_VALUE",
 * //     LastUpdatedTimeStamp: new Date("TIMESTAMP"),
 * //     CreatedTimeStamp: new Date("TIMESTAMP"),
 * //     KMSKeyDetails: { // KMSKeyDetails
 * //       KMSKeyId: "STRING_VALUE",
 * //       EncryptionOption: "AWS_OWNED_CMK" || "CUSTOMER_MANAGED_CMK",
 * //     },
 * //     S3RepositoryDetails: { // S3RepositoryDetails
 * //       BucketName: "STRING_VALUE",
 * //       CodeArtifacts: { // CodeArtifacts
 * //         SourceCodeArtifactsObjectKey: "STRING_VALUE", // required
 * //         BuildArtifactsObjectKey: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DisassociateRepositoryCommandInput - {@link DisassociateRepositoryCommandInput}
 * @returns {@link DisassociateRepositoryCommandOutput}
 * @see {@link DisassociateRepositoryCommandInput} for command's `input` shape.
 * @see {@link DisassociateRepositoryCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruReviewerClientResolvedConfig | config} for CodeGuruReviewerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested operation would cause a conflict with the current state of a service
 *          resource associated with the request. Resolve the conflict before retrying this request.
 *       </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource specified in the request was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the specified constraints.</p>
 *
 * @throws {@link CodeGuruReviewerServiceException}
 * <p>Base exception class for all service exceptions from CodeGuruReviewer service.</p>
 *
 */
export class DisassociateRepositoryCommand extends $Command<
  DisassociateRepositoryCommandInput,
  DisassociateRepositoryCommandOutput,
  CodeGuruReviewerClientResolvedConfig
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
  constructor(readonly input: DisassociateRepositoryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeGuruReviewerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateRepositoryCommandInput, DisassociateRepositoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociateRepositoryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeGuruReviewerClient";
    const commandName = "DisassociateRepositoryCommand";
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
  private serialize(input: DisassociateRepositoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DisassociateRepositoryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisassociateRepositoryCommandOutput> {
    return de_DisassociateRepositoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
