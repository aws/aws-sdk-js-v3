import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { CreateFieldLevelEncryptionProfileRequest, CreateFieldLevelEncryptionProfileResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateFieldLevelEncryptionProfileCommandInput = CreateFieldLevelEncryptionProfileRequest;
export declare type CreateFieldLevelEncryptionProfileCommandOutput = CreateFieldLevelEncryptionProfileResult & __MetadataBearer;
export declare class CreateFieldLevelEncryptionProfileCommand extends $Command<CreateFieldLevelEncryptionProfileCommandInput, CreateFieldLevelEncryptionProfileCommandOutput, CloudFrontClientResolvedConfig> {
    readonly input: CreateFieldLevelEncryptionProfileCommandInput;
    constructor(input: CreateFieldLevelEncryptionProfileCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFrontClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateFieldLevelEncryptionProfileCommandInput, CreateFieldLevelEncryptionProfileCommandOutput>;
    private serialize;
    private deserialize;
}
