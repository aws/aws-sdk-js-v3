import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { ListNamedQueriesInput, ListNamedQueriesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListNamedQueriesCommandInput = ListNamedQueriesInput;
export declare type ListNamedQueriesCommandOutput = ListNamedQueriesOutput & __MetadataBearer;
export declare class ListNamedQueriesCommand extends $Command<ListNamedQueriesCommandInput, ListNamedQueriesCommandOutput, AthenaClientResolvedConfig> {
    readonly input: ListNamedQueriesCommandInput;
    constructor(input: ListNamedQueriesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AthenaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListNamedQueriesCommandInput, ListNamedQueriesCommandOutput>;
    private serialize;
    private deserialize;
}
