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

import { MedicalImagingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MedicalImagingClient";
import {
  UpdateImageSetMetadataRequest,
  UpdateImageSetMetadataRequestFilterSensitiveLog,
  UpdateImageSetMetadataResponse,
} from "../models/models_0";
import { de_UpdateImageSetMetadataCommand, se_UpdateImageSetMetadataCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateImageSetMetadataCommand}.
 */
export interface UpdateImageSetMetadataCommandInput extends UpdateImageSetMetadataRequest {}
/**
 * @public
 *
 * The output of {@link UpdateImageSetMetadataCommand}.
 */
export interface UpdateImageSetMetadataCommandOutput extends UpdateImageSetMetadataResponse, __MetadataBearer {}

/**
 * @public
 * <p>Update image set metadata attributes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MedicalImagingClient, UpdateImageSetMetadataCommand } from "@aws-sdk/client-medical-imaging"; // ES Modules import
 * // const { MedicalImagingClient, UpdateImageSetMetadataCommand } = require("@aws-sdk/client-medical-imaging"); // CommonJS import
 * const client = new MedicalImagingClient(config);
 * const input = { // UpdateImageSetMetadataRequest
 *   datastoreId: "STRING_VALUE", // required
 *   imageSetId: "STRING_VALUE", // required
 *   latestVersionId: "STRING_VALUE", // required
 *   updateImageSetMetadataUpdates: { // MetadataUpdates Union: only one key present
 *     DICOMUpdates: { // DICOMUpdates
 *       removableAttributes: "BLOB_VALUE",
 *       updatableAttributes: "BLOB_VALUE",
 *     },
 *   },
 * };
 * const command = new UpdateImageSetMetadataCommand(input);
 * const response = await client.send(command);
 * // { // UpdateImageSetMetadataResponse
 * //   datastoreId: "STRING_VALUE", // required
 * //   imageSetId: "STRING_VALUE", // required
 * //   latestVersionId: "STRING_VALUE", // required
 * //   imageSetState: "ACTIVE" || "LOCKED" || "DELETED", // required
 * //   imageSetWorkflowStatus: "CREATED" || "COPIED" || "COPYING" || "COPYING_WITH_READ_ONLY_ACCESS" || "COPY_FAILED" || "UPDATING" || "UPDATED" || "UPDATE_FAILED" || "DELETING" || "DELETED",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   message: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateImageSetMetadataCommandInput - {@link UpdateImageSetMetadataCommandInput}
 * @returns {@link UpdateImageSetMetadataCommandOutput}
 * @see {@link UpdateImageSetMetadataCommandInput} for command's `input` shape.
 * @see {@link UpdateImageSetMetadataCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request caused a service quota to be exceeded.</p>
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
export class UpdateImageSetMetadataCommand extends $Command<
  UpdateImageSetMetadataCommandInput,
  UpdateImageSetMetadataCommandOutput,
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
  constructor(readonly input: UpdateImageSetMetadataCommandInput) {
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
  ): Handler<UpdateImageSetMetadataCommandInput, UpdateImageSetMetadataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateImageSetMetadataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MedicalImagingClient";
    const commandName = "UpdateImageSetMetadataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateImageSetMetadataRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AHIGatewayService",
        operation: "UpdateImageSetMetadata",
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
  private serialize(input: UpdateImageSetMetadataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateImageSetMetadataCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateImageSetMetadataCommandOutput> {
    return de_UpdateImageSetMetadataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
