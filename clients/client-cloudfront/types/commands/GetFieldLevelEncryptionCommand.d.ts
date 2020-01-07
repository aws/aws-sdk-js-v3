import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { GetFieldLevelEncryptionRequest, GetFieldLevelEncryptionResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetFieldLevelEncryptionCommandInput = GetFieldLevelEncryptionRequest;
export declare type GetFieldLevelEncryptionCommandOutput = GetFieldLevelEncryptionResult & __MetadataBearer;
export declare class GetFieldLevelEncryptionCommand extends $Command<GetFieldLevelEncryptionCommandInput, GetFieldLevelEncryptionCommandOutput, CloudFrontClientResolvedConfig> {
    readonly input: GetFieldLevelEncryptionCommandInput;
    constructor(input: GetFieldLevelEncryptionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFrontClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetFieldLevelEncryptionCommandInput, GetFieldLevelEncryptionCommandOutput>;
    private serialize;
    private deserialize;
}
