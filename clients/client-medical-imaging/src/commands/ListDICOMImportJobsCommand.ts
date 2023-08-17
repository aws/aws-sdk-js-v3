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

import { MedicalImagingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MedicalImagingClient";
import { ListDICOMImportJobsRequest, ListDICOMImportJobsResponse } from "../models/models_0";
import { de_ListDICOMImportJobsCommand, se_ListDICOMImportJobsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListDICOMImportJobsCommand}.
 */
export interface ListDICOMImportJobsCommandInput extends ListDICOMImportJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListDICOMImportJobsCommand}.
 */
export interface ListDICOMImportJobsCommandOutput extends ListDICOMImportJobsResponse, __MetadataBearer {}

/**
 * @public
 * <p>List import jobs created by this AWS account for a specific data store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MedicalImagingClient, ListDICOMImportJobsCommand } from "@aws-sdk/client-medical-imaging"; // ES Modules import
 * // const { MedicalImagingClient, ListDICOMImportJobsCommand } = require("@aws-sdk/client-medical-imaging"); // CommonJS import
 * const client = new MedicalImagingClient(config);
 * const input = { // ListDICOMImportJobsRequest
 *   datastoreId: "STRING_VALUE", // required
 *   jobStatus: "SUBMITTED" || "IN_PROGRESS" || "COMPLETED" || "FAILED",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListDICOMImportJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListDICOMImportJobsResponse
 * //   jobSummaries: [ // DICOMImportJobSummaries // required
 * //     { // DICOMImportJobSummary
 * //       jobId: "STRING_VALUE", // required
 * //       jobName: "STRING_VALUE", // required
 * //       jobStatus: "SUBMITTED" || "IN_PROGRESS" || "COMPLETED" || "FAILED", // required
 * //       datastoreId: "STRING_VALUE", // required
 * //       dataAccessRoleArn: "STRING_VALUE",
 * //       endedAt: new Date("TIMESTAMP"),
 * //       submittedAt: new Date("TIMESTAMP"),
 * //       message: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDICOMImportJobsCommandInput - {@link ListDICOMImportJobsCommandInput}
 * @returns {@link ListDICOMImportJobsCommandOutput}
 * @see {@link ListDICOMImportJobsCommandInput} for command's `input` shape.
 * @see {@link ListDICOMImportJobsCommandOutput} for command's `response` shape.
 * @see {@link MedicalImagingClientResolvedConfig | config} for MedicalImagingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during processing of the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link MedicalImagingServiceException}
 * <p>Base exception class for all service exceptions from MedicalImaging service.</p>
 *
 */
export class ListDICOMImportJobsCommand extends $Command<
  ListDICOMImportJobsCommandInput,
  ListDICOMImportJobsCommandOutput,
  MedicalImagingClientResolvedConfig
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
  constructor(readonly input: ListDICOMImportJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MedicalImagingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDICOMImportJobsCommandInput, ListDICOMImportJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListDICOMImportJobsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MedicalImagingClient";
    const commandName = "ListDICOMImportJobsCommand";
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
  private serialize(input: ListDICOMImportJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListDICOMImportJobsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDICOMImportJobsCommandOutput> {
    return de_ListDICOMImportJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
