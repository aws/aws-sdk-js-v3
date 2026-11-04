// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateObjectAttributesRequest, UpdateObjectAttributesResponse } from "../models/models_0";
import { UpdateObjectAttributes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateObjectAttributesCommand}.
 */
export interface UpdateObjectAttributesCommandInput extends UpdateObjectAttributesRequest {}
/**
 * @public
 *
 * The output of {@link UpdateObjectAttributesCommand}.
 */
export interface UpdateObjectAttributesCommandOutput extends UpdateObjectAttributesResponse, __MetadataBearer {}

/**
 * Updates a given object's attributes.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, UpdateObjectAttributesCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, UpdateObjectAttributesCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * // import type { CloudDirectoryClientConfig } from "@aws-sdk/client-clouddirectory";
 * const config = {}; // type is CloudDirectoryClientConfig
 * const client = new CloudDirectoryClient(config);
 * const input = { // UpdateObjectAttributesRequest
 *   DirectoryArn: "STRING_VALUE", // required
 *   ObjectReference: { // ObjectReference
 *     Selector: "STRING_VALUE",
 *   },
 *   AttributeUpdates: [ // ObjectAttributeUpdateList // required
 *     { // ObjectAttributeUpdate
 *       ObjectAttributeKey: { // AttributeKey
 *         SchemaArn: "STRING_VALUE", // required
 *         FacetName: "STRING_VALUE", // required
 *         Name: "STRING_VALUE", // required
 *       },
 *       ObjectAttributeAction: { // ObjectAttributeAction
 *         ObjectAttributeActionType: "CREATE_OR_UPDATE" || "DELETE",
 *         ObjectAttributeUpdateValue: { // TypedAttributeValue Union: only one key present
 *           StringValue: "STRING_VALUE",
 *           BinaryValue: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *           BooleanValue: true || false,
 *           NumberValue: "STRING_VALUE",
 *           DatetimeValue: new Date("TIMESTAMP"),
 *         },
 *       },
 *     },
 *   ],
 * };
 * const command = new UpdateObjectAttributesCommand(input);
 * const response = await client.send(command);
 * // { // UpdateObjectAttributesResponse
 * //   ObjectIdentifier: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateObjectAttributesCommandInput - {@link UpdateObjectAttributesCommandInput}
 * @returns {@link UpdateObjectAttributesCommandOutput}
 * @see {@link UpdateObjectAttributesCommandInput} for command's `input` shape.
 * @see {@link UpdateObjectAttributesCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for CloudDirectoryClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access denied or directory not found. Either you don't have permissions for this directory or the directory does not exist. Try calling ListDirectories and check your permissions.
 *
 * @throws {@link DirectoryNotEnabledException} (client fault)
 *
 * Operations are only permitted on enabled directories.
 *
 * @throws {@link FacetValidationException} (client fault)
 *
 * The Facet that you provided was not well formed or could not be validated with the schema.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the [AWS Service Health Dashboard](http://status.aws.amazon.com/) site to see if there are any operational issues with the service.
 *
 * @throws {@link InvalidArnException} (client fault)
 *
 * Indicates that the provided ARN value is not valid.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * Indicates that limits are exceeded. See [Limits](https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html) for more information.
 *
 * @throws {@link LinkNameAlreadyInUseException} (client fault)
 *
 * Indicates that a link could not be created due to a naming conflict. Choose a different name and then try again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource could not be found.
 *
 * @throws {@link RetryableConflictException} (client fault)
 *
 * Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Indicates that your request is malformed in some manner. See the exception message.
 *
 * @throws {@link CloudDirectoryServiceException}
 *
 * Base exception class for all service exceptions from CloudDirectory service.
 *
 * @public
 */
export class UpdateObjectAttributesCommand extends command<UpdateObjectAttributesCommandInput, UpdateObjectAttributesCommandOutput>(
  _ep0,
  _mw0,
  "UpdateObjectAttributes",
  UpdateObjectAttributes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateObjectAttributesRequest;
      output: UpdateObjectAttributesResponse;
    };
    sdk: {
      input: UpdateObjectAttributesCommandInput;
      output: UpdateObjectAttributesCommandOutput;
    };
  };
}
