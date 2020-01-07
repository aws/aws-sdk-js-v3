import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { ListFieldLevelEncryptionConfigsRequest, ListFieldLevelEncryptionConfigsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListFieldLevelEncryptionConfigsCommandInput = ListFieldLevelEncryptionConfigsRequest;
export declare type ListFieldLevelEncryptionConfigsCommandOutput = ListFieldLevelEncryptionConfigsResult & __MetadataBearer;
export declare class ListFieldLevelEncryptionConfigsCommand extends $Command<ListFieldLevelEncryptionConfigsCommandInput, ListFieldLevelEncryptionConfigsCommandOutput, CloudFrontClientResolvedConfig> {
    readonly input: ListFieldLevelEncryptionConfigsCommandInput;
    constructor(input: ListFieldLevelEncryptionConfigsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFrontClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListFieldLevelEncryptionConfigsCommandInput, ListFieldLevelEncryptionConfigsCommandOutput>;
    private serialize;
    private deserialize;
}
