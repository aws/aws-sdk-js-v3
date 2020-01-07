import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { GetFieldLevelEncryptionProfileRequest, GetFieldLevelEncryptionProfileResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetFieldLevelEncryptionProfileCommandInput = GetFieldLevelEncryptionProfileRequest;
export declare type GetFieldLevelEncryptionProfileCommandOutput = GetFieldLevelEncryptionProfileResult & __MetadataBearer;
export declare class GetFieldLevelEncryptionProfileCommand extends $Command<GetFieldLevelEncryptionProfileCommandInput, GetFieldLevelEncryptionProfileCommandOutput, CloudFrontClientResolvedConfig> {
    readonly input: GetFieldLevelEncryptionProfileCommandInput;
    constructor(input: GetFieldLevelEncryptionProfileCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFrontClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetFieldLevelEncryptionProfileCommandInput, GetFieldLevelEncryptionProfileCommandOutput>;
    private serialize;
    private deserialize;
}
