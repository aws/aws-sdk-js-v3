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

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { GetWorkGroupInput, GetWorkGroupOutput } from "../models/models_0";
import { de_GetWorkGroupCommand, se_GetWorkGroupCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetWorkGroupCommand}.
 */
export interface GetWorkGroupCommandInput extends GetWorkGroupInput {}
/**
 * @public
 *
 * The output of {@link GetWorkGroupCommand}.
 */
export interface GetWorkGroupCommandOutput extends GetWorkGroupOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about the workgroup with the specified name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, GetWorkGroupCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, GetWorkGroupCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const input = { // GetWorkGroupInput
 *   WorkGroup: "STRING_VALUE", // required
 * };
 * const command = new GetWorkGroupCommand(input);
 * const response = await client.send(command);
 * // { // GetWorkGroupOutput
 * //   WorkGroup: { // WorkGroup
 * //     Name: "STRING_VALUE", // required
 * //     State: "ENABLED" || "DISABLED",
 * //     Configuration: { // WorkGroupConfiguration
 * //       ResultConfiguration: { // ResultConfiguration
 * //         OutputLocation: "STRING_VALUE",
 * //         EncryptionConfiguration: { // EncryptionConfiguration
 * //           EncryptionOption: "SSE_S3" || "SSE_KMS" || "CSE_KMS", // required
 * //           KmsKey: "STRING_VALUE",
 * //         },
 * //         ExpectedBucketOwner: "STRING_VALUE",
 * //         AclConfiguration: { // AclConfiguration
 * //           S3AclOption: "BUCKET_OWNER_FULL_CONTROL", // required
 * //         },
 * //       },
 * //       EnforceWorkGroupConfiguration: true || false,
 * //       PublishCloudWatchMetricsEnabled: true || false,
 * //       BytesScannedCutoffPerQuery: Number("long"),
 * //       RequesterPaysEnabled: true || false,
 * //       EngineVersion: { // EngineVersion
 * //         SelectedEngineVersion: "STRING_VALUE",
 * //         EffectiveEngineVersion: "STRING_VALUE",
 * //       },
 * //       AdditionalConfiguration: "STRING_VALUE",
 * //       ExecutionRole: "STRING_VALUE",
 * //       CustomerContentEncryptionConfiguration: { // CustomerContentEncryptionConfiguration
 * //         KmsKey: "STRING_VALUE", // required
 * //       },
 * //       EnableMinimumEncryptionConfiguration: true || false,
 * //     },
 * //     Description: "STRING_VALUE",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetWorkGroupCommandInput - {@link GetWorkGroupCommandInput}
 * @returns {@link GetWorkGroupCommandOutput}
 * @see {@link GetWorkGroupCommandInput} for command's `input` shape.
 * @see {@link GetWorkGroupCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates a platform issue, which may be due to a transient condition or
 *             outage.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *             required parameter may be missing or out of range.</p>
 *
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 */
export class GetWorkGroupCommand extends $Command<
  GetWorkGroupCommandInput,
  GetWorkGroupCommandOutput,
  AthenaClientResolvedConfig
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
  constructor(readonly input: GetWorkGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AthenaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetWorkGroupCommandInput, GetWorkGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetWorkGroupCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AthenaClient";
    const commandName = "GetWorkGroupCommand";
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
  private serialize(input: GetWorkGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetWorkGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetWorkGroupCommandOutput> {
    return de_GetWorkGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
