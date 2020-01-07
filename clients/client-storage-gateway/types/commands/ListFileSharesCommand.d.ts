import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { ListFileSharesInput, ListFileSharesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListFileSharesCommandInput = ListFileSharesInput;
export declare type ListFileSharesCommandOutput = ListFileSharesOutput & __MetadataBearer;
export declare class ListFileSharesCommand extends $Command<ListFileSharesCommandInput, ListFileSharesCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: ListFileSharesCommandInput;
    constructor(input: ListFileSharesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListFileSharesCommandInput, ListFileSharesCommandOutput>;
    private serialize;
    private deserialize;
}
