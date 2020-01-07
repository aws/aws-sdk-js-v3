import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { ListExportsInput, ListExportsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListExportsCommandInput = ListExportsInput;
export declare type ListExportsCommandOutput = ListExportsOutput & __MetadataBearer;
export declare class ListExportsCommand extends $Command<ListExportsCommandInput, ListExportsCommandOutput, CloudFormationClientResolvedConfig> {
    readonly input: ListExportsCommandInput;
    constructor(input: ListExportsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListExportsCommandInput, ListExportsCommandOutput>;
    private serialize;
    private deserialize;
}
