import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { ListTagsRequest, ListTagsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListTagsCommandInput = ListTagsRequest;
export declare type ListTagsCommandOutput = ListTagsResult & __MetadataBearer;
export declare class ListTagsCommand extends $Command<ListTagsCommandInput, ListTagsCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: ListTagsCommandInput;
    constructor(input: ListTagsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTagsCommandInput, ListTagsCommandOutput>;
    private serialize;
    private deserialize;
}
