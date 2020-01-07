import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { ListDatasetGroupsRequest, ListDatasetGroupsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListDatasetGroupsCommandInput = ListDatasetGroupsRequest;
export declare type ListDatasetGroupsCommandOutput = ListDatasetGroupsResponse & __MetadataBearer;
export declare class ListDatasetGroupsCommand extends $Command<ListDatasetGroupsCommandInput, ListDatasetGroupsCommandOutput, PersonalizeClientResolvedConfig> {
    readonly input: ListDatasetGroupsCommandInput;
    constructor(input: ListDatasetGroupsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PersonalizeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDatasetGroupsCommandInput, ListDatasetGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
