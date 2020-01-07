import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { DeleteFieldLevelEncryptionConfigRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteFieldLevelEncryptionConfigCommandInput = DeleteFieldLevelEncryptionConfigRequest;
export declare type DeleteFieldLevelEncryptionConfigCommandOutput = __MetadataBearer;
export declare class DeleteFieldLevelEncryptionConfigCommand extends $Command<DeleteFieldLevelEncryptionConfigCommandInput, DeleteFieldLevelEncryptionConfigCommandOutput, CloudFrontClientResolvedConfig> {
    readonly input: DeleteFieldLevelEncryptionConfigCommandInput;
    constructor(input: DeleteFieldLevelEncryptionConfigCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFrontClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteFieldLevelEncryptionConfigCommandInput, DeleteFieldLevelEncryptionConfigCommandOutput>;
    private serialize;
    private deserialize;
}
