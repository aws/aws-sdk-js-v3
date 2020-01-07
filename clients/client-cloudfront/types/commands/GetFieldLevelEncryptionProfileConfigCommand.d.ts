import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { GetFieldLevelEncryptionProfileConfigRequest, GetFieldLevelEncryptionProfileConfigResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetFieldLevelEncryptionProfileConfigCommandInput = GetFieldLevelEncryptionProfileConfigRequest;
export declare type GetFieldLevelEncryptionProfileConfigCommandOutput = GetFieldLevelEncryptionProfileConfigResult & __MetadataBearer;
export declare class GetFieldLevelEncryptionProfileConfigCommand extends $Command<GetFieldLevelEncryptionProfileConfigCommandInput, GetFieldLevelEncryptionProfileConfigCommandOutput, CloudFrontClientResolvedConfig> {
    readonly input: GetFieldLevelEncryptionProfileConfigCommandInput;
    constructor(input: GetFieldLevelEncryptionProfileConfigCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFrontClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetFieldLevelEncryptionProfileConfigCommandInput, GetFieldLevelEncryptionProfileConfigCommandOutput>;
    private serialize;
    private deserialize;
}
