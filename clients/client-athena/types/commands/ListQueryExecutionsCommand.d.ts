import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { ListQueryExecutionsInput, ListQueryExecutionsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListQueryExecutionsCommandInput = ListQueryExecutionsInput;
export declare type ListQueryExecutionsCommandOutput = ListQueryExecutionsOutput & __MetadataBearer;
export declare class ListQueryExecutionsCommand extends $Command<ListQueryExecutionsCommandInput, ListQueryExecutionsCommandOutput, AthenaClientResolvedConfig> {
    readonly input: ListQueryExecutionsCommandInput;
    constructor(input: ListQueryExecutionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AthenaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListQueryExecutionsCommandInput, ListQueryExecutionsCommandOutput>;
    private serialize;
    private deserialize;
}
