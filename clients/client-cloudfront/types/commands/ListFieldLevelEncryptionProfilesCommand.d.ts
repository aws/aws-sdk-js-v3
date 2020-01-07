import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { ListFieldLevelEncryptionProfilesRequest, ListFieldLevelEncryptionProfilesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListFieldLevelEncryptionProfilesCommandInput = ListFieldLevelEncryptionProfilesRequest;
export declare type ListFieldLevelEncryptionProfilesCommandOutput = ListFieldLevelEncryptionProfilesResult & __MetadataBearer;
export declare class ListFieldLevelEncryptionProfilesCommand extends $Command<ListFieldLevelEncryptionProfilesCommandInput, ListFieldLevelEncryptionProfilesCommandOutput, CloudFrontClientResolvedConfig> {
    readonly input: ListFieldLevelEncryptionProfilesCommandInput;
    constructor(input: ListFieldLevelEncryptionProfilesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFrontClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListFieldLevelEncryptionProfilesCommandInput, ListFieldLevelEncryptionProfilesCommandOutput>;
    private serialize;
    private deserialize;
}
