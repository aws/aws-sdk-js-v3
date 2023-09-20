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

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { ListIdentityResolutionJobsRequest, ListIdentityResolutionJobsResponse } from "../models/models_0";
import { de_ListIdentityResolutionJobsCommand, se_ListIdentityResolutionJobsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListIdentityResolutionJobsCommand}.
 */
export interface ListIdentityResolutionJobsCommandInput extends ListIdentityResolutionJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListIdentityResolutionJobsCommand}.
 */
export interface ListIdentityResolutionJobsCommandOutput extends ListIdentityResolutionJobsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists all of the Identity Resolution Jobs in your domain. The response sorts the list by
 *             <code>JobStartTime</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, ListIdentityResolutionJobsCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, ListIdentityResolutionJobsCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const input = { // ListIdentityResolutionJobsRequest
 *   DomainName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListIdentityResolutionJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListIdentityResolutionJobsResponse
 * //   IdentityResolutionJobsList: [ // IdentityResolutionJobsList
 * //     { // IdentityResolutionJob
 * //       DomainName: "STRING_VALUE",
 * //       JobId: "STRING_VALUE",
 * //       Status: "PENDING" || "PREPROCESSING" || "FIND_MATCHING" || "MERGING" || "COMPLETED" || "PARTIAL_SUCCESS" || "FAILED",
 * //       JobStartTime: new Date("TIMESTAMP"),
 * //       JobEndTime: new Date("TIMESTAMP"),
 * //       JobStats: { // JobStats
 * //         NumberOfProfilesReviewed: Number("long"),
 * //         NumberOfMatchesFound: Number("long"),
 * //         NumberOfMergesDone: Number("long"),
 * //       },
 * //       ExportingLocation: { // ExportingLocation
 * //         S3Exporting: { // S3ExportingLocation
 * //           S3BucketName: "STRING_VALUE",
 * //           S3KeyName: "STRING_VALUE",
 * //         },
 * //       },
 * //       Message: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListIdentityResolutionJobsCommandInput - {@link ListIdentityResolutionJobsCommandInput}
 * @returns {@link ListIdentityResolutionJobsCommandOutput}
 * @see {@link ListIdentityResolutionJobsCommandInput} for command's `input` shape.
 * @see {@link ListIdentityResolutionJobsCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for CustomerProfilesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource does not exist, or access was denied.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>You exceeded the maximum number of requests.</p>
 *
 * @throws {@link CustomerProfilesServiceException}
 * <p>Base exception class for all service exceptions from CustomerProfiles service.</p>
 *
 */
export class ListIdentityResolutionJobsCommand extends $Command<
  ListIdentityResolutionJobsCommandInput,
  ListIdentityResolutionJobsCommandOutput,
  CustomerProfilesClientResolvedConfig
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
  constructor(readonly input: ListIdentityResolutionJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CustomerProfilesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListIdentityResolutionJobsCommandInput, ListIdentityResolutionJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListIdentityResolutionJobsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CustomerProfilesClient";
    const commandName = "ListIdentityResolutionJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CustomerProfiles_20200815",
        operation: "ListIdentityResolutionJobs",
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
  private serialize(input: ListIdentityResolutionJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListIdentityResolutionJobsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListIdentityResolutionJobsCommandOutput> {
    return de_ListIdentityResolutionJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
