import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { GetFieldLevelEncryptionConfigRequest, GetFieldLevelEncryptionConfigResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetFieldLevelEncryptionConfigCommandInput = GetFieldLevelEncryptionConfigRequest;
export declare type GetFieldLevelEncryptionConfigCommandOutput = GetFieldLevelEncryptionConfigResult & __MetadataBearer;
export declare class GetFieldLevelEncryptionConfigCommand extends $Command<GetFieldLevelEncryptionConfigCommandInput, GetFieldLevelEncryptionConfigCommandOutput, CloudFrontClientResolvedConfig> {
    readonly input: GetFieldLevelEncryptionConfigCommandInput;
    constructor(input: GetFieldLevelEncryptionConfigCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFrontClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetFieldLevelEncryptionConfigCommandInput, GetFieldLevelEncryptionConfigCommandOutput>;
    private serialize;
    private deserialize;
}
