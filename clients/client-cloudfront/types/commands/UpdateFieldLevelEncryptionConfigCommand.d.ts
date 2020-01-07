import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { UpdateFieldLevelEncryptionConfigRequest, UpdateFieldLevelEncryptionConfigResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateFieldLevelEncryptionConfigCommandInput = UpdateFieldLevelEncryptionConfigRequest;
export declare type UpdateFieldLevelEncryptionConfigCommandOutput = UpdateFieldLevelEncryptionConfigResult & __MetadataBearer;
export declare class UpdateFieldLevelEncryptionConfigCommand extends $Command<UpdateFieldLevelEncryptionConfigCommandInput, UpdateFieldLevelEncryptionConfigCommandOutput, CloudFrontClientResolvedConfig> {
    readonly input: UpdateFieldLevelEncryptionConfigCommandInput;
    constructor(input: UpdateFieldLevelEncryptionConfigCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFrontClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateFieldLevelEncryptionConfigCommandInput, UpdateFieldLevelEncryptionConfigCommandOutput>;
    private serialize;
    private deserialize;
}
