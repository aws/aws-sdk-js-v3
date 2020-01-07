import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { ListPlatformApplicationsInput, ListPlatformApplicationsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListPlatformApplicationsCommandInput = ListPlatformApplicationsInput;
export declare type ListPlatformApplicationsCommandOutput = ListPlatformApplicationsResponse & __MetadataBearer;
export declare class ListPlatformApplicationsCommand extends $Command<ListPlatformApplicationsCommandInput, ListPlatformApplicationsCommandOutput, SNSClientResolvedConfig> {
    readonly input: ListPlatformApplicationsCommandInput;
    constructor(input: ListPlatformApplicationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SNSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListPlatformApplicationsCommandInput, ListPlatformApplicationsCommandOutput>;
    private serialize;
    private deserialize;
}
