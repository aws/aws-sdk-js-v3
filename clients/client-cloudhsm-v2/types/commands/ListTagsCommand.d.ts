import { CloudHSMV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMV2Client";
import { ListTagsRequest, ListTagsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListTagsCommandInput = ListTagsRequest;
export declare type ListTagsCommandOutput = ListTagsResponse & __MetadataBearer;
export declare class ListTagsCommand extends $Command<ListTagsCommandInput, ListTagsCommandOutput, CloudHSMV2ClientResolvedConfig> {
    readonly input: ListTagsCommandInput;
    constructor(input: ListTagsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudHSMV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTagsCommandInput, ListTagsCommandOutput>;
    private serialize;
    private deserialize;
}
