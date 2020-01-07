import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { ListTaskDefinitionsRequest, ListTaskDefinitionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListTaskDefinitionsCommandInput = ListTaskDefinitionsRequest;
export declare type ListTaskDefinitionsCommandOutput = ListTaskDefinitionsResponse & __MetadataBearer;
export declare class ListTaskDefinitionsCommand extends $Command<ListTaskDefinitionsCommandInput, ListTaskDefinitionsCommandOutput, ECSClientResolvedConfig> {
    readonly input: ListTaskDefinitionsCommandInput;
    constructor(input: ListTaskDefinitionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTaskDefinitionsCommandInput, ListTaskDefinitionsCommandOutput>;
    private serialize;
    private deserialize;
}
