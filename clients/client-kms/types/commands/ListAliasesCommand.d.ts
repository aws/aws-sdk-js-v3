import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { ListAliasesRequest, ListAliasesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListAliasesCommandInput = ListAliasesRequest;
export declare type ListAliasesCommandOutput = ListAliasesResponse & __MetadataBearer;
export declare class ListAliasesCommand extends $Command<ListAliasesCommandInput, ListAliasesCommandOutput, KMSClientResolvedConfig> {
    readonly input: ListAliasesCommandInput;
    constructor(input: ListAliasesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAliasesCommandInput, ListAliasesCommandOutput>;
    private serialize;
    private deserialize;
}
