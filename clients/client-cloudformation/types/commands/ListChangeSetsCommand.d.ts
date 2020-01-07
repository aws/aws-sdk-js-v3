import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { ListChangeSetsInput, ListChangeSetsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListChangeSetsCommandInput = ListChangeSetsInput;
export declare type ListChangeSetsCommandOutput = ListChangeSetsOutput & __MetadataBearer;
export declare class ListChangeSetsCommand extends $Command<ListChangeSetsCommandInput, ListChangeSetsCommandOutput, CloudFormationClientResolvedConfig> {
    readonly input: ListChangeSetsCommandInput;
    constructor(input: ListChangeSetsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListChangeSetsCommandInput, ListChangeSetsCommandOutput>;
    private serialize;
    private deserialize;
}
