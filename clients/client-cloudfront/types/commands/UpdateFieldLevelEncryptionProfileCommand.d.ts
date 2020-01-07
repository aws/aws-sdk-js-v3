import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { UpdateFieldLevelEncryptionProfileRequest, UpdateFieldLevelEncryptionProfileResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateFieldLevelEncryptionProfileCommandInput = UpdateFieldLevelEncryptionProfileRequest;
export declare type UpdateFieldLevelEncryptionProfileCommandOutput = UpdateFieldLevelEncryptionProfileResult & __MetadataBearer;
export declare class UpdateFieldLevelEncryptionProfileCommand extends $Command<UpdateFieldLevelEncryptionProfileCommandInput, UpdateFieldLevelEncryptionProfileCommandOutput, CloudFrontClientResolvedConfig> {
    readonly input: UpdateFieldLevelEncryptionProfileCommandInput;
    constructor(input: UpdateFieldLevelEncryptionProfileCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFrontClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateFieldLevelEncryptionProfileCommandInput, UpdateFieldLevelEncryptionProfileCommandOutput>;
    private serialize;
    private deserialize;
}
