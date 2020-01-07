import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { CreateFieldLevelEncryptionConfigRequest, CreateFieldLevelEncryptionConfigResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateFieldLevelEncryptionConfigCommandInput = CreateFieldLevelEncryptionConfigRequest;
export declare type CreateFieldLevelEncryptionConfigCommandOutput = CreateFieldLevelEncryptionConfigResult & __MetadataBearer;
export declare class CreateFieldLevelEncryptionConfigCommand extends $Command<CreateFieldLevelEncryptionConfigCommandInput, CreateFieldLevelEncryptionConfigCommandOutput, CloudFrontClientResolvedConfig> {
    readonly input: CreateFieldLevelEncryptionConfigCommandInput;
    constructor(input: CreateFieldLevelEncryptionConfigCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFrontClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateFieldLevelEncryptionConfigCommandInput, CreateFieldLevelEncryptionConfigCommandOutput>;
    private serialize;
    private deserialize;
}
