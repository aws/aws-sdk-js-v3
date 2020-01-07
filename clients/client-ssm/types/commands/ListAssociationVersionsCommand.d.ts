import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { ListAssociationVersionsRequest, ListAssociationVersionsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListAssociationVersionsCommandInput = ListAssociationVersionsRequest;
export declare type ListAssociationVersionsCommandOutput = ListAssociationVersionsResult & __MetadataBearer;
export declare class ListAssociationVersionsCommand extends $Command<ListAssociationVersionsCommandInput, ListAssociationVersionsCommandOutput, SSMClientResolvedConfig> {
    readonly input: ListAssociationVersionsCommandInput;
    constructor(input: ListAssociationVersionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAssociationVersionsCommandInput, ListAssociationVersionsCommandOutput>;
    private serialize;
    private deserialize;
}
