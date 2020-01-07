import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { ListInstancesInput, ListInstancesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListInstancesCommandInput = ListInstancesInput;
export declare type ListInstancesCommandOutput = ListInstancesOutput & __MetadataBearer;
export declare class ListInstancesCommand extends $Command<ListInstancesCommandInput, ListInstancesCommandOutput, EMRClientResolvedConfig> {
    readonly input: ListInstancesCommandInput;
    constructor(input: ListInstancesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EMRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListInstancesCommandInput, ListInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
