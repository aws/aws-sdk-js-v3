import { CodeStarClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeStarClient";
import { ListUserProfilesRequest, ListUserProfilesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListUserProfilesCommandInput = ListUserProfilesRequest;
export declare type ListUserProfilesCommandOutput = ListUserProfilesResult & __MetadataBearer;
export declare class ListUserProfilesCommand extends $Command<ListUserProfilesCommandInput, ListUserProfilesCommandOutput, CodeStarClientResolvedConfig> {
    readonly input: ListUserProfilesCommandInput;
    constructor(input: ListUserProfilesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeStarClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListUserProfilesCommandInput, ListUserProfilesCommandOutput>;
    private serialize;
    private deserialize;
}
