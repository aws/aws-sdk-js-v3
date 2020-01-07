import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { ListInstanceGroupsInput, ListInstanceGroupsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListInstanceGroupsCommandInput = ListInstanceGroupsInput;
export declare type ListInstanceGroupsCommandOutput = ListInstanceGroupsOutput & __MetadataBearer;
export declare class ListInstanceGroupsCommand extends $Command<ListInstanceGroupsCommandInput, ListInstanceGroupsCommandOutput, EMRClientResolvedConfig> {
    readonly input: ListInstanceGroupsCommandInput;
    constructor(input: ListInstanceGroupsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EMRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListInstanceGroupsCommandInput, ListInstanceGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
