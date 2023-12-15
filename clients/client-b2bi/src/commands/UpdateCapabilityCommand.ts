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

import { B2biClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../B2biClient";
import { UpdateCapabilityRequest, UpdateCapabilityResponse } from "../models/models_0";
import { de_UpdateCapabilityCommand, se_UpdateCapabilityCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateCapabilityCommand}.
 */
export interface UpdateCapabilityCommandInput extends UpdateCapabilityRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCapabilityCommand}.
 */
export interface UpdateCapabilityCommandOutput extends UpdateCapabilityResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates some of the parameters for a capability, based on the specified parameters.
 *       A trading capability contains the information required to transform incoming EDI documents into JSON or XML outputs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { B2biClient, UpdateCapabilityCommand } from "@aws-sdk/client-b2bi"; // ES Modules import
 * // const { B2biClient, UpdateCapabilityCommand } = require("@aws-sdk/client-b2bi"); // CommonJS import
 * const client = new B2biClient(config);
 * const input = { // UpdateCapabilityRequest
 *   capabilityId: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   configuration: { // CapabilityConfiguration Union: only one key present
 *     edi: { // EdiConfiguration
 *       type: { // EdiType Union: only one key present
 *         x12Details: { // X12Details
 *           transactionSet: "X12_110" || "X12_180" || "X12_204" || "X12_210" || "X12_214" || "X12_215" || "X12_310" || "X12_315" || "X12_322" || "X12_404" || "X12_410" || "X12_820" || "X12_824" || "X12_830" || "X12_846" || "X12_850" || "X12_852" || "X12_855" || "X12_856" || "X12_860" || "X12_861" || "X12_864" || "X12_940" || "X12_990" || "X12_997",
 *           version: "VERSION_4010" || "VERSION_4030" || "VERSION_5010",
 *         },
 *       },
 *       inputLocation: { // S3Location
 *         bucketName: "STRING_VALUE",
 *         key: "STRING_VALUE",
 *       },
 *       outputLocation: {
 *         bucketName: "STRING_VALUE",
 *         key: "STRING_VALUE",
 *       },
 *       transformerId: "STRING_VALUE", // required
 *     },
 *   },
 *   instructionsDocuments: [ // InstructionsDocuments
 *     {
 *       bucketName: "STRING_VALUE",
 *       key: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new UpdateCapabilityCommand(input);
 * const response = await client.send(command);
 * // { // UpdateCapabilityResponse
 * //   capabilityId: "STRING_VALUE", // required
 * //   capabilityArn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   type: "edi", // required
 * //   configuration: { // CapabilityConfiguration Union: only one key present
 * //     edi: { // EdiConfiguration
 * //       type: { // EdiType Union: only one key present
 * //         x12Details: { // X12Details
 * //           transactionSet: "X12_110" || "X12_180" || "X12_204" || "X12_210" || "X12_214" || "X12_215" || "X12_310" || "X12_315" || "X12_322" || "X12_404" || "X12_410" || "X12_820" || "X12_824" || "X12_830" || "X12_846" || "X12_850" || "X12_852" || "X12_855" || "X12_856" || "X12_860" || "X12_861" || "X12_864" || "X12_940" || "X12_990" || "X12_997",
 * //           version: "VERSION_4010" || "VERSION_4030" || "VERSION_5010",
 * //         },
 * //       },
 * //       inputLocation: { // S3Location
 * //         bucketName: "STRING_VALUE",
 * //         key: "STRING_VALUE",
 * //       },
 * //       outputLocation: {
 * //         bucketName: "STRING_VALUE",
 * //         key: "STRING_VALUE",
 * //       },
 * //       transformerId: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   instructionsDocuments: [ // InstructionsDocuments
 * //     {
 * //       bucketName: "STRING_VALUE",
 * //       key: "STRING_VALUE",
 * //     },
 * //   ],
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   modifiedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdateCapabilityCommandInput - {@link UpdateCapabilityCommandInput}
 * @returns {@link UpdateCapabilityCommandOutput}
 * @see {@link UpdateCapabilityCommandInput} for command's `input` shape.
 * @see {@link UpdateCapabilityCommandOutput} for command's `response` shape.
 * @see {@link B2biClientResolvedConfig | config} for B2biClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflict exception is thrown when you attempt to delete a resource (such as a profile or a capability) that is being used by other resources.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown when an error occurs in the Amazon Web Services B2B Data Interchange service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Occurs when the requested resource does not exist, or cannot be found. In some cases, the resource exists in a region other than the region specified in the API call.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Occurs when the calling command attempts to exceed one of the service quotas, for example trying to create a capability when you already have the maximum number of capabilities allowed.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling: the data speed and rendering may be limited depending on various parameters and conditions.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Occurs when a B2BI object cannot be validated against a request from another object.</p>
 *
 * @throws {@link B2biServiceException}
 * <p>Base exception class for all service exceptions from B2bi service.</p>
 *
 * @example Sample UpdateCapability call
 * ```javascript
 * //
 * const input = {
 *   "name": "b2biexample",
 *   "capabilityId": "ca-963a8121e4fc4e348",
 *   "configuration": {
 *     "edi": {
 *       "type": {
 *         "x12Details": {
 *           "version": "VERSION_4010",
 *           "transactionSet": "X12_110"
 *         }
 *       },
 *       "inputLocation": {
 *         "key": "input/",
 *         "bucketName": "test-bucket"
 *       },
 *       "outputLocation": {
 *         "key": "output/",
 *         "bucketName": "test-bucket"
 *       },
 *       "transformerId": "tr-9a893cf536df4658b"
 *     }
 *   },
 *   "instructionsDocuments": [
 *     {
 *       "key": "instructiondoc.txt",
 *       "bucketName": "test-bucket"
 *     }
 *   ]
 * };
 * const command = new UpdateCapabilityCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "name": "b2biexample",
 *   "type": "edi",
 *   "capabilityArn": "arn:aws:b2bi:us-west-2:123456789012:capability/ca-963a8121e4fc4e348",
 *   "capabilityId": "ca-963a8121e4fc4e348",
 *   "configuration": {
 *     "edi": {
 *       "type": {
 *         "x12Details": {
 *           "version": "VERSION_4010",
 *           "transactionSet": "X12_110"
 *         }
 *       },
 *       "inputLocation": {
 *         "key": "input/",
 *         "bucketName": "test-bucket"
 *       },
 *       "outputLocation": {
 *         "key": "output/",
 *         "bucketName": "test-bucket"
 *       },
 *       "transformerId": "tr-9a893cf536df4658b"
 *     }
 *   },
 *   "createdAt": "2023-11-01T21:51:05.504Z",
 *   "instructionsDocuments": [
 *     {
 *       "key": "instructiondoc.txt",
 *       "bucketName": "test-bucket"
 *     }
 *   ],
 *   "modifiedAt": "2023-11-01T21:51:05.504Z"
 * }
 * *\/
 * // example id: example-1
 * ```
 *
 */
export class UpdateCapabilityCommand extends $Command<
  UpdateCapabilityCommandInput,
  UpdateCapabilityCommandOutput,
  B2biClientResolvedConfig
> {
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
  constructor(readonly input: UpdateCapabilityCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: B2biClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateCapabilityCommandInput, UpdateCapabilityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateCapabilityCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "B2biClient";
    const commandName = "UpdateCapabilityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "B2BI",
        operation: "UpdateCapability",
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
  private serialize(input: UpdateCapabilityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateCapabilityCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateCapabilityCommandOutput> {
    return de_UpdateCapabilityCommand(output, context);
  }
}
