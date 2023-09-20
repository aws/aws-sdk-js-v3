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

import { GetJobManifestRequest, GetJobManifestResult } from "../models/models_0";
import { de_GetJobManifestCommand, se_GetJobManifestCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetJobManifestCommand}.
 */
export interface GetJobManifestCommandInput extends GetJobManifestRequest {}
/**
 * @public
 *
 * The output of {@link GetJobManifestCommand}.
 */
export interface GetJobManifestCommandOutput extends GetJobManifestResult, __MetadataBearer {}

/**
 * @public
 * <p>Returns a link to an Amazon S3 presigned URL for the manifest file associated with the
 *       specified <code>JobId</code> value. You can access the manifest file for up to 60 minutes
 *       after this request has been made. To access the manifest file after 60 minutes have passed,
 *       you'll have to make another call to the <code>GetJobManifest</code> action.</p>
 *          <p>The manifest is an encrypted file that you can download after your job enters the
 *         <code>WithCustomer</code> status. This is the only valid status for calling this API as the
 *       manifest and <code>UnlockCode</code> code value are used for securing your device and should
 *       only be used when you have the device.  The manifest is decrypted by using the
 *         <code>UnlockCode</code> code value, when you pass both values to the Snow device through the
 *       Snowball client when the client is started for the first time. </p>
 *          <p>As a best practice, we recommend that you don't save a copy of an
 *         <code>UnlockCode</code> value in the same location as the manifest file for that job. Saving
 *       these separately helps prevent unauthorized parties from gaining access to the Snow device
 *       associated with that job.</p>
 *          <p>The credentials of a given job, including its manifest file and unlock code, expire 360
 *       days after the job is created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, GetJobManifestCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, GetJobManifestCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const input = { // GetJobManifestRequest
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new GetJobManifestCommand(input);
 * const response = await client.send(command);
 * // { // GetJobManifestResult
 * //   ManifestURI: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetJobManifestCommandInput - {@link GetJobManifestCommandInput}
 * @returns {@link GetJobManifestCommandOutput}
 * @see {@link GetJobManifestCommandInput} for command's `input` shape.
 * @see {@link GetJobManifestCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for SnowballClient's `config` shape.
 *
 * @throws {@link InvalidJobStateException} (client fault)
 *  <p>The action can't be performed because the job's current state doesn't allow that action
 *       to be performed.</p>
 *
 * @throws {@link InvalidResourceException} (client fault)
 *  <p>The specified resource can't be found. Check the information you provided in your last
 *       request, and try again.</p>
 *
 * @throws {@link SnowballServiceException}
 * <p>Base exception class for all service exceptions from Snowball service.</p>
 *
 * @example To get the manifest for a job you've created for AWS Snowball
 * ```javascript
 * // Returns a link to an Amazon S3 presigned URL for the manifest file associated with the specified JobId value. You can access the manifest file for up to 60 minutes after this request has been made. To access the manifest file after 60 minutes have passed, you'll have to make another call to the GetJobManifest action.
 * //
 * // The manifest is an encrypted file that you can download after your job enters the WithCustomer status. The manifest is decrypted by using the UnlockCode code value, when you pass both values to the Snowball through the Snowball client when the client is started for the first time.
 * //
 * // As a best practice, we recommend that you don't save a copy of an UnlockCode value in the same location as the manifest file for that job. Saving these separately helps prevent unauthorized parties from gaining access to the Snowball associated with that job.
 * //
 * // The credentials of a given job, including its manifest file and unlock code, expire 90 days after the job is created.
 * const input = {
 *   "JobId": "JID123e4567-e89b-12d3-a456-426655440000"
 * };
 * const command = new GetJobManifestCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ManifestURI": "https://awsie-frosty-manifests-prod.s3.amazonaws.com/JID123e4567-e89b-12d3-a456-426655440000_manifest.bin?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20161224T005115Z&X-Amz-SignedHeaders=..."
 * }
 * *\/
 * // example id: to-get-the-manifest-for-a-job-youve-created-for-aws-snowball-1482540389246
 * ```
 *
 */
export class GetJobManifestCommand extends $Command<
  GetJobManifestCommandInput,
  GetJobManifestCommandOutput,
  SnowballClientResolvedConfig
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
  constructor(readonly input: GetJobManifestCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SnowballClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetJobManifestCommandInput, GetJobManifestCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetJobManifestCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SnowballClient";
    const commandName = "GetJobManifestCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIESnowballJobManagementService",
        operation: "GetJobManifest",
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
  private serialize(input: GetJobManifestCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetJobManifestCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetJobManifestCommandOutput> {
    return de_GetJobManifestCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
