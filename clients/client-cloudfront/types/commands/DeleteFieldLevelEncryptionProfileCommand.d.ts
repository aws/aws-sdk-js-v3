import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { DeleteFieldLevelEncryptionProfileRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteFieldLevelEncryptionProfileCommandInput = DeleteFieldLevelEncryptionProfileRequest;
export declare type DeleteFieldLevelEncryptionProfileCommandOutput = __MetadataBearer;
export declare class DeleteFieldLevelEncryptionProfileCommand extends $Command<DeleteFieldLevelEncryptionProfileCommandInput, DeleteFieldLevelEncryptionProfileCommandOutput, CloudFrontClientResolvedConfig> {
    readonly input: DeleteFieldLevelEncryptionProfileCommandInput;
    constructor(input: DeleteFieldLevelEncryptionProfileCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFrontClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteFieldLevelEncryptionProfileCommandInput, DeleteFieldLevelEncryptionProfileCommandOutput>;
    private serialize;
    private deserialize;
}
